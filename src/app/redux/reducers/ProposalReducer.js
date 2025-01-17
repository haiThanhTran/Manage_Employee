import {
    ADD_PROPOSAL_BY_EMPLOYEE_FAIL,
    ADD_PROPOSAL_BY_EMPLOYEE_REQUEST,
    ADD_PROPOSAL_BY_EMPLOYEE_SUCCESS,
    DELETE_PROPOSAL_BY_EMPLOYEE_FAIL,
    DELETE_PROPOSAL_BY_EMPLOYEE_REQUEST,
    DELETE_PROPOSAL_BY_EMPLOYEE_SUCCESS,
    GET_PROPOSAL_BY_EMPLOYEE_FAIL,
    GET_PROPOSAL_BY_EMPLOYEE_REQUEST,
    GET_PROPOSAL_BY_EMPLOYEE_SUCCESS,
    GET_PROPOSAL_BY_LEADER_FAIL,
    GET_PROPOSAL_BY_LEADER_REQUEST,
    GET_PROPOSAL_BY_LEADER_SUCCESS,
    UPDATE_PROPOSAL_BY_EMPLOYEE_FAIL,
    UPDATE_PROPOSAL_BY_EMPLOYEE_REQUEST,
    UPDATE_PROPOSAL_BY_EMPLOYEE_SUCCESS,
  } from "../actions/ProposalActions";
  
  const initialState = {
    proposalByEmployee: [],
    proposalByLeader: [],
    success: false,
    totalElements: 0,
    currentProposal: {},
  };
  
  const proposalReducer = function (state = initialState, action) {
    switch (action.type) {
      case GET_PROPOSAL_BY_EMPLOYEE_REQUEST:
      case GET_PROPOSAL_BY_LEADER_REQUEST:
      case ADD_PROPOSAL_BY_EMPLOYEE_REQUEST:
      case UPDATE_PROPOSAL_BY_EMPLOYEE_REQUEST:
      case DELETE_PROPOSAL_BY_EMPLOYEE_REQUEST:
        return {
          ...state,
          success: false,
        };
  
      case GET_PROPOSAL_BY_EMPLOYEE_FAIL:
      case GET_PROPOSAL_BY_LEADER_FAIL:
      case ADD_PROPOSAL_BY_EMPLOYEE_FAIL:
      case UPDATE_PROPOSAL_BY_EMPLOYEE_FAIL:
      case DELETE_PROPOSAL_BY_EMPLOYEE_FAIL:
        return {
          ...state,
          success: false,
        };
  
      case GET_PROPOSAL_BY_EMPLOYEE_SUCCESS:
        return {
          ...state,
          proposalByEmployee: action.payload,
          totalElements: action.payload.totalElements,
        };
  
      case GET_PROPOSAL_BY_LEADER_SUCCESS:
        return {
          ...state,
          proposalByLeader: action.payload,
          totalElements: action.payload.totalElements,
        };
  
      case ADD_PROPOSAL_BY_EMPLOYEE_SUCCESS:
        return {
          ...state,
          proposalByEmployee: [...state.proposalByEmployee, action.payload[0]],
          currentProposal: action.payload[0],
          success: true,
        };
  
      case UPDATE_PROPOSAL_BY_EMPLOYEE_SUCCESS:
        return {
          ...state,
          proposalByEmployee: state.proposalByEmployee.map((item) =>
            item.id === action.payload.id ? action.payload : item
          ),
          success: true,
        };
  
      case DELETE_PROPOSAL_BY_EMPLOYEE_SUCCESS:
        return {
          ...state,
          proposalByEmployee: state.proposalByEmployee.filter(
            (item) => item.id !== action.id
          ),
          success: true,
        };
  
      default:
        return state;
    }
  };
  
  export default proposalReducer;
  