import React, { useEffect, useRef } from "react";
import PropsTypes from "prop-types";
import { useSelector } from "react-redux";
import { createBrowserHistory } from "history";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Pdf from "react-to-pdf";

import UtilityService from "../../utils/UtilityServices";
import { RoleConst } from "../../constants/RoleConstant";
import Table from "../Reusables/Table/Table";

function ActiveStudents(props) {
  // console.log("Props", props);

  const ref = useRef();

  const activeStudentsByProgramme = useSelector(
    (state) => state.auth.activeStudentsByProgramme
  );

  useEffect(() => {
    let isUserQualified = UtilityService.IsUserQualifiedForRole([
      RoleConst.ADMIN,
    ]);
    if (isUserQualified === false) {
      localStorage.removeItem("access");
      createBrowserHistory().push("/login");
      createBrowserHistory().go();
    }
  }, []);

  const getBack = () => {
    createBrowserHistory().push("/");
    createBrowserHistory().go(0);
  };

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
    {
      Header: "Faculty Name",
      accessor: "facultyName",
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
                    filename="Active Student Data Report"
                    sheet="Sheet"
                    buttonText="Export Excel"
                  />
                  <Pdf targetRef={ref} filename="active-student-data.pdf">
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
                    onClick={() => getBack()}
                  >
                    Go Back
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12 card-layout border__radius_20">
            <div ref={ref} id="section-to-print">
              <Table
                id="emp"
                columns={columns}
                data={activeStudentsByProgramme}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

ActiveStudents.propsTypes = {
  activeStudentsByProgramme: PropsTypes.array.isRequired,
};

export default ActiveStudents;
