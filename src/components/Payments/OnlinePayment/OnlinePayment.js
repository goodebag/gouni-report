import React, { useEffect, useRef } from "react";
import PropsTypes from "prop-types";
import Pdf from "react-to-pdf";
import { createBrowserHistory } from "history";
import { useSelector, useDispatch } from "react-redux";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import { getPaymentsBySession } from "../../../redux/actions/authAction";
import Table from "../../Reusables/Table/Table";
import Dropdown from "./Dropdown";

const OnlinePayment = () => {
  const paymentsBySession = useSelector(
    (state) => state.auth.paymentsBySession
  );

  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    const data = {
      sessionId: 0,
      sessionName: "",
      activated: true,
      adminting: true,
      paymentMode: 2,
    };

    dispatch(getPaymentsBySession(data));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePayment = (student) => {
    createBrowserHistory().push(`/payment/${student.paymentId}`);
    createBrowserHistory().go(0);
  };

  function getData(paymentsBySession) {
    return paymentsBySession.map((student, index) => {
      return {
        ...student,
        payment: (
          <button
            className="btn btn-sm pg-button btn-primary px-3"
            onClick={() => handlePayment(student)}
          >
            Payment
          </button>
        ),
      };
    });
  }

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

  let renderData = () => {
    if (paymentsBySession.length === 0 || !paymentsBySession) {
      return <h5 className="text-center mb-0 p-md-0 p-4">Data not found. Select another session from the dropdown to show the data!</h5>;
    } else {
      return (
        <div ref={ref} id="section-to-print">
          <Table id="emp" columns={columns} data={getData(paymentsBySession)} />
        </div>
      );
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container-fluid forms-wrapper">
        <div className="row">
          <div className="col-lg-12 px-0">
            <div className="card border__radius_20">
              <div className="card-body">
                <div className="d-flex align-items-center">
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
                  <Dropdown />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 card-layout border__radius_20">
            {renderData()}
          </div>
        </div>
      </div>
    </div>
  );
};

OnlinePayment.propsTypes = {
  getPaymentsBySession: PropsTypes.func.isRequired,
  paymentsBySession: PropsTypes.array.isRequired,
};

export default OnlinePayment;
