import { call, put, takeLatest } from "redux-saga/effects";
import {
  GET_FAMILY,
  CREATE_FAMILY,
  UPDATE_FAMILY,
  DELETE_FAMILY,
  getFamilyFail,
  getFamilySuccess,
  createFamilyFail,
  createFamilySuccess,
  updateFamilyFail,
  updateFamilySuccess,
  deleteFamilyFail,
  deleteFamilySuccess,
} from "../actions/FamilyAction";
import { getFamily, addFamily, updateFamily, deleteFamily } from "../../services/FamilyService";
import { toast } from "react-toastify";

// Fetch Family Saga
function* getFamilySaga(action) {
  try {
    const response = yield call(getFamily, action.payload);
    const { data, code, message } = response?.data;

    if (code === 200) {
      yield put(getFamilySuccess(data));
    } else {
      yield put(getFamilyFail(message));
      toast.error(message || "Lỗi khi lấy dữ liệu gia đình");
    }
  } catch (error) {
    console.error("Error in getFamilySaga:", error);
    yield put(getFamilyFail(error.message));
  }
}

// Create Family Saga
function* createFamilySaga(action) {
  try {
    const response = yield call(addFamily, action.payload);
    const { data, code, message } = response?.data;

    if (response.status === 200) {
      yield put(createFamilySuccess(response.data.data));
      toast.success("Thêm thông tin gia đình thành công");
    } else {
      yield put(createFamilyFail(message));
      toast.error(message || "Lỗi khi thêm thông tin gia đình");
    }
  } catch (error) {
    console.error("Error in createFamilySaga:", error);
    yield put(createFamilyFail(error.message));
  }
}

// Update Family Saga
function* updateFamilySaga(action) {
  try {
    const response = yield call(updateFamily, action.payload.id, action.payload);

    if (response?.status === 200) {
      yield put(updateFamilySuccess(response.data.data));
      toast.success("Cập nhật thông tin gia đình thành công");
    } else {
      yield put(updateFamilyFail(response.message));
      toast.error("Lỗi khi cập nhật thông tin gia đình");
    }
  } catch (error) {
    console.error("Error in updateFamilySaga:", error);
    yield put(updateFamilyFail(error.message));
  }
}

// Delete Family Saga
function* deleteFamilySaga(action) {
  try {
    const response = yield call(deleteFamily, action.payload);
    const { message, code } = response?.data;

    if (response.status === 200) {
      yield put(deleteFamilySuccess(action.payload));
      toast.success("Xóa thông tin gia đình thành công");
    } else {
      yield put(deleteFamilyFail(message));
      toast.error(message || "Lỗi khi xóa thông tin gia đình");
    }
  } catch (error) {
    console.error("Error in deleteFamilySaga:", error);
    yield put(deleteFamilyFail(error.message));
  }
}

export default function* familySaga() {
  yield takeLatest(GET_FAMILY, getFamilySaga);
  yield takeLatest(CREATE_FAMILY, createFamilySaga);
  yield takeLatest(UPDATE_FAMILY, updateFamilySaga);
  yield takeLatest(DELETE_FAMILY, deleteFamilySaga);
}
