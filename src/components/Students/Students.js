import React, { useEffect, useRef } from "react";
import PropsTypes from "prop-types";
import Pdf from "react-to-pdf";
import { createBrowserHistory } from "history";
import { useSelector, useDispatch } from "react-redux";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import { getAllStudents } from "../../redux/actions/authAction";
import Table from "../Reusables/Table/Table";

const Students = () => {
  const allStudents = useSelector((state) => state.auth.allStudents);

  const dispatch = useDispatch();
  const ref = useRef();

  useEffect(() => {
    dispatch(getAllStudents());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getStudentPage = (student) => {
    createBrowserHistory().push(`/student/${student.personId}`);
    createBrowserHistory().go(0);
  };

  const getPaymentsPage = (student) => {
    createBrowserHistory().push(
      `/payments/${student.personId}/${student.sessionId}`
    );
    createBrowserHistory().go(0);
  };

  const getStudent = () => {
    createBrowserHistory().push("/student");
    createBrowserHistory().go(0);
  };

  function getData(allStudents) {
    return allStudents.map((student, index) => {
      return {
        ...student,
        payment: (
          <button
            className="btn btn-sm pg-button btn-primary px-3"
            onClick={() => getPaymentsPage(student)}
          >
            Payment
          </button>
        ),
        info: (
          <button
            className="btn btn-sm pg-button btn-primary px-3"
            onClick={() => getStudentPage(student)}
          >
            Info
          </button>
        ),
      };
    });
  }

  const columns = [
    {
      Header: "First Name",
      accessor: "firstName",
    },
    {
      Header: "Last Name",
      accessor: "lastName",
    },
    {
      Header: "Mobile Phone",
      accessor: "mobilePhone",
    },
    {
      Header: "Email Address",
      accessor: "emailAddress",
    },
    {
      Header: "Programme Name",
      accessor: "programmeName",
    },
    {
      Header: "",
      accessor: "payment",
    },
    {
      Header: "",
      accessor: "info",
    },
  ];

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
                    filename="Students Data Report"
                    sheet="Sheet"
                    buttonText="Export Excel"
                  />
                  <Pdf targetRef={ref} filename="students-data.pdf">
                    {({ toPdf }) => (
                      <button
                        className="btn btn-sm pg-button btn-primary py-2 ml-2"
                        onClick={toPdf}
                      >
                        Generate Pdf
                      </button>
                    )}
                  </Pdf>
                  <button
                    className="btn btn-sm pg-button btn-primary py-2 ml-auto"
                    onClick={() => getStudent()}
                  >
                    Get Student
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 card-layout border__radius_20">
            <div ref={ref} id="section-to-print">
              <Table id="emp" columns={columns} data={getData(allStudents)} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Students.propsTypes = {
  getAllStudents: PropsTypes.func.isRequired,
  allStudents: PropsTypes.object.isRequired,
};

export default Students;
