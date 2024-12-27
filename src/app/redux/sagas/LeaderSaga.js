import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADD_LEADER_REQUEST,
  DELETE_LEADER_REQUEST,
  GET_LEADER_LIST_REQUEST,
  UPDATE_LEADER_REQUEST,
  addLeaderFAIL,
  addLeaderSuccess,
  deleteLeaderFAIL,
  deleteLeaderSuccess,
  getLeaderFAIL,
  getLeaderSuccess,
  updateLeaderFAIL,
  updateLeaderSuccess,
} from "../actions/LeaderActions";
import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import {
  getLeader,
  addLeader,
  deleteLeader,
  updateLeader,
} from "../../services/LeaderService";

// Saga to fetch the list of leaders
function* getLeaderSaga(action) {
  try {
    const response = yield call(getLeader, action.payload);
    const { data, code, message } = response?.data;

    if (code === 200) {
      yield put(getLeaderSuccess(data));
    } else {
      yield put(getLeaderFAIL(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
    toast.error("Có lỗi xảy ra khi lấy danh sách lãnh đạo");
    yield put(getLeaderFAIL(error.message));
  }
}

// Saga to add a new leader
function* addLeaderSaga(action) {
  try {
    const response = yield call(addLeader, action.payload);
    const { data, code, message } = response?.data;

    if (code === 200) {
      yield put(addLeaderSuccess(data));
      toast.success("Thêm lãnh đạo thành công");
    } else {
      yield put(addLeaderFAIL(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
    toast.error("Có lỗi xảy ra khi thêm lãnh đạo");
    yield put(addLeaderFAIL(error.message));
  }
}

// Saga to update leader information
function* updateLeaderSaga(action) {
  try {
    const { id, ...payload } = action.payload;
    const response = yield call(updateLeader, id, payload);
    const { data, code, message } = response?.data;

    if (code === 200) {
      yield put(updateLeaderSuccess(data));
      toast.success("Cập nhật lãnh đạo thành công");
    } else {
      yield put(updateLeaderFAIL(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
    toast.error("Có lỗi xảy ra khi cập nhật lãnh đạo");
    yield put(updateLeaderFAIL(error.message));
  }
}

// Saga to delete a leader
function* deleteLeaderSaga(action) {
  try {
    const response = yield call(deleteLeader, action.payload);
    const { code, message } = response?.data;

    if (code === 200) {
      yield put(deleteLeaderSuccess(action.payload));
      toast.success("Xóa lãnh đạo thành công");
    } else {
      yield put(deleteLeaderFAIL(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
    toast.error("Có lỗi xảy ra khi xóa lãnh đạo");
    yield put(deleteLeaderFAIL(error.message));
  }
}

// Root saga for leaders
export function* leaderSaga() {
  yield takeLatest(GET_LEADER_LIST_REQUEST, getLeaderSaga);
  yield takeLatest(ADD_LEADER_REQUEST, addLeaderSaga);
  yield takeLatest(UPDATE_LEADER_REQUEST, updateLeaderSaga);
  yield takeLatest(DELETE_LEADER_REQUEST, deleteLeaderSaga);
}