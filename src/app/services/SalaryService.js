import ConstantList from "app/appConfig";
const { default: axios } = require("axios");
const API_PATH_SALARY = ConstantList.API_ENPOINT + "/salary-increase";

export const getSalaryByEmployee = (id) => {
  return axios.get(API_PATH_SALARY + "?employeeId=" + id);
};

export const getSalaryByLeader = () => {
  return axios.get(API_PATH_SALARY + "/current-leader");
};

export const addSalaryByEmployee = (payload) => {
  console.log("payload",)
  const { id, data } = payload;
  return axios.post(API_PATH_SALARY + "?employeeId=" + id, data);
};

export const updateSalaryByEmployee = (id, data) => {
  return axios.put(API_PATH_SALARY + "/" + id, data);
};
export const deleteSalaryByEmployee = (id) => {
  return axios.delete(API_PATH_SALARY + "/" + id);
};