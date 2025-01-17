export const GET_PROMOTE_BY_EMPLOYEE_REQUEST = "GET_PROMOTE_BY_EMPLOYEE_REQUEST";
export const GET_PROMOTE_BY_EMPLOYEE_SUCCESS = "GET_PROMOTE_BY_EMPLOYEE_SUCCESS";
export const GET_PROMOTE_BY_EMPLOYEE_FAIL = "GET_PROMOTE_BY_EMPLOYEE_FAIL";
export const GET_PROMOTE_BY_LEADER_REQUEST = "GET_PROMOTE_BY_LEADER_REQUEST";
export const GET_PROMOTE_BY_LEADER_SUCCESS = "GET_PROMOTE_BY_LEADER_SUCCESS";
export const GET_PROMOTE_BY_LEADER_FAIL = "GET_PROMOTE_BY_LEADER_FAIL";
export const ADD_PROMOTE_BY_EMPLOYEE_REQUEST = "ADD_PROMOTE_BY_EMPLOYEE_REQUEST";
export const ADD_PROMOTE_BY_EMPLOYEE_SUCCESS = "ADD_PROMOTE_BY_EMPLOYEE_SUCCESS";
export const ADD_PROMOTE_BY_EMPLOYEE_FAIL = "ADD_PROMOTE_BY_EMPLOYEE_FAIL";
export const UPDATE_PROMOTE_BY_EMPLOYEE_REQUEST = "UPDATE_PROMOTE_BY_EMPLOYEE_REQUEST";
export const UPDATE_PROMOTE_BY_EMPLOYEE_SUCCESS = "UPDATE_PROMOTE_BY_EMPLOYEE_SUCCESS";
export const UPDATE_PROMOTE_BY_EMPLOYEE_FAIL = "UPDATE_PROMOTE_BY_EMPLOYEE_FAIL";
export const DELETE_PROMOTE_BY_EMPLOYEE_REQUEST = "DELETE_PROMOTE_BY_EMPLOYEE_REQUEST";
export const DELETE_PROMOTE_BY_EMPLOYEE_SUCCESS = "DELETE_PROMOTE_BY_EMPLOYEE_SUCCESS";
export const DELETE_PROMOTE_BY_EMPLOYEE_FAIL = "DELETE_PROMOTE_BY_EMPLOYEE_FAIL";
export const getPromoteByEmployee = (id) => {
  return {
    type: GET_PROMOTE_BY_EMPLOYEE_REQUEST,
    id,
  };
};
export const getPromoteByEmployeeSuccess = (payload) => {
  return {
    type: GET_PROMOTE_BY_EMPLOYEE_SUCCESS,
    payload,
  };
};
export const getPromoteByEmployeeFail = (payload) => {
  return {
    type: GET_PROMOTE_BY_EMPLOYEE_FAIL,
    payload,
  };
};

export const getPromoteByLeader = (payload) => {
  return {
    type: GET_PROMOTE_BY_LEADER_REQUEST,
    payload
  };
};
export const getPromoteByLeaderSuccess = (payload) => {
  return {
    type: GET_PROMOTE_BY_LEADER_SUCCESS,
    payload,
  };
};
export const getPromoteByLeaderFail = (payload) => {
  return {
    type: GET_PROMOTE_BY_LEADER_FAIL,
    payload,
  };
};

export const addPromoteByEmployee = (payload) => {
  return {
    type: ADD_PROMOTE_BY_EMPLOYEE_REQUEST,
    payload,
  };
};
export const addPromoteByEmployeeSuccess = (payload) => {
  return {
    type: ADD_PROMOTE_BY_EMPLOYEE_SUCCESS,
    payload,
  };
};
export const addPromoteByEmployeeFail = (payload) => {
  return {
    type: ADD_PROMOTE_BY_EMPLOYEE_FAIL,
    payload,
  };
};

export const updatePromoteByEmployee = (payload) => {
  return {
    type: UPDATE_PROMOTE_BY_EMPLOYEE_REQUEST,
    payload,
  };
};
export const updatePromoteByEmployeeSuccess = (payload) => {
  return {
    type: UPDATE_PROMOTE_BY_EMPLOYEE_SUCCESS,
    payload,
  };
};
export const updatePromoteByEmployeeFail = (payload) => {
  return {
    type: UPDATE_PROMOTE_BY_EMPLOYEE_FAIL,
    payload,
  };
};

export const deletePromoteByEmployee = (id) => {
  return {
    type: DELETE_PROMOTE_BY_EMPLOYEE_REQUEST,
    id,
  };
};
export const deletePromoteByEmployeeSuccess = (id) => {
  return {
    type: DELETE_PROMOTE_BY_EMPLOYEE_SUCCESS,
    id,
  };
};
export const deletePromoteByEmployeeFail = (payload) => {
  return {
    type: DELETE_PROMOTE_BY_EMPLOYEE_FAIL,
    payload,
  };
};
