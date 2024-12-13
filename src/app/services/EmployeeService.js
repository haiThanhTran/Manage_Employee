import axios from "axios";
import ConstantList from "../../app/appConfig";

const API_EMPLOYEE = ConstantList.API_ENPOINT + "/employee";

export const getEmployee = (data) => {
  const url = API_EMPLOYEE + "/search";
  return axios.get(url, { params: { ...data } })
    .catch(error => {
      console.error("Error in searchEmployee:", error);
      throw error;
    });
};

export const deleteEmployee = (id) => {
  const DELETE_EMPLOYEE_API = API_EMPLOYEE + `/${id}`;
  return axios.delete(DELETE_EMPLOYEE_API)
    .catch(error => {
      console.error("Error in deleteEmployee:", error);
      throw error;
    });
};

export const updateEmployee = (id, employee) => {
  const UPDATE_EMPLOYEE_API = API_EMPLOYEE + `/${id}`;
  return axios.put(UPDATE_EMPLOYEE_API, employee)
    .catch(error => {
      console.error("Error in updateEmployee:", error);
      throw error;
    });
};

export const createEmployee = (employee) => {
  return axios.post(API_EMPLOYEE, employee)
    .catch(error => {
      console.error("Error in createEmployee:", error);
      throw error;
    });
};

export const uploadImage = (data) => {
  const url = `${API_EMPLOYEE}/upload-image`;
  return axios.post(url, data)
    .catch(error => {
      console.error("Error in uploadImage:", error);
      throw error;
    });
};

export const getEmployeeById = (id) => {
  const url = `${API_EMPLOYEE}/${id}`;
  return axios.get(url)
    .catch(error => {
      console.error("Error in getEmployeeById:", error);
      throw error;
    });
};