import { all, takeLatest } from 'redux-saga/effects';

import employeeSaga from './EmployeeSaga';




export default function* rootSaga() {
  yield all([
    employeeSaga(),
  ]);
}
