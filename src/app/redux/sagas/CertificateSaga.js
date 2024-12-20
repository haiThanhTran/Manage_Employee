import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADD_CERTIFICATE_REQUEST,
  DELETE_CERTIFICATE_REQUEST,
  GET_CERTIFICATE_REQUEST,
  UPDATE_CERTIFICATE_REQUEST,
  addCertificateFAIL,
  addlistCertificateSuccess,
  deleteCertificateFAIL,
  deletelistCertificateSuccess,
  getCertificateFAIL,
  getlistCertificateSuccess,
  updateCertificateFAIL,
  updatelistCertificateSuccess,
} from "../actions/CertificateActions";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import {
  getCertificate,
  addCertificate,
  deleteCertificate,
  updateCertificate,
} from "../../services/CertificateService";
function* getCertificateSaga(action) {
  try {
    const { id } = action;
    const response = yield call(getCertificate, id); // Gọi hàm đã sửa
    const { data, code, message } = response?.data;

    if (code === 200) {
      yield put(getlistCertificateSuccess(data));
    } else {
      yield put(getCertificateFAIL(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
  }
}

function* addCertificateSaga(action) {
  try {
    const response = yield call(addCertificate, action.payload);
    const { data, code, message } = response?.data;
    if (response.status === 200) {
      yield put(addlistCertificateSuccess(data));
      yield put({ type: GET_CERTIFICATE_REQUEST, id: action.payload.id }); // Gọi lại API
      toast.success("Thêm văn bằng thành công");
    } else {
      yield put(addCertificateFAIL(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
  }
}

function* updateCertificateSaga(action) {
  try {
    const response = yield call(updateCertificate, action.payload.id, action.payload);
    if (response?.status === 200) {
      yield put(updatelistCertificateSuccess(response.data.data));
      yield put({ type: GET_CERTIFICATE_REQUEST, id: action.payload.employeeId }); 
      toast.success("Cập nhật văn bằng thành công");
    } else {
      yield put(updateCertificateFAIL(response.message));
    }
  } catch (error) {
    console.error(error);
  }
}

function* deleteCertificateSaga(action) {
  try {
    const { id } = action;
    const response = yield call(deleteCertificate,id);
    const { message, code } = response?.data;
    console.log("response", response);
    console.log("id", id);
    if (response.status === 200) {
      yield put(deletelistCertificateSuccess(id));
      toast.success("Xóa văn bằng thành công");
    } else {
      yield put(deleteCertificateFAIL(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
  }
}

export default function* CertificateSaga() {
  yield takeLatest(GET_CERTIFICATE_REQUEST, getCertificateSaga);
  yield takeLatest(ADD_CERTIFICATE_REQUEST, addCertificateSaga);
  yield takeLatest(UPDATE_CERTIFICATE_REQUEST, updateCertificateSaga);
  yield takeLatest(DELETE_CERTIFICATE_REQUEST, deleteCertificateSaga);
}

const cleanCertificateData = (data) => {
  if (Array.isArray(data)) {
    return data.map(({ tableData, ...rest }) => rest);
  } else {
    const { tableData, ...rest } = data;
    return rest;
  }
};
