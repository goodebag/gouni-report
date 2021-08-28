import React, {useEffect, useRef} from 'react';
import PropsTypes from "prop-types";
import {useSelector, useDispatch} from 'react-redux';
import {useParams} from 'react-router-dom';
import { createBrowserHistory } from "history";

import { getStudentPaymentById } from '../../redux/actions/authAction';
import Table from "../Reusables/Table/Table";

const StudentPayment = () => {
  const studentPaymentById = useSelector((state) => state.auth.studentPaymentById);


    const dispatch = useDispatch();
    const params = useParams();
    const ref = useRef();

    const paymentId = params.paymentId;

    useEffect(() => {
        dispatch(getStudentPaymentById(paymentId));
            // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [paymentId]);

    const getBack = () => {
        createBrowserHistory().push("/payments");
        createBrowserHistory().go(0);
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
          Header: "Department Name",
          accessor: "departmentName",
        },
        {
          Header: "Level Name",
          accessor: "levelName",
        },
        {
          Header: "Transaction Date",
          accessor: "transactionDate",
        },
        {
          Header: "Transaction Amount",
          accessor: "transactionAmount",
          Cell: props => new Intl.NumberFormat('en-GB', { style: 'currency', currency: 'NGN' }).format(props.value)
        },
      ];

      let renderData = () => {
        if (studentPaymentById.length === 0 || !studentPaymentById) {
          return (
            <h5 className="text-center mb-0 p-md-0 p-4">Loading...</h5>
          );
        } else {
          return (
            <div ref={ref} id="payment-to-print">
              <Table id="emp" columns={columns} data={studentPaymentById} />
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
    )
}

StudentPayment.propsTypes = {
    getStudentPaymentById: PropsTypes.func.isRequired,
    studentPaymentById: PropsTypes.array.isRequired,
};

export default StudentPayment;