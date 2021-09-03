import React, { useState, useEffect, useRef } from "react";
import PropsTypes from "prop-types";
import { useDispatch, useSelector } from "react-redux";
import { registerStudent } from "../../redux/actions/authAction";
import { clearErrors } from "../../redux/actions/errorAction";
import UtilityService from "../../utils/UtilityServices";
import { RoleConst } from "../../constants/RoleConstant";
import { createBrowserHistory } from "history";
import EditStudent from "../EditStudent/EditStudent";

const CandidateForm = () => {
  const initialState = {
    firstName: "",
    lastName: "",
    otherName: "",
    phoneNumber: "",
    email: "",
    msg: null,
  };

  const [
    { firstName, lastName, otherName, phoneNumber, email, msg },
    setState,
  ] = useState(initialState);

  const error = useSelector((state) => state.error);
  const student = useSelector((state) => state.auth.student);

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

  useEffect(() => {
    if (error !== ref.error) {
      if (error.id === "REGISTER_STUDENT_FAIL") {
        setState({ msg: error.msg });
      } else {
        setState({ msg: null });
      }
    }
  }, [error]);

  const ref = useRef();
  const dispatch = useDispatch();

  const onChange = (event) => {
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
      firstName,
      lastName,
      otherName,
      phoneNumber,
      email,
    };

    if (msg) {
      dispatch(clearErrors());
    }

    dispatch(registerStudent(data));
  };

  const getStudentHandler = () => {
    let confirmedStudent = Object.values(student);
    if (confirmedStudent.length > 0) {
      return <EditStudent />;
    } else {
      return (
        <div className="col-lg-6 col-md-6 col-sm-12 mx-auto pt-md-3 pt-0">
          <form className="" onSubmit={handleSubmit}>
            <div className="card-layout py-4 mt-3 mt-md-0">
              <div className="d-flex justify-content-between">
                <h2 className="font-weight-bold mb-0">Get Candidate</h2>
                <button
                  className="btn btn-sm pg-button btn-primary px-4"
                  onClick={() => getBack()}
                >
                  Back
                </button>
              </div>
              <p className="mb-3 text-dark">Enter the details below</p>
              {msg ? (
                <div className="alert alert-danger" role="alert">
                  <p>{msg}</p>
                </div>
              ) : null}
              <div className="form-label-group">
                <input
                  type="firstname"
                  name="firstname"
                  className="form-control"
                  placeholder="First Name"
                  value={firstName}
                  onChange={onChange}
                />
                <label htmlFor="firstname">First Name</label>
              </div>
              <div className="form-label-group">
                <input
                  type="lastname"
                  name="lastname"
                  className="form-control"
                  placeholder="Last Name"
                  value={lastName}
                  onChange={onChange}
                />
                <label htmlFor="lastname">Last Name</label>
              </div>
              <div className="form-label-group">
                <input
                  type="othername"
                  name="othername"
                  className="form-control"
                  placeholder="Other Name"
                  value={otherName}
                  onChange={onChange}
                />
                <label htmlFor="othername">Other Name</label>
              </div>
              <div className="form-label-group">
                <input
                  type="phone"
                  name="phoneNumber"
                  className="form-control"
                  placeholder="Phone Number"
                  value={phoneNumber}
                  onChange={onChange}
                  required
                />
                <small className="form-text text-dark">* Required</small>
                <label htmlFor="phoneNumber">Phone Number</label>
              </div>
              <div className="form-label-group">
                <input
                  type="email"
                  name="email"
                  className="form-control"
                  placeholder="Email Address"
                  value={email}
                  onChange={onChange}
                  required
                />
                <small className="form-text text-dark">* Required</small>
                <label htmlFor="Email">Email Address</label>
              </div>
              <button
                className="btn btn-lg btn-primary btn-block rounded-pill mt-4"
                type="submit"
              >
                Continue
              </button>
            </div>
          </form>
        </div>
      );
    }
  };

  return (
    <div className="page-wrapper">
      <div className="container-fluid forms-wrapper">
        <div className="row">{getStudentHandler()}</div>
      </div>
    </div>
  );
};

CandidateForm.propsTypes = {
  error: PropsTypes.object.isRequired,
  registerStudent: PropsTypes.func.isRequired,
  clearErrors: PropsTypes.func.isRequired,
  student: PropsTypes.object.isRequired,
};

export default CandidateForm;
