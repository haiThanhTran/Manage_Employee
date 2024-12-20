import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_EXPERIENCE_REQUEST,
  ADD_EXPERIENCE_REQUEST,
  UPDATE_EXPERIENCE_REQUEST,
  DELETE_EXPERIENCE_REQUEST,
  getExperienceFail,
  getExperienceSuccess,
  addExperienceFail,
  addExperienceSuccess,
  updateExperienceFail,
  updateExperienceSuccess,
  deleteExperienceFail,
  deleteExperienceSuccess,
} from "../actions/ExperienceActions";

import {
  getExperience,
  addExperience,
  updateExperience,
  deleteExperience,
} from "../../services/ExperienceService";
import { toast } from "react-toastify";

function* getExperienceSaga(action) {
  try {
    const response = yield call(getExperience, action.id);
    console.log("response in saga", response?.data);
    const { data, code, message } = response?.data;
    yield put(getExperienceSuccess(data));
  } catch (error) {
    yield put(getExperienceFail(error.message));
    toast.error("Lỗi khi tải danh sách kinh nghiệm.");
  }
}

function* addExperienceSaga(action) {
  try {
    const response = yield call(addExperience, action.payload);
    const { data, code, message } = response?.data;

    yield put(addExperienceSuccess(data));
    toast.success("Thêm kinh nghiệm thành công.");
  } catch (error) {
    yield put(addExperienceFail(error.message));
    toast.error("Lỗi khi thêm kinh nghiệm.");
  }
}

function* updateExperienceSaga(action) {
  try {
    const response = yield call(
      updateExperience,
      action.payload
    );
    const { data, code, message } = response?.data;
    console.log("data", data);
    yield put(updateExperienceSuccess(data));
    toast.success("Cập nhật kinh nghiệm thành công.");
  } catch (error) {
    yield put(updateExperienceFail(error.message));
    toast.error("Lỗi khi cập nhật kinh nghiệm.");
  }
}

function* deleteExperienceSaga(action) {
  try {
    const res = yield call(deleteExperience, action.id);
    const { data, code, message } = res?.data;
    console.log("action", action);
    yield put(deleteExperienceSuccess(action.id));
    toast.success("Xóa kinh nghiệm thành công.");
  } catch (error) {
    yield put(deleteExperienceFail(error.message));
    toast.error("Lỗi khi xóa kinh nghiệm.");
  }
}

export default function* ExperienceSaga() {
  yield takeLatest(GET_EXPERIENCE_REQUEST, getExperienceSaga);
  yield takeLatest(ADD_EXPERIENCE_REQUEST, addExperienceSaga);
  yield takeLatest(UPDATE_EXPERIENCE_REQUEST, updateExperienceSaga);
  yield takeLatest(DELETE_EXPERIENCE_REQUEST, deleteExperienceSaga);
}
