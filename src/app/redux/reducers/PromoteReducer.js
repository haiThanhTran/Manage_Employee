import {
  ADD_PROMOTE_BY_EMPLOYEE_FAIL,
  ADD_PROMOTE_BY_EMPLOYEE_REQUEST,
  ADD_PROMOTE_BY_EMPLOYEE_SUCCESS,
  DELETE_PROMOTE_BY_EMPLOYEE_FAIL,
  DELETE_PROMOTE_BY_EMPLOYEE_REQUEST,
  DELETE_PROMOTE_BY_EMPLOYEE_SUCCESS,
  GET_PROMOTE_BY_EMPLOYEE_FAIL,
  GET_PROMOTE_BY_EMPLOYEE_REQUEST,
  GET_PROMOTE_BY_EMPLOYEE_SUCCESS,
  GET_PROMOTE_BY_LEADER_FAIL,
  GET_PROMOTE_BY_LEADER_REQUEST,
  GET_PROMOTE_BY_LEADER_SUCCESS,
  UPDATE_PROMOTE_BY_EMPLOYEE_FAIL,
  UPDATE_PROMOTE_BY_EMPLOYEE_REQUEST,
  UPDATE_PROMOTE_BY_EMPLOYEE_SUCCESS,
} from "../actions/PromoteActions";

const initialState = {
  promoteByEmployee: [],
  promoteByLeader: [],
  success: false,
  totalElements: 0,
  currentPromote: {},
};

const promoteReducer = function (state = initialState, action) {
  switch (action.type) {
    case GET_PROMOTE_BY_EMPLOYEE_REQUEST:
    case GET_PROMOTE_BY_LEADER_REQUEST:
    case ADD_PROMOTE_BY_EMPLOYEE_REQUEST:
    case UPDATE_PROMOTE_BY_EMPLOYEE_REQUEST:
    case DELETE_PROMOTE_BY_EMPLOYEE_REQUEST:
      return {
        ...state,
        success: false,
      };

    case GET_PROMOTE_BY_EMPLOYEE_FAIL:
    case GET_PROMOTE_BY_LEADER_FAIL:
    case ADD_PROMOTE_BY_EMPLOYEE_FAIL:
    case UPDATE_PROMOTE_BY_EMPLOYEE_FAIL:
    case DELETE_PROMOTE_BY_EMPLOYEE_FAIL:
      return {
        ...state,
        success: false,
      };

    case GET_PROMOTE_BY_EMPLOYEE_SUCCESS:
      return {
        ...state,
        promoteByEmployee: action.payload,
        totalElements: action.payload.totalElements,
        success: true,
      };

    case GET_PROMOTE_BY_LEADER_SUCCESS:
      return {
        ...state,
        promoteByLeader: action.payload,
        totalElements: action.payload.totalElements,
        success: true,
      };

    case ADD_PROMOTE_BY_EMPLOYEE_SUCCESS:
      console.log("action.payload", action.payload[0]);
      return {
        ...state,
        promoteByEmployee: [...state.promoteByEmployee, action.payload[0]],
        currentPromote: action.payload[0],
        success: true,
      };

    case UPDATE_PROMOTE_BY_EMPLOYEE_SUCCESS:
      return {
        ...state,
        promoteByEmployee: state.promoteByEmployee.map((item) =>
          item.id === action.payload.id ? action.payload : item
        ),
        success: true,
      };

    case DELETE_PROMOTE_BY_EMPLOYEE_SUCCESS:
      console.log("action.payload", action);
      return {
        ...state,
        promoteByEmployee: state.promoteByEmployee.filter(
          (item) => item.id !== action.id
        ),
        success: true,
      };

    default:
      return state;
  }
};

export default promoteReducer;
