import ConstantList from "app/appConfig";
const { default: axios } = require("axios");
const API_PATH_EXPERIENCES = ConstantList.API_ENPOINT + "/experience";

export const getExperience = (id) => {
  return axios.get(API_PATH_EXPERIENCES + "?employeeId=" + id);
};

export const addExperience = (payload) => {
  const { id, data } = payload;
  return axios.post(API_PATH_EXPERIENCES + "?employeeId=" + id, data);
};

export const updateExperience = (payload) => {
  const { id, data } = payload;

  return axios.put(API_PATH_EXPERIENCES + "/" + id, data);
};
export const deleteExperience = (id) => {
  return axios.delete(API_PATH_EXPERIENCES + "/" + id);
};
