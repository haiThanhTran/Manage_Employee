import { call, put, takeLatest, all } from "redux-saga/effects";
import {
  getEmployeesSuccess,
  getEmployeesFail,
  createEmployeeSuccess,
  createEmployeeFail,
  updateEmployeeSuccess,
  updateEmployeeFail,
  deleteEmployeeSuccess,
  deleteEmployeeFail,
  getEmployeeByIdSuccess,
  getEmployeeByIdFail,
  uploadEmployeeImageSuccess,
  uploadEmployeeImageFail,
} from "../actions/EmployeeActions";
import * as EmployeeService from "../../services/EmployeeService";
import { toast } from "react-toastify";
import {
  GET_EMPLOYEES,
  CREATE_EMPLOYEE,
  UPDATE_EMPLOYEE,
  DELETE_EMPLOYEE,
  GET_EMPLOYEE_BY_ID,
  UPLOAD_EMPLOYEE_IMAGE,
} from "../actions/EmployeeActions";
import STATUS_CODE from "../../const/ApiConstant";
function* getEmployeesSaga(action) {
  try {

    const { payload } = action;
    console.log("payload", payload);

    const response = yield call(EmployeeService.getEmployee, payload);

    const { data, totalElements, code, message } = response?.data;
    if (response.status === 200){
      console.log("payloadsuceess", payload);
      yield put(getEmployeesSuccess({ data, totalElements }));
    } else {
      console.log("payload", payload);

      yield put(getEmployeesFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
  }
}

function* createEmployeeSaga({ payload }) {
  try {
    const response = yield call(EmployeeService.createEmployee, payload);
    yield put(createEmployeeSuccess(response.data));
    toast.success("Tạo nhân viên thành công!");
    // yield put(getEmployees());
  } catch (error) {
    yield put(createEmployeeFail(error.message));
    toast.error("Có lỗi xảy ra khi tạo nhân viên");
  }
}

function* updateEmployeeSaga({ payload }) {
  try {
    const { id, employeeNew } = payload;
    const response = yield call(
      EmployeeService.updateEmployee,
      id,
      employeeNew
    );
    yield put(updateEmployeeSuccess(response.data));
    toast.success("Cập nhật nhân viên thành công!");
    // yield put(getEmployees());
  } catch (error) {
    yield put(updateEmployeeFail(error.message));
    toast.error("Có lỗi xảy ra khi cập nhật nhân viên");
  }
}

function* deleteEmployeeSaga({ payload }) {
  try {
    yield call(EmployeeService.deleteEmployee, payload);
    yield put(deleteEmployeeSuccess(payload));
    toast.success("Xoá nhân viên thành công!");
    // yield put(getEmployees());
  } catch (error) {
    yield put(deleteEmployeeFail(error.message));
    toast.error("Có lỗi xảy ra khi xóa nhân viên");
  }
}

function* getEmployeeByIdSaga({ payload }) {
  try {
    const response = yield call(EmployeeService.getEmployeeById, payload);
    yield put(getEmployeeByIdSuccess(response.data));
  } catch (error) {
    yield put(getEmployeeByIdFail(error.message));
  }
}

function* uploadEmployeeImageSaga({ payload }) {
  try {
    const response = yield call(EmployeeService.uploadImage, payload);
    yield put(uploadEmployeeImageSuccess(response.data));
  } catch (error) {
    yield put(uploadEmployeeImageFail(error.message));
  }
}
export default function* employeeSaga() {
  yield all([
    takeLatest(GET_EMPLOYEES, getEmployeesSaga),
    takeLatest(CREATE_EMPLOYEE, createEmployeeSaga),
    takeLatest(UPDATE_EMPLOYEE, updateEmployeeSaga),
    takeLatest(DELETE_EMPLOYEE, deleteEmployeeSaga),
    takeLatest(GET_EMPLOYEE_BY_ID, getEmployeeByIdSaga),
    takeLatest(UPLOAD_EMPLOYEE_IMAGE, uploadEmployeeImageSaga),
  ]);
}
