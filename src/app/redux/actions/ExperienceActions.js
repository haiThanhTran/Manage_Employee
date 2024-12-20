export const GET_EXPERIENCE_REQUEST = "GET_EXPERIENCE_REQUEST";
export const GET_EXPERIENCE_SUCCESS = "GET_EXPERIENCE_SUCCESS";
export const GET_EXPERIENCE_FAIL = "GET_EXPERIENCE_FAIL";

export const ADD_EXPERIENCE_REQUEST = "ADD_EXPERIENCE_REQUEST";
export const ADD_EXPERIENCE_SUCCESS = "ADD_EXPERIENCE_SUCCESS";
export const ADD_EXPERIENCE_FAIL = "ADD_EXPERIENCE_FAIL";

export const UPDATE_EXPERIENCE_REQUEST = "UPDATE_EXPERIENCE_REQUEST";
export const UPDATE_EXPERIENCE_SUCCESS = "UPDATE_EXPERIENCE_SUCCESS";
export const UPDATE_EXPERIENCE_FAIL = "UPDATE_EXPERIENCE_FAIL";

export const DELETE_EXPERIENCE_REQUEST = "DELETE_EXPERIENCE_REQUEST";
export const DELETE_EXPERIENCE_SUCCESS = "DELETE_EXPERIENCE_SUCCESS";
export const DELETE_EXPERIENCE_FAIL = "DELETE_EXPERIENCE_FAIL";

// GET EXPERIENCE
export const getExperience = (id) => ({
    type: GET_EXPERIENCE_REQUEST,
    id,
  });
  
  export const getExperienceSuccess = (payload) => ({
    type: GET_EXPERIENCE_SUCCESS,
    payload,
  });
  
  export const getExperienceFail = (error) => ({
    type: GET_EXPERIENCE_FAIL,
    payload: error,
  });
  
  // ADD EXPERIENCE
  export const addExperience = (payload) => ({
    type: ADD_EXPERIENCE_REQUEST,
    payload,
  });
  
  export const addExperienceSuccess = (payload) => ({
    type: ADD_EXPERIENCE_SUCCESS,
    payload,
  });
  
  export const addExperienceFail = (error) => ({
    type: ADD_EXPERIENCE_FAIL,
    payload: error,
  });
  
  // UPDATE EXPERIENCE
  export const updateExperience = (payload) => ({
    type: UPDATE_EXPERIENCE_REQUEST,
    payload,
  });
  
  export const updateExperienceSuccess = (payload) => ({
    type: UPDATE_EXPERIENCE_SUCCESS,
    payload,
  });
  
  export const updateExperienceFail = (error) => ({
    type: UPDATE_EXPERIENCE_FAIL,
    payload: error,
  });
  
  // DELETE EXPERIENCE
  export const deleteExperience = (id) => ({
    type: DELETE_EXPERIENCE_REQUEST,
    id,
  });
  
  export const deleteExperienceSuccess = (id) => ({
    type: DELETE_EXPERIENCE_SUCCESS,
    id,
  });
  
  export const deleteExperienceFail = (error) => ({
    type: DELETE_EXPERIENCE_FAIL,
    payload: error,
  });
  