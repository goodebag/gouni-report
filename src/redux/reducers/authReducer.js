import _const from "../actions/types";
import axios from "axios";

const initialState = {
  token: "",
  authorize: false,
  user: {},
  loading: false,
  student: {},
  updateStudent: {},
  allStudents: [],
  oneStudent: {},
  activeStudents: [],
  studentDetails: {},
  studentPaymentsSession: [],
  allStudentPayment: [],
  paymentById: {},
  studentHostelAllocations: [],
  hostelAllocation: {},
  totalNumberOfAdmissionSeekers: "",
  allSession: [],
  admissionSeekers: [],
  activeStudentsNumberBySession: {},
  searchStudent: [],
  convertedStudentsBySession: {},
  activeStudentsByProgramme: [],
  studentAdmissionSeekersByProgram: [],
  paymentsBySession: [],
  studentPaymentById: []
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case _const.SET_LOADING:
      return {
        ...state,
        loading: action.payload,
      };

    case _const.LOGIN_SUCCESS:
      saveAccess(action.payload);
      return {
        ...state,
        token: action.payload.token,
        authorize: true,
        loading: false,
      };

    case _const.LOGIN_FAIL:
    case _const.LOGOUT_SUCCESS:
      localStorage.removeItem("access");
      return {
        ...state,
        token: "",
        authorize: false,
        loading: false,
        role: [],
      };

    case _const.REGISTER_STUDENT_SUCCESS:
      return {
        ...state,
        student: action.payload,
      };

    case _const.REGISTER_STUDENT_FAIL:
      return {
        ...state,
        student: {},
      };

    case _const.UPDATE_STUDENT_SUCCESS:
      return {
        ...state,
        updateStudent: action.payload,
      };

    case _const.GET_USER:
      return {
        ...state,
        user: action.payload,
      };

    case _const.GET_ALL_STUDENTS:
      return {
        ...state,
        allStudents: action.payload,
      };

    case _const.GET_ONE_STUDENT:
      return {
        ...state,
        oneStudent: action.payload,
      };

    case _const.GET_ACTIVE_STUDENTS:
      return {
        ...state,
        activeStudents: action.payload,
      };

    case _const.GET_STUDENT_DETAILS:
      return {
        ...state,
        studentDetails: action.payload,
      };

    case _const.GET_STUDENT_PAYMENTS_SESSION:
      return {
        ...state,
        studentPaymentsSession: action.payload,
      };

    case _const.GET_ALL_STUDENT_PAYMENT:
      return {
        ...state,
        allStudentPayment: action.payload,
      };

    case _const.GET_PAYMENT_BY_ID:
      return {
        ...state,
        paymentById: action.payload,
      };

    case _const.GET_STUDENT_HOSTEL_ALL_LOCATIONS:
      return {
        ...state,
        studentHostelAllocations: action.payload,
      };

    case _const.GET_HOSTEL_ALL_LOCATION:
      return {
        ...state,
        hostelAllocation: action.payload,
      };

    case _const.GET_TOTAL_NUMBER_OF_ADMISSION_SEEKERS:
      return {
        ...state,
        totalNumberOfAdmissionSeekers: action.payload,
      };

    case _const.GET_ALL_SESSION:
      return {
        ...state,
        allSession: action.payload,
      };

    case _const.GET_ADMISSION_SEEKERS:
      return {
        ...state,
        admissionSeekers: action.payload,
      };

    case _const.GET_ACTIVE_STUDENTS_NUMBER_BY_SESSION:
      return {
        ...state,
        activeStudentsNumberBySession: action.payload,
      };

    case _const.GET_SEARCH_STUDENT:
      return {
        ...state,
        searchStudent: action.payload,
      };

    case _const.GET_CONVERTEDS_BY_SESSION:
      return {
        ...state,
        convertedStudentsBySession: action.payload,
      };

    case _const.GET_ACTIVE_STUDENTS_BY_PROGRAMME:
      return {
        ...state,
        activeStudentsByProgramme: action.payload,
      };

    case _const.GET_STUDENT_ADMISSISION_SEEKERS_BY_PROGAM:
      return {
        ...state,
        studentAdmissionSeekersByProgram: action.payload,
      };

    case _const.GET_PAYMENTS_BY_SESSION:
      return {
        ...state,
        paymentsBySession: action.payload
      }

      case _const.GET_STUDENT_PAYMENT_BY_ID:
        return {
          ...state,
          studentPaymentById: action.payload
        }

    default:
      return state;
  }
};

const saveAccess = (payload) => {
  localStorage.setItem("access", JSON.stringify(payload));
  axios.defaults.headers.common["Authorization"] = "Bearer " + payload.token;
};

export default authReducer;
