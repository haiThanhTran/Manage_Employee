import axios from "axios";
import ConstantList from "../../app/appConfig";

const API_PATH_CERTIFICATE = ConstantList.API_ENPOINT + "/certificate";

export const getCertificate = (id) => {
  return axios.get(API_PATH_CERTIFICATE + "?employeeId=" + id);
};

export const addCertificate = (payload) => {
  const { id, data } = payload;
  return axios.post(API_PATH_CERTIFICATE + "?employeeId=" + id, data);
};

export const updateCertificate = (id, data) => {
  return axios.put(API_PATH_CERTIFICATE + "/" + id, data);
};

export const deleteCertificate = (id) => {
  return axios.delete(API_PATH_CERTIFICATE + "/" + id);
};
