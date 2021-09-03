import React, { useEffect } from "react";
import PropsTypes from "prop-types";
import { useParams } from "react-router-dom";
import { createBrowserHistory } from "history";
import { useDispatch, useSelector } from "react-redux";

import { getOneStudent } from "../../redux/actions/authAction";

const Student = () => {
  const oneStudent = useSelector((state) => state.auth.oneStudent);

  const dispatch = useDispatch();
  const params = useParams();

  useEffect(() => {
    dispatch(getOneStudent(params));
  }, [dispatch, params]);

  const getBack = () => {
    createBrowserHistory().push("/candidates");
    createBrowserHistory().go(0);
  };

  return (
    <div className="page-wrapper">
      <div className="row">
        <div className="col-lg-12">
          <div className="card shadow-sm mb-0">
            <div className="card-body">
              <div className="d-flex align-items-center">
                <h2 className="text-primary mb-0">Candidate</h2>
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
          <div className="col-lg-12 col-md-12 col-sm-12 px-0">
            <div className="card border__radius_20">
              <div className="card-body">
                <div className="row mb-3">
                  <div className="col-sm-12">
                    <i
                      style={{ fontSize: 40, color: "#1e88e5" }}
                      className="mdi mdi-account-circle"
                    />
                    <div style={{ fontWeight: 600, fontSize: 20 }}>
                      {oneStudent.firstName} {oneStudent.lastName}
                    </div>
                  </div>
                </div>
                <br />
                <div className="row">
                  <div className="col-lg-3 col-md-3 mb-4">
                    <span
                      style={{
                        fontSize: 12,
                        margin: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      Mobile Phone
                    </span>
                    <p
                      style={{ fontWeight: 600, marginBottom: 0, fontSize: 16 }}
                    >
                      {oneStudent.mobilePhone
                        ? oneStudent.mobilePhone
                        : "No Mobile Phone"}
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-3 mb-4">
                    <span
                      style={{
                        fontSize: 12,
                        margin: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      Department Name
                    </span>
                    <p
                      style={{ fontWeight: 600, marginBottom: 0, fontSize: 16 }}
                    >
                      {oneStudent.departmentName
                        ? oneStudent.departmentName
                        : "No Department Name"}
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-3 mb-4">
                    <span
                      style={{
                        fontSize: 12,
                        margin: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      Appication Number
                    </span>
                    <p
                      style={{ fontWeight: 600, marginBottom: 0, fontSize: 16 }}
                    >
                      {oneStudent.appicationNumber
                        ? oneStudent.appicationNumber
                        : "No Appication Number"}
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-3 mb-4">
                    <span
                      style={{
                        fontSize: 12,
                        margin: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      State Name
                    </span>
                    <p
                      style={{ fontWeight: 600, marginBottom: 0, fontSize: 16 }}
                    >
                      {oneStudent.stateName
                        ? oneStudent.stateName
                        : "No State Name"}
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-3 mb-4">
                    <span
                      style={{
                        fontSize: 12,
                        margin: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      Local Government Name
                    </span>
                    <p
                      style={{ fontWeight: 600, marginBottom: 0, fontSize: 16 }}
                    >
                      {oneStudent.localGovernmentName
                        ? oneStudent.localGovernmentName
                        : "No Local Government Name"}
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-3 mb-4">
                    <span
                      style={{
                        fontSize: 12,
                        margin: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      Parent Name
                    </span>
                    <p
                      style={{ fontWeight: 600, marginBottom: 0, fontSize: 16 }}
                    >
                      {oneStudent.parentName
                        ? oneStudent.parentName
                        : "No Name"}
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-3 mb-4">
                    <span
                      style={{
                        fontSize: 12,
                        margin: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      Parent Number
                    </span>
                    <p
                      style={{ fontWeight: 600, marginBottom: 0, fontSize: 16 }}
                    >
                      {oneStudent.parentNumber
                        ? oneStudent.parentNumber
                        : "No Number"}
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-3 mb-4">
                    <span
                      style={{
                        fontSize: 12,
                        margin: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      Religion Name
                    </span>
                    <p
                      style={{ fontWeight: 600, marginBottom: 0, fontSize: 16 }}
                    >
                      {oneStudent.religionName
                        ? oneStudent.religionName
                        : "No Religion Name"}
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-3 mb-4">
                    <span
                      style={{
                        fontSize: 12,
                        margin: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      Admitted
                    </span>
                    <p
                      style={{ fontWeight: 600, marginBottom: 0, fontSize: 16 }}
                    >
                      {oneStudent.admitted ? "Yes" : "No"}
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-3 mb-4">
                    <span
                      style={{
                        fontSize: 12,
                        margin: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      Contact Address
                    </span>
                    <p
                      style={{ fontWeight: 600, marginBottom: 0, fontSize: 16 }}
                    >
                      {oneStudent.contactAddress
                        ? oneStudent.contactAddress
                        : "No Contact Address"}
                    </p>
                  </div>
                  <div className="col-lg-3 col-md-3 mb-4">
                    <span
                      style={{
                        fontSize: 12,
                        margin: 0,
                        textTransform: "uppercase",
                      }}
                    >
                      Programme Name
                    </span>
                    <p
                      style={{ fontWeight: 600, marginBottom: 0, fontSize: 16 }}
                    >
                      {oneStudent.programmeName
                        ? oneStudent.programmeName
                        : "No Programme Name"}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

Student.propsTypes = {
  getOneStudent: PropsTypes.func.isRequired,
  oneStudent: PropsTypes.object.isRequired,
};

export default Student;
