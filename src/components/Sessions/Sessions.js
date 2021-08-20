import React, { useRef } from "react";
import PropsTypes from "prop-types";
import { useSelector } from "react-redux";
import Pdf from "react-to-pdf";
import ReactHTMLTableToExcel from "react-html-table-to-excel";

import Table from "../Reusables/Table/Table";
import Dropdown from "./Dropdown";

function Sessions() {
  const admissionSeekers = useSelector((state) => state.auth.admissionSeekers);

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
      Header: "Department Name",
      accessor: "departmentName",
    },
  ];

  let renderData = () => {
    if (admissionSeekers.length === 0 || !admissionSeekers) {
      return (
        <h5 className="text-center mb-0 p-md-0 p-4">
          Data not found. Select another session from the dropdown to show the
          data!
        </h5>
      );
    } else {
      return (
        <div ref={ref} id="section-to-print">
          <Table id="emp" columns={columns} data={admissionSeekers} />
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
                    filename="Sessions Data Report"
                    sheet="Sheet"
                    buttonText="Export Excel"
                  />
                  <Pdf targetRef={ref} filename="sessions-data.pdf">
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
}

Sessions.propsTypes = {
  getAdmissionSeekers: PropsTypes.func.isRequired,
  admissionSeekers: PropsTypes.array.isRequired,
};

export default Sessions;
