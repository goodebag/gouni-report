import React, { useRef } from "react";
import PropsTypes from "prop-types";
import { useSelector } from "react-redux";
import Pdf from "react-to-pdf";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import { createBrowserHistory } from "history";

import Table from "../Reusables/Table/Table";
import Dropdown from "./Dropdown";

const Candidates = () => {
  const activeStudents = useSelector((state) => state.auth.activeStudents);

  const ref = useRef();

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

  const getCandidate = () => {
    createBrowserHistory().push("/candidate");
    createBrowserHistory().go(0);
  };

  function getData(activeStudents) {
    return activeStudents.map((student, index) => {
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

  let checkArrLength = activeStudents.length === 0;

  const topCard = (
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
              <div className="d-flex ml-auto">
                <button
                  className="btn btn-sm pg-button btn-primary py-2 mr-2"
                  onClick={() => getCandidate()}
                >
                  Get Candidate
                </button>
                <Dropdown />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  if (checkArrLength) {
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

  return (
    <div className="page-wrapper">
      <div className="container-fluid forms-wrapper">
        {topCard}
        <div className="row">
          <div className="col-lg-12 card-layout border__radius_20">
            <div ref={ref} id="section-to-print">
              <div ref={ref} id="section-to-print">
                <Table
                  id="emp"
                  columns={columns}
                  data={getData(activeStudents)}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Candidates.propsTypes = {
  activeStudents: PropsTypes.array.isRequired,
};

export default Candidates;
