import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADD_PROMOTE_BY_EMPLOYEE_REQUEST,
  DELETE_PROMOTE_BY_EMPLOYEE_REQUEST,
  GET_PROMOTE_BY_EMPLOYEE_REQUEST,
  GET_PROMOTE_BY_LEADER_REQUEST,
  UPDATE_PROMOTE_BY_EMPLOYEE_REQUEST,
  addPromoteByEmployeeFail,
  addPromoteByEmployeeSuccess,
  deletePromoteByEmployeeFail,
  deletePromoteByEmployeeSuccess,
  getPromoteByEmployeeFail,
  getPromoteByEmployeeSuccess,
  getPromoteByLeaderFail,
  getPromoteByLeaderSuccess,
  updatePromoteByEmployeeFail,
  updatePromoteByEmployeeSuccess,
} from "../actions/PromoteActions";
import { toast } from "react-toastify";

import {
  getPromoteByEmployee,
  addPromoteByEmployee,
  deletePromoteByEmployee,
  updatePromoteByEmployee,
  getPromoteByLeader,
} from "../../services/PromoteService";

function* getPromoteByEmployeeSaga(props) {
  const { id } = props;
  try {
    const response = yield call(getPromoteByEmployee, id);
    const { data, code, message } = response?.data;

    if (code === 200) {
      yield put(getPromoteByEmployeeSuccess(data));
    } else {
      yield put(getPromoteByEmployeeFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
    yield put(getPromoteByEmployeeFail(error.message));
    toast.error("Lỗi khi lấy danh sách promote by employee.");
  }
}

function* getPromoteByLeaderSaga() {
  try {
    const response = yield call(getPromoteByLeader);
    const { data, code, message } = response?.data;

    if (code === 200) {
      yield put(getPromoteByLeaderSuccess(data));
    } else {
      yield put(getPromoteByLeaderFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
    yield put(getPromoteByLeaderFail(error.message));
    toast.error("Lỗi khi lấy danh sách promote by leader.");
  }
}

function* addPromoteByEmployeeSaga(action) {
  try {
    const response = yield call(addPromoteByEmployee, action.payload);
    const { data, code, message } = response?.data;

    if (code === 200) {
      yield put(addPromoteByEmployeeSuccess(data));
      toast.success("Thêm promote thành công.");
    } else {
      yield put(addPromoteByEmployeeFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
    yield put(addPromoteByEmployeeFail(error.message));
    toast.error("Lỗi khi thêm promote.");
  }
}

function* updatePromoteByEmployeeSaga(action) {
  try {
    const { id, ...payload } = action.payload;
    const response = yield call(updatePromoteByEmployee, id, payload);
    const { data, code, message } = response?.data;

    if (code === 200) {
      yield put(updatePromoteByEmployeeSuccess(data));
      toast.success("Cập nhật promote thành công.");
    } else {
      yield put(updatePromoteByEmployeeFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
    yield put(updatePromoteByEmployeeFail(error.message));
    toast.error("Lỗi khi cập nhật promote.");
  }
}

function* deletePromoteByEmployeeSaga(props) {
  const { id } = props;
  try {
    const response = yield call(deletePromoteByEmployee, id);
    const { code, message } = response?.data;

    if (code === 200) {
      yield put(deletePromoteByEmployeeSuccess(id));
      toast.success("Xóa promote thành công.");
    } else {
      yield put(deletePromoteByEmployeeFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
    yield put(deletePromoteByEmployeeFail(error.message));
    toast.error("Lỗi khi xóa promote.");
  }
}

export function* promoteSaga() {
  yield takeLatest(GET_PROMOTE_BY_EMPLOYEE_REQUEST, getPromoteByEmployeeSaga);
  yield takeLatest(GET_PROMOTE_BY_LEADER_REQUEST, getPromoteByLeaderSaga);
  yield takeLatest(ADD_PROMOTE_BY_EMPLOYEE_REQUEST, addPromoteByEmployeeSaga);
  yield takeLatest(
    UPDATE_PROMOTE_BY_EMPLOYEE_REQUEST,
    updatePromoteByEmployeeSaga
  );
  yield takeLatest(
    DELETE_PROMOTE_BY_EMPLOYEE_REQUEST,
    deletePromoteByEmployeeSaga
  );
}
