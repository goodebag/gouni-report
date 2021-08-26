import React, { useEffect, useRef } from "react";
import PropsTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getStudentPaymentsSession } from "../../redux/actions/authAction";
import { createBrowserHistory } from "history";
import Table from "../Reusables/Table/Table";

function PaymentsSession() {
  const studentPaymentsSession = useSelector(
    (state) => state.auth.studentPaymentsSession
  );

  const dispatch = useDispatch();
  const params = useParams();
  const ref = useRef();

  const personId = params.personId;
  const sessionId = params.sessionId;

  useEffect(() => {
    dispatch(getStudentPaymentsSession(personId, sessionId));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [personId, sessionId]);

  const getBack = () => {
    createBrowserHistory().push("/students");
    createBrowserHistory().go(0);
  };

  const columns = [
    {
      Header: "Payment Id",
      accessor: "paymentId",
    },
    {
      Header: "Person Id",
      accessor: "personId",
    },
    {
      Header: "Payment Installment Id",
      accessor: "paymentInstallmentId",
    },
    {
      Header: "Payment MediumId",
      accessor: "paymentMediumId",
    },
    {
      Header: "Fee ScheduleId",
      accessor: "feeScheduleId",
    },
    {
      Header: "Invoice Number",
      accessor: "invoiceNumber",
    },
    {
      Header: "Transaction Date",
      accessor: "transactionDate",
    },
  ];

  let renderData = () => {
    if (studentPaymentsSession.length === 0 || !studentPaymentsSession) {
      return (
        <h5 className="text-center mb-0 p-md-0 p-4">Loading...</h5>
      );
    } else {
      return (
        <div ref={ref} id="payments-session-to-print">
          <Table id="emp" columns={columns} data={studentPaymentsSession} />
        </div>
      );
    }
  };

  return (
    <div className="page-wrapper">
      <div className="row">
          <div className="col-lg-12">
            <div className="card shadow-sm mb-0">
              <div className="card-body">
                <div className="d-flex align-items-center">
                  <h2 className="text-primary mb-0">Payment</h2>
                  <button
                    className="btn btn-sm pg-button btn-primary py-2 px-3 ml-auto"
                    onClick={() => getBack()}
                  >
                    Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      <div className="container-fluid forms-wrapper">
        <div className="row">
          <div className="col-lg-12 card-layout border__radius_20">
          {renderData()}
          </div>
        </div>
      </div>
    </div>
  );
}

PaymentsSession.propsTypes = {
  getStudentPaymentsSession: PropsTypes.func.isRequired,
  studentPaymentsSession: PropsTypes.array.isRequired,
};

export default PaymentsSession;
