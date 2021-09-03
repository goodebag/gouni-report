import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { clearErrors } from "../../redux/actions/errorAction";
import { updateStudent } from "../../redux/actions/authAction";
import { createBrowserHistory } from "history";

const EditStudent = () => {
  const { student } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const initialState = {
    admissionsId: student.admissionsId,
    admitted: student.admitted,
    appicationNumber: student.appicationNumber,
    contactAddress: student.contactAddress,
    departmentId: student.departmentId,
    emailAddress: student.emailAddress,
    firstName: student.firstName,
    lastName: student.lastName,
    localGovernmentName: student.localGovernmentName,
    mobilePhone: student.mobilePhone,
    parentName: student.parentName,
    parentNumber: student.parentNumber,
    personId: student.personId,
    programmeId: student.programmeId,
    programmeName: student.programmeName,
    prospectiveStudentId: student.prospectiveStudentId,
    religionName: student.religionName,
    sessionId: student.sessionId,
    sessionName: student.sessionName,
    stateName: student.stateName,
    msg: null,
  };

  const [
    {
      admissionsId = student.admissionsId,
      appicationNumber = student.appicationNumber,
      contactAddress = student.contactAddress,
      departmentId = student.departmentId,
      emailAddress = student.emailAddress,
      firstName = student.firstName,
      lastName = student.lastName,
      localGovernmentName = student.localGovernmentName,
      mobilePhone = student.mobilePhone,
      parentName = student.parentName,
      parentNumber = student.parentNumber,
      programmeId = student.programmeId,
      programmeName = student.programmeName,
      prospectiveStudentId = student.prospectiveStudentId,
      religionName = student.religionName,
      sessionId = student.sessionId,
      sessionName = student.sessionName,
      stateName = student.stateName,
      msg,
    },
    setState,
  ] = useState(initialState);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const getBack = () => {
    createBrowserHistory().push("/candidates");
    createBrowserHistory().go(0);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      initialState,
    };

    if (msg) {
      dispatch(clearErrors());
    }

    dispatch(updateStudent(data.initialState));
  };

  return (
    <div className="col-lg-12 col-md-12 col-sm-12">
      <form className="" onSubmit={handleSubmit}>
        <div className="card-layout py-4">
          <div className="d-flex justify-content-between">
            <h2 className="font-weight-bold mb-0">Edit Candidate</h2>
            <button
              className="btn btn-sm pg-button btn-primary px-4"
              onClick={() => getBack()}
            >
              Back
            </button>
          </div>
          <p className="mb-3 text-dark">Edit the details below</p>
          {msg ? (
            <div className="alert alert-danger" role="alert">
              <p>{msg}</p>
            </div>
          ) : null}
          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="firstName"
                  name="firstName"
                  className="form-control"
                  placeholder="First Name"
                  value={firstName || ""}
                  onChange={handleChange}
                />
                <label htmlFor="firstName">First Name</label>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="lastname"
                  name="lastname"
                  className="form-control"
                  placeholder="Last Name"
                  value={lastName || ""}
                  onChange={handleChange}
                />
                <label htmlFor="lastname">Last Name</label>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="sessionname"
                  name="sessionname"
                  className="form-control"
                  placeholder="Session Name"
                  value={sessionName || ""}
                  onChange={handleChange}
                />
                <label htmlFor="sessionname">Session Name</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="contactAddress"
                  name="contactAddress"
                  className="form-control"
                  placeholder="Contact Address"
                  value={contactAddress || ""}
                  onChange={handleChange}
                />
                <label htmlFor="contactAddress">Contact Address</label>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="phone"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="Phone Number"
                  value={mobilePhone || ""}
                  onChange={handleChange}
                />
                <label htmlFor="phoneNumber">Phone Number</label>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={emailAddress || ""}
                  onChange={handleChange}
                />
                <label htmlFor="Email">Email Address</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="religionName"
                  name="religionName"
                  className="form-control"
                  placeholder="Religion Name"
                  value={religionName || ""}
                  onChange={handleChange}
                />
                <label htmlFor="Religion Name">Religion Name</label>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="programmeId"
                  name="programmeId"
                  className="form-control"
                  placeholder="Programme Id"
                  value={programmeId || ""}
                  onChange={handleChange}
                />
                <label htmlFor="programmeId">Programme Id</label>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="admissionsId"
                  name="admissionsId"
                  className="form-control"
                  placeholder="Admissions Id"
                  value={admissionsId || ""}
                  onChange={handleChange}
                />
                <label htmlFor="Admissions Id">Admissions Id</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="prospectiveStudentId"
                  name="prospectiveStudentId"
                  className="form-control"
                  placeholder="ProspectiveStudent Id"
                  value={prospectiveStudentId || ""}
                  onChange={handleChange}
                />
                <label htmlFor="ProspectiveStudent Id">
                  ProspectiveStudent Id
                </label>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="sessionId"
                  name="sessionId"
                  className="form-control"
                  placeholder="Session Id"
                  value={sessionId || ""}
                  onChange={handleChange}
                />
                <label htmlFor="Session Id">Session Id</label>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="departmentId"
                  name="departmentId"
                  className="form-control"
                  placeholder="Department Id"
                  value={departmentId || ""}
                  onChange={handleChange}
                />
                <label htmlFor="Department Id">Department Id</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="appicationNumber"
                  name="appicationNumber"
                  className="form-control"
                  placeholder="Appication Number"
                  value={appicationNumber || ""}
                  onChange={handleChange}
                />
                <label htmlFor="Appication Number">Appication Number</label>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="programmeName"
                  name="programmeName"
                  className="form-control"
                  placeholder="Programme Name"
                  value={programmeName || ""}
                  onChange={handleChange}
                />
                <label htmlFor="Programme Name">Programme Name</label>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="parentName"
                  name="parentName"
                  className="form-control"
                  placeholder="Parent Name"
                  value={parentName || ""}
                  onChange={handleChange}
                />
                <label htmlFor="Parent Name">Parent Name</label>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="parentNumber"
                  name="parentNumber"
                  className="form-control"
                  placeholder="Parent Number"
                  value={parentNumber || ""}
                  onChange={handleChange}
                />
                <label htmlFor="Parent Number">Parent Number</label>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="stateName"
                  name="stateName"
                  className="form-control"
                  placeholder="State Name"
                  value={stateName || ""}
                  onChange={handleChange}
                />
                <label htmlFor="State Name">State Name</label>
              </div>
            </div>
            <div className="col-12 col-sm-4">
              <div className="form-label-group">
                <input
                  type="localGovernmentName"
                  name="localGovernmentName"
                  className="form-control"
                  placeholder="Local Government Name"
                  value={localGovernmentName || ""}
                  onChange={handleChange}
                />
                <label htmlFor="Local Government Name">
                  Local Government Name
                </label>
              </div>
            </div>
          </div>
          <button
            className="btn btn-lg btn-primary btn-block rounded-pill mt-2"
            type="submit"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default EditStudent;
