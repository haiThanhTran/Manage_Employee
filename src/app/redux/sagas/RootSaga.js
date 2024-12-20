import { all, takeLatest } from 'redux-saga/effects';

import employeeSaga from './EmployeeSaga';
import CertificateSaga from './CertificateSaga';
import FamilySaga from './FamilySaga';
import ExperienceSaga from './ExperienceSaga';




export default function* rootSaga() {
  yield all([
    employeeSaga(),
    CertificateSaga(),
    FamilySaga(),
    ExperienceSaga(),
  ]);
}
