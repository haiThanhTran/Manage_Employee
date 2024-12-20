// Action Types
export const GET_FAMILY = "GET_FAMILY";
export const GET_FAMILY_SUCCESS = "GET_FAMILY_SUCCESS";
export const GET_FAMILY_FAIL = "GET_FAMILY_FAIL";

export const CREATE_FAMILY = "CREATE_FAMILY";
export const CREATE_FAMILY_SUCCESS = "CREATE_FAMILY_SUCCESS";
export const CREATE_FAMILY_FAIL = "CREATE_FAMILY_FAIL";

export const UPDATE_FAMILY = "UPDATE_FAMILY";
export const UPDATE_FAMILY_SUCCESS = "UPDATE_FAMILY_SUCCESS";
export const UPDATE_FAMILY_FAIL = "UPDATE_FAMILY_FAIL";

export const DELETE_FAMILY = "DELETE_FAMILY";
export const DELETE_FAMILY_SUCCESS = "DELETE_FAMILY_SUCCESS";
export const DELETE_FAMILY_FAIL = "DELETE_FAMILY_FAIL";

export const RESET_CURRENT_FAMILY = "RESET_CURRENT_FAMILY";

// Action Creators
export const getFamily = (id) => ({
  type: GET_FAMILY,
  payload: id,
});

export const getFamilySuccess = (data) => ({
  type: GET_FAMILY_SUCCESS,
  payload: data,
});

export const getFamilyFail = (error) => ({
  type: GET_FAMILY_FAIL,
  payload: error,
});

export const createFamily = (data) => ({
  type: CREATE_FAMILY,
  payload: data,
});

export const createFamilySuccess = (data) => ({
  type: CREATE_FAMILY_SUCCESS,
  payload: data,
});

export const createFamilyFail = (error) => ({
  type: CREATE_FAMILY_FAIL,
  payload: error,
});

export const updateFamily = (payload) => ({
  type: UPDATE_FAMILY,
  payload
});

export const updateFamilySuccess = (data) => ({
  type: UPDATE_FAMILY_SUCCESS,
  payload: data,
});

export const updateFamilyFail = (error) => ({
  type: UPDATE_FAMILY_FAIL,
  payload: error,
});

export const deleteFamily = (id) => ({
  type: DELETE_FAMILY,
  payload: id,
});

export const deleteFamilySuccess = (id) => ({
  type: DELETE_FAMILY_SUCCESS,
  payload: id,
});

export const deleteFamilyFail = (error) => ({
  type: DELETE_FAMILY_FAIL,
  payload: error,
});

export const resetCurrentFamily = () => ({
  type: RESET_CURRENT_FAMILY,
});
