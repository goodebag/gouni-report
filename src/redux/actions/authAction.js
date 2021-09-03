import { NotificationManager } from "react-notifications";
import { createBrowserHistory } from "history";

import baseUrl from "../../utils/baseUrl";
import _const from "./types";
import { returnErrors } from "./errorAction";
import AuthUtility from "../../utils/UtilityServices";

export const login = (data) => {
  return async (dispatch) => {
    try {
      const res = await baseUrl.post("/api/Account/Login", data);
      dispatch(
        { type: _const.SET_LOADING, payload: true },
        setTimeout(() => {
          dispatch({
            type: _const.LOGIN_SUCCESS,
            payload: res.data.response,
          });
          createBrowserHistory().push("/");
          createBrowserHistory().go(0);
        }, 3000)
      );
    } catch (err) {
      dispatch(
        returnErrors(err.response.data, err.response.status, "LOGIN_FAIL")
      );
      dispatch({ type: _const.SET_LOADING, payload: false });
      dispatch({ type: _const.LOGIN_FAIL });
      throw err;
    }
  };
};

export const registerStudent = (data) => {
  return async (dispatch) => {
    try {
      const response = await baseUrl.post(
        "/api/Reports/StudentRegistration",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      if (response.status === 200) {
        NotificationManager.success("Successful", "Candidate Found", 1500);
        setTimeout(() => {
          dispatch({
            type: _const.REGISTER_STUDENT_SUCCESS,
            payload: response.data,
          });
        }, 1500);
      } else {
        NotificationManager.error("Failed", "Student Not Found");
      }
    } catch (error) {
      dispatch(
        returnErrors(
          error.response.data,
          error.response.status,
          "REGISTER_STUDENT_FAIL"
        )
      );
      dispatch({ type: _const.REGISTER_STUDENT_FAIL });
      throw error;
    }
  };
};

export const updateStudent = (data) => {
  return async (dispatch) => {
    const body = JSON.stringify({ data });
    try {
      const response = await baseUrl.post(
        "/api/Reports/EditStudentInfo",
        body,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      if (response.status === 200) {
        NotificationManager.success("Successful", "Student Updated", 1500);
        setTimeout(() => {
          dispatch({
            type: _const.UPDATE_STUDENT_SUCCESS,
            payload: response.data,
          });
        }, 1500);
      } else {
        NotificationManager.error("Failed", "Student Not Updated");
      }
    } catch (error) {
      dispatch(
        returnErrors(
          error.response.data,
          error.response.status,
          "UPDATE_STUDENT_FAIL"
        )
      );
      dispatch({ type: _const.UPDATE_STUDENT_FAIL });
      throw error;
    }
  };
};

export const logout = () => {
  return (dispatch) => {
    dispatch(
      {
        type: _const.SET_LOADING,
        payload: true,
      },
      setTimeout(() => {
        dispatch({
          type: _const.LOGOUT_SUCCESS,
        });
      }, 3000)
    );
  };
};

export const getUser = () => {
  return (dispatch) => {
    let userAuthDetailsString = localStorage.getItem("access");
    if (
      userAuthDetailsString === undefined ||
      userAuthDetailsString === null ||
      userAuthDetailsString === ""
    )
      return "";
    let userAuthDetails = JSON.parse(userAuthDetailsString);
    dispatch({
      type: _const.GET_USER,
      payload: userAuthDetails,
    });
  };
};

export const getAllStudents = () => {
  return async (dispatch) => {
    try {
      let response = await baseUrl.get("/api/Reports/GetCurrentYearStudents", {
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthUtility.RetrieveAuthorizationHeader(),
        },
      });
      dispatch({
        type: _const.GET_ALL_STUDENTS,
        payload: response.data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getOneStudent = (Person) => {
  return async (dispatch) => {
    try {
      let response = await baseUrl.get(
        `/api/Reports/GetCurrentYearStudentDetails/${Person.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      dispatch({
        type: _const.GET_ONE_STUDENT,
        payload: response.data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getActiveStudents = (data) => {
  return async (dispatch) => {
    try {
      const res = await baseUrl.post("/api/Reports/ActiveStudents", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthUtility.RetrieveAuthorizationHeader(),
        },
      });
      const resData = await res.data;
      dispatch({
        type: _const.GET_ACTIVE_STUDENTS,
        payload: resData
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getStudentDetails = (student) => {
  return async (dispatch) => {
    try {
      let response = await baseUrl.get(
        `/api/Reports/StudentDetails/${student.id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      dispatch({
        type: _const.GET_STUDENT_DETAILS,
        payload: response.data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getStudentPaymentsSession = (personId, sessionId) => {
  return async (dispatch) => {
    try {
      let response = await baseUrl.get(
        `/api/Reports/GetStudentPaymentsInASession/${personId}/${sessionId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      dispatch({
        type: _const.GET_STUDENT_PAYMENTS_SESSION,
        payload: response.data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getAllStudentPayment = (personId) => {
  return async (dispatch) => {
    try {
      let response = await baseUrl.get(
        `/api/Reports/GetAllStudentPayment/${personId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      dispatch({
        type: _const.GET_ALL_STUDENT_PAYMENT,
        payload: response.data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getPaymentById = (paymentId) => {
  return async (dispatch) => {
    try {
      let response = await baseUrl.get(
        `/api/Reports/GetPaymentById/${paymentId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      dispatch({
        type: _const.GET_PAYMENT_BY_ID,
        payload: response.data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getstudentHostelAllocations = (studentId) => {
  return async (dispatch) => {
    try {
      let response = await baseUrl.get(
        `/api/Reports/GetstudentHostelAllocations/${studentId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      dispatch({
        type: _const.GET_STUDENT_HOSTEL_ALL_LOCATIONS,
        payload: response.data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getHostelAllocation = (Id) => {
  return async (dispatch) => {
    try {
      let response = await baseUrl.get(
        `/api/Reports/GetHostelAllocation/${Id}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      dispatch({
        type: _const.GET_HOSTEL_ALL_LOCATION,
        payload: response.data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getTotalNumberOfAdmissionSeekers = (data) => {
  return async (dispatch) => {
    try {
      let res = await baseUrl.post(
        "/api/Reports/GetTotalNumberOfAdmissionSeekers",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      let payload = await res.data;
      dispatch({
        type: _const.GET_TOTAL_NUMBER_OF_ADMISSION_SEEKERS,
        payload: payload,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getAllSession = () => {
  return async (dispatch) => {
    try {
      const response = await baseUrl.get("/api/Reports/GetAllSession", {
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthUtility.RetrieveAuthorizationHeader(),
        },
      });

      if (response.status !== 200) {
        throw new Error("Something went wrong!");
      }

      dispatch({
        type: _const.GET_ALL_SESSION,
        payload: response.data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getAdmissionSeekers = (data) => {
  return async (dispatch) => {
    try {
      const res = await baseUrl.post("/api/Reports/GetAdmissionSeekers", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthUtility.RetrieveAuthorizationHeader(),
        },
      });
      dispatch({
        type: _const.GET_ADMISSION_SEEKERS,
        payload: res.data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getActiveStudentsNumberBySession = (data) => {
  return async (dispatch) => {
    try {
      const res = await baseUrl.post(
        "/api/Reports/ActiveStudentsNumberBySession",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      let payload = await res.data;
      dispatch({
        type: _const.GET_ACTIVE_STUDENTS_NUMBER_BY_SESSION,
        payload: payload,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getSearchStudent = (data) => {
  return async (dispatch) => {
    try {
      const res = await baseUrl.post("/api/Reports/SearchStudentBy", data, {
        headers: {
          "Content-Type": "application/json",
          Authorization: AuthUtility.RetrieveAuthorizationHeader(),
        },
      });
      dispatch({
        type: _const.GET_SEARCH_STUDENT,
        payload: res.data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getConvertedStudentsBySession = (data) => {
  return async (dispatch) => {
    try {
      const res = await baseUrl.post(
        "/api/Reports/ConvertedStudentsBySession",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      let payload = await res.data;
      dispatch({
        type: _const.GET_CONVERTEDS_BY_SESSION,
        payload: payload,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getActiveStudentsByProgramme = (data) => {
  return async (dispatch) => {
    try {
      const res = await baseUrl.post(
        "/api/Reports/ActiveStudentsByProgramme",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      dispatch({
        type: _const.GET_ACTIVE_STUDENTS_BY_PROGRAMME,
        payload: res.data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getStudentAdmissionSeekersByProgram = (data) => {
  return async (dispatch) => {
    try {
      const res = await baseUrl.post(
        "/api/Reports/GetStudentAdmissionSeekersByProgram",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      dispatch({
        type: _const.GET_STUDENT_ADMISSISION_SEEKERS_BY_PROGAM,
        payload: res.data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getStudentPaymentById = (paymentId) => {
  return async (dispatch) => {
    try {
      const res = await baseUrl.get(
        `api/Reports/GetSTUDENTPaymentById/${paymentId}`,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );
      dispatch({
        type: _const.GET_STUDENT_PAYMENT_BY_ID,
        payload: res.data,
      });
    } catch (error) {
      throw error;
    }
  };
};

export const getPaymentsBySession = (data) => {
  return async (dispatch) => {
    try {
      const res = await baseUrl.post(
        "/api/Reports/GetPaymentsBySession",
        data,
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: AuthUtility.RetrieveAuthorizationHeader(),
          },
        }
      );

      if (res.status !== 200) {
        throw new Error("Something went wrong!");
      }

      dispatch({
        type: _const.GET_PAYMENTS_BY_SESSION,
        payload: res.data,
      });
    } catch (error) {
      throw error;
    }
  };
};
