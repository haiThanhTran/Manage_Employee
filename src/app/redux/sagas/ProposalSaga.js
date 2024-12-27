import { call, put, takeLatest } from "redux-saga/effects";
import {
  ADD_PROPOSAL_BY_EMPLOYEE_REQUEST,
  DELETE_PROPOSAL_BY_EMPLOYEE_REQUEST,
  GET_PROPOSAL_BY_EMPLOYEE_REQUEST,
  GET_PROPOSAL_BY_LEADER_REQUEST,
  UPDATE_PROPOSAL_BY_EMPLOYEE_REQUEST,
  addProposalByEmployeeFail,
  addProposalByEmployeeSuccess,
  deleteProposalByEmployeeFail,
  deleteProposalByEmployeeSuccess,
  getProposalByEmployeeFail,
  getProposalByEmployeeSuccess,
  getproposalByLeaderFail,
  getproposalByLeaderSuccess,
  updateProposalByEmployeeFail,
  updateProposalByEmployeeSuccess,
} from "../actions/ProposalActions";
import { toast } from "react-toastify";

import {
  getProposalByEmployee,
  addProposalByEmployee,
  deleteProposalByEmployee,
  updateProposalByEmployee,
  getproposalByLeader,
} from "../../services/ProposalService";

function* getProposalByEmployeeSaga(props) {
  const { id } = props;
  try {
    const response = yield call(getProposalByEmployee, id);
    const { data, code, message } = response?.data;

    if (code === 200) {
      yield put(getProposalByEmployeeSuccess(data));
    } else {
      yield put(getProposalByEmployeeFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
    yield put(getProposalByEmployeeFail(error.message));
    toast.error("Lỗi khi lấy danh sách proposal by employee.");
  }
}

function* getproposalByLeaderSaga() {
  try {
    const response = yield call(getproposalByLeader);
    const { data, code, message } = response?.data;

    if (code === 200) {
      yield put(getproposalByLeaderSuccess(data));
    } else {
      yield put(getproposalByLeaderFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
    yield put(getproposalByLeaderFail(error.message));
    toast.error("Lỗi khi lấy danh sách proposal by leader.");
  }
}

function* addProposalByEmployeeSaga(action) {
  try {
    const response = yield call(addProposalByEmployee, action.payload);
    const { data, code, message } = response?.data;

    if (code === 200) {
      yield put(addProposalByEmployeeSuccess(data));
      toast.success("Thêm proposal thành công.");
    } else {
      yield put(addProposalByEmployeeFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
    yield put(addProposalByEmployeeFail(error.message));
    toast.error("Lỗi khi thêm proposal.");
  }
}

function* updateProposalByEmployeeSaga(action) {
  try {
    const { id, ...payload } = action.payload;
    const response = yield call(updateProposalByEmployee, id, payload);
    const { data, code, message } = response?.data;

    if (code === 200) {
      yield put(updateProposalByEmployeeSuccess(data));
      toast.success("Cập nhật proposal thành công.");
    } else {
      yield put(updateProposalByEmployeeFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
    yield put(updateProposalByEmployeeFail(error.message));
    toast.error("Lỗi khi cập nhật proposal.");
  }
}

function* deleteProposalByEmployeeSaga(props) {
  const { id } = props;
  try {
    const response = yield call(deleteProposalByEmployee, id);
    const { code, message } = response?.data;

    if (code === 200) {
      yield put(deleteProposalByEmployeeSuccess(id));
      toast.success("Xóa proposal thành công.");
    } else {
      yield put(deleteProposalByEmployeeFail(message));
      toast.error(message);
    }
  } catch (error) {
    console.error(error);
    yield put(deleteProposalByEmployeeFail(error.message));
    toast.error("Lỗi khi xóa proposal.");
  }
}

export function* proposalSaga() {
  yield takeLatest(GET_PROPOSAL_BY_EMPLOYEE_REQUEST, getProposalByEmployeeSaga);
  yield takeLatest(GET_PROPOSAL_BY_LEADER_REQUEST, getproposalByLeaderSaga);
  yield takeLatest(ADD_PROPOSAL_BY_EMPLOYEE_REQUEST, addProposalByEmployeeSaga);
  yield takeLatest(UPDATE_PROPOSAL_BY_EMPLOYEE_REQUEST, updateProposalByEmployeeSaga);
  yield takeLatest(DELETE_PROPOSAL_BY_EMPLOYEE_REQUEST, deleteProposalByEmployeeSaga);
}
