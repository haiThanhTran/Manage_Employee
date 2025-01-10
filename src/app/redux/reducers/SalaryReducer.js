import {
    ADD_SALARY_BY_EMPLOYEE_FAIL,
    ADD_SALARY_BY_EMPLOYEE_REQUEST,
    ADD_SALARY_BY_EMPLOYEE_SUCCESS,
    DELETE_SALARY_BY_EMPLOYEE_FAIL,
    DELETE_SALARY_BY_EMPLOYEE_REQUEST,
    DELETE_SALARY_BY_EMPLOYEE_SUCCESS,
    GET_SALARY_BY_EMPLOYEE_FAIL,
    GET_SALARY_BY_EMPLOYEE_SUCCESS,
    GET_SALARY_BY_LEADER_SUCCESS,
    UPDATE_SALARY_BY_EMPLOYEE_FAIL,
    UPDATE_SALARY_BY_EMPLOYEE_REQUEST,
    UPDATE_SALARY_BY_EMPLOYEE_SUCCESS,
  } from "../actions/SalaryAction";
  
  const initialState = {
    salaryByEmployee: [],
    salaryByLeader: [],
    success: false,
    totalElements: 0,
    currentSalary: [],
  };
  
  const salaryReducer = (state = initialState, action) => {
    switch (action.type) {
      case ADD_SALARY_BY_EMPLOYEE_REQUEST:
      case UPDATE_SALARY_BY_EMPLOYEE_REQUEST:
      case DELETE_SALARY_BY_EMPLOYEE_REQUEST:
        return {
          ...state,
          success: false,
        };
  
      case ADD_SALARY_BY_EMPLOYEE_FAIL:
      case UPDATE_SALARY_BY_EMPLOYEE_FAIL:
      case DELETE_SALARY_BY_EMPLOYEE_FAIL:
      case GET_SALARY_BY_EMPLOYEE_FAIL:
        return {
          ...state,
          success: false,
        };
  
      case GET_SALARY_BY_EMPLOYEE_SUCCESS:
        return {
          ...state,
          salaryByEmployee: action.payload,
          success: true,
        };
  
      case GET_SALARY_BY_LEADER_SUCCESS:
        return {
          ...state,
          salaryByLeader: action.payload,
          success: true,
        };
  
        case ADD_SALARY_BY_EMPLOYEE_SUCCESS:
          const newSalary = Array.isArray(action.payload)
            ? action.payload[0]
            : action.payload;
          return {
            ...state,
            currentSalary: newSalary,
            salaryByEmployee: [...state.salaryByEmployee, newSalary],
            success: true,
          };
        
  
      case UPDATE_SALARY_BY_EMPLOYEE_SUCCESS:
        return {
          ...state,
          salaryByEmployee: state.salaryByEmployee.map((salary) =>
            salary.id === action.payload.id ? action.payload : salary
          ),
          success: true,
        };
  
      case DELETE_SALARY_BY_EMPLOYEE_SUCCESS:
        return {
          ...state,
          salaryByEmployee: state.salaryByEmployee.filter(
            (salary) => salary.id !== action.payload
          ),
          success: true,
        };
  
      default:
        return state;
    }
  };
  
  export default salaryReducer;