import React, { useEffect, useRef, useState, useCallback } from "react";
import PropsTypes from "prop-types";
import Pdf from "react-to-pdf";
import { createBrowserHistory } from "history";
import { useSelector, useDispatch } from "react-redux";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import { getPaymentsBySession } from "../../../redux/actions/authAction";
import Table from "../../Reusables/Table/Table";
import Dropdown from "../Dropdown";

const OfflinePayment = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState();

  const paymentsBySession = useSelector(
    (state) => state.auth.paymentsBySession
  );

  const dispatch = useDispatch();
  const ref = useRef();

  const handleOfflinePayment = useCallback(async () => {
    setError(null);
    try {
      const data = {
        sessionId: 0,
        sessionName: "",
        activated: true,
        adminting: true,
        paymentMode: 1,
      };
      await dispatch(getPaymentsBySession(data));
    } catch (error) {
      setError(error.message);
    }
  }, [dispatch, setError]);

  useEffect(() => {
    setIsLoading(true);
    handleOfflinePayment().then(() => {
      setIsLoading(false);
    });
  }, [handleOfflinePayment]);

  const paymentRouteChange = (student) => {
    createBrowserHistory().push(`/payment/${student.paymentId}`);
    createBrowserHistory().go(0);
  };

  const getData = (paymentsBySession) => {
    return paymentsBySession.map((student, index) => {
      return {
        ...student,
        payment: (
          <button
            className="btn btn-sm pg-button btn-primary px-3"
            onClick={() => paymentRouteChange(student)}
          >
            Payment
          </button>
        ),
      };
    });
  };

  const columns = [
    {
      Header: "First Name",
      accessor: "firstname",
    },
    {
      Header: "Last Name",
      accessor: "lastname",
    },
    {
      Header: "Mobile Number",
      accessor: "mobileNumber",
    },
    {
      Header: "Level Name",
      accessor: "levelName",
    },
    {
      Header: "Payment Type",
      accessor: "paymentType",
    },
    {
      Header: "Programme Name",
      accessor: "programmeName",
    },
    {
      Header: "",
      accessor: "payment",
    },
  ];

  let checkArrLength = paymentsBySession.length === 0;

  const topCard = (
    <div className="row">
      <div className="col-lg-12 px-0">
        <div className="card border__radius_20">
          <div className="card-body">
            <div className="d-flex align-items-center">
              {!isLoading && !checkArrLength ? (
                <>
                  <ReactHTMLTableToExcel
                    className="btn btn-sm pg-button btn-primary py-2"
                    table="emp"
                    filename="Payments Data Report"
                    sheet="Sheet"
                    buttonText="Export Excel"
                  />
                  <Pdf targetRef={ref} filename="payments-data.pdf">
                    {({ toPdf }) => (
                      <button
                        className="btn btn-sm pg-button btn-primary py-2 ml-2"
                        onClick={toPdf}
                      >
                        Generate Pdf
                      </button>
                    )}
                  </Pdf>
                </>
              ) : null}
              <Dropdown />
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (error) {
    return (
      <div className="page-wrapper">
        <div className="container-fluid forms-wrapper">
          {!error ? topCard : null}
          <div className="row">
            <div className="col-lg-12 card card-body border__radius_20">
              <h5 className="mb-0 text-center">An error occurred!</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="page-wrapper">
        <div className="container-fluid forms-wrapper">
          {topCard}
          <div className="row">
            <div className="col-lg-12 card card-body border__radius_20">
              <h5 className="mb-0 text-center">Loading...</h5>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (checkArrLength) {
    return (
      <div className="page-wrapper">
        <div className="container-fluid forms-wrapper">
          {topCard}
          <div className="row">
            <div className="col-lg-12 card card-body border__radius_20">
              <h5 className="mb-0 text-center">
                Data not found. Select another session from the dropdown to show
                the data!
              </h5>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="page-wrapper">
      <div className="container-fluid forms-wrapper">
        {topCard}
        <div className="row">
          <div className="col-lg-12 card-layout border__radius_20">
            <div ref={ref} id="section-to-print">
              <Table
                id="emp"
                columns={columns}
                data={getData(paymentsBySession)}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

OfflinePayment.propsTypes = {
  getPaymentsBySession: PropsTypes.func.isRequired,
  paymentsBySession: PropsTypes.array.isRequired,
};

export default OfflinePayment;
