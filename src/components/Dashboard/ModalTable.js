import React, { useEffect, useRef } from "react";
import Modal from "react-modal";
import { useSelector } from "react-redux";
import { createBrowserHistory } from "history";
import ReactHTMLTableToExcel from "react-html-table-to-excel";
import Pdf from "react-to-pdf";

import UtilityService from "../../utils/UtilityServices";
import { RoleConst } from "../../constants/RoleConstant";
import Table from "../Reusables/Table/Table";

const customStyles = {
  overlay: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: "9999",
    backgroundColor: "rgba(255, 255, 255, 0.75)",
  },
  content: {
    position: "absolute",
    top: "80px",
    left: "250px",
    right: "5px",
    bottom: "10px",
    border: "1px solid #ccc",
    background: "#fff",
    overflow: "auto",
    WebkitOverflowScrolling: "touch",
    borderRadius: "0px",
    outline: "none",
    padding: "20px",
  },
};

const ModalTable = (props) => {
  useEffect(() => {
    Modal.setAppElement("body");
  }, []);

  function closeModal() {
    props.setIsOpen(false);
  }

  const ref = useRef();

  const activeStudentsByProgramme = useSelector(
    (state) => state.auth.activeStudentsByProgramme
  );

  const studentAdmissionSeekersByProgram = useSelector(
    (state) => state.auth.studentAdmissionSeekersByProgram
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
  }, [activeStudentsByProgramme, studentAdmissionSeekersByProgram]);

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
    {
      Header: "",
      accessor: "payment",
    },
  ];

  let selected;

  if (activeStudentsByProgramme.length < 1) {
    selected = studentAdmissionSeekersByProgram;
  } else {
    selected = activeStudentsByProgramme;
  }

  const getPaymentsPage = (student) => {
    createBrowserHistory().push(
      `/payments/${student.personId}/${student.sessionId}`
    );
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
      };
    });
  }

  return (
    <div>
      <Modal
        isOpen={props.modalIsOpen}
        onRequestClose={closeModal}
        style={customStyles}
        contentLabel="Example Modal"
      >
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
          <button
            onClick={closeModal}
            className="btn btn-sm pg-button btn-primary px-3 py-2 ml-auto"
          >
            X
          </button>
        </div>
        <div className="card">
          <div ref={ref} id="section-to-print">
            <Table id="emp" columns={columns} data={getData(selected)} />
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ModalTable;
