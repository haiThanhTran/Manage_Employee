export const GET_CERTIFICATE_REQUEST = "GET_CERTIFICATE_REQUEST";
export const GET_CERTIFICATE_SUCCESS = "GET_CERTIFICATE_SUCCESS";
export const GET_CERTIFICATE_FAIL = "GET_listCertificate_FAIL";
export const ADD_CERTIFICATE_REQUEST = "ADD_CERTIFICATE_REQUEST";
export const ADD_CERTIFICATE_SUCCESS = "ADD_CERTIFICATE_SUCCESS";
export const ADD_CERTIFICATE_FAIL = "ADD_CERTIFICATE_FAIL";
export const UPDATE_CERTIFICATE_REQUEST = "UPDATE_CERTIFICATE_REQUEST";
export const UPDATE_CERTIFICATE_SUCCESS = "UPDATE_CERTIFICATE_SUCCESS";
export const UPDATE_CERTIFICATE_FAIL = "UPDATE_CERTIFICATE_FAIL";
export const DELETE_CERTIFICATE_REQUEST = "DELETE_CERTIFICATE_REQUEST";
export const DELETE_CERTIFICATE_SUCCESS = "DELETE_CERTIFICATE_SUCCESS";
export const DELETE_CERTIFICATE_FAIL = "DELETE_CERTIFICATE_FAIL";
export const getCertificate = (id) => {
  return {
    type: GET_CERTIFICATE_REQUEST,
    id,
  };
};
export const getlistCertificateSuccess = (payload) => {
  return {
    type: GET_CERTIFICATE_SUCCESS,
    payload,
  };
};
export const getCertificateFAIL = (payload) => {
  return {
    type: GET_CERTIFICATE_FAIL,
    payload,
  };
};

export const addCertificate = (payload) => {
  return {
    type: ADD_CERTIFICATE_REQUEST,
    payload,
  };
};
export const addlistCertificateSuccess = (payload) => {
  return {
    type: ADD_CERTIFICATE_SUCCESS,
    payload,
  };
};
export const addCertificateFAIL = (payload) => {
  return {
    type: ADD_CERTIFICATE_FAIL,
    payload,
  };
};

export const updateCertificate = (payload) => {
  return {
    type: UPDATE_CERTIFICATE_REQUEST,
    payload,
  };
};
export const updatelistCertificateSuccess = (payload) => {
  return {
    type: UPDATE_CERTIFICATE_SUCCESS,
    payload,
  };
};
export const updateCertificateFAIL = (payload) => {
  return {
    type: UPDATE_CERTIFICATE_FAIL,
    payload,
  };
};

export const deleteCertificate = (id) => {
  return {
    type: DELETE_CERTIFICATE_REQUEST,
    id,
  };
};
export const deletelistCertificateSuccess = (id) => {
  return {
    type: DELETE_CERTIFICATE_SUCCESS,
    id,
  };
};
export const deleteCertificateFAIL = (payload) => {
  return {
    type: DELETE_CERTIFICATE_FAIL,
    payload,
  };
};
