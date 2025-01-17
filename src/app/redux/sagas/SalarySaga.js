import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADD_SALARY_BY_EMPLOYEE_REQUEST,
  DELETE_SALARY_BY_EMPLOYEE_REQUEST,
  GET_SALARY_BY_EMPLOYEE_REQUEST,
  GET_SALARY_BY_LEADER_REQUEST,
  UPDATE_SALARY_BY_EMPLOYEE_REQUEST,
  addSalaryByEmployeeFail,
  addSalaryByEmployeeSuccess,
  deleteSalaryByEmployeeFail,
  deleteSalaryByEmployeeSuccess,
  getSalaryByEmployeeFail,
  getSalaryByEmployeeSuccess,
  getSalaryByLeaderFail,
  getSalaryByLeaderSuccess,
  updateSalaryByEmployeeFail,
  updateSalaryByEmployeeSuccess,
} from "../actions/SalaryAction";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import {
  getSalaryByEmployee,
  addSalaryByEmployee,
  deleteSalaryByEmployee,
  updateSalaryByEmployee,
  getSalaryByLeader
} from "../../services/SalaryService";
function* getSalaryByEmployeeSaga(action) {
  try {
    const { id } = action;
    const response = yield call(getSalaryByEmployee, id);
    const { data, code, message } = response?.data;
    if (code === 200) {
      yield put(getSalaryByEmployeeSuccess(data));
    } else {
      yield put(getSalaryByEmployeeFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
  }
}

function* getSalaryListLeaderSaga() {
  try {
    const response = yield call(getSalaryByLeader);
    const { data, code, message } = response?.data;
    if (code === 200) {
      yield put(getSalaryByLeaderSuccess(data));
    } else {
      yield put(getSalaryByLeaderFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
  }
}

function* addSalaryByEmployeeSaga(action) {
  try {
    const { payload } = action;
    const response = yield call(addSalaryByEmployee, payload);
    const { data, code, message } = response?.data;

    if (code === 200) {
      yield put(addSalaryByEmployeeSuccess(data[0]));
      toast.success("Thêm yêu cầu thành công");
    } else {
      yield put(addSalaryByEmployeeFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
  }
}

function* updateSalaryByEmployeeSaga(action) {
  try {
    const { id, ...payload } = action.payload;

    const response = yield call(updateSalaryByEmployee, id, payload);

    const { code, message, data } = response?.data;
    if (code === 200) {
      yield put(updateSalaryByEmployeeSuccess(data));
      toast.success("Cập nhật yêu cầu thành công");
    } else {
      yield put(updateSalaryByEmployeeFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
  }
}

function* deleteSalaryByEmployeeSaga(action) {
  try {
    const { id } = action;
    const response = yield call(deleteSalaryByEmployee, id);
    const { message, code } = response?.data;
    if (code === 200) {
      yield put(deleteSalaryByEmployeeSuccess(id));
      toast.success("Xóa yêu cầu thành công");
    } else {
      yield put(deleteSalaryByEmployeeFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
  }
}

export function* salarySaga() {
  yield takeLatest(GET_SALARY_BY_EMPLOYEE_REQUEST, getSalaryByEmployeeSaga);
  yield takeLatest(GET_SALARY_BY_LEADER_REQUEST, getSalaryListLeaderSaga);
  yield takeLatest(ADD_SALARY_BY_EMPLOYEE_REQUEST, addSalaryByEmployeeSaga);
  yield takeLatest(UPDATE_SALARY_BY_EMPLOYEE_REQUEST, updateSalaryByEmployeeSaga);
  yield takeLatest(DELETE_SALARY_BY_EMPLOYEE_REQUEST, deleteSalaryByEmployeeSaga);
}