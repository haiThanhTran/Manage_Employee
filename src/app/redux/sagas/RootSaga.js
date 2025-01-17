import { all, takeLatest } from 'redux-saga/effects';

import employeeSaga from './EmployeeSaga';
import CertificateSaga from './CertificateSaga';
import FamilySaga from './FamilySaga';
import ExperienceSaga from './ExperienceSaga';
import {salarySaga} from './SalarySaga';
import {leaderSaga} from './LeaderSaga';
import {promoteSaga} from './PromoteSaga';
import {proposalSaga} from './ProposalSaga';




export default function* rootSaga() {
  yield all([
    employeeSaga(),
    CertificateSaga(),
    FamilySaga(),
    ExperienceSaga(),
    salarySaga(),
    leaderSaga(),
    promoteSaga(),
    proposalSaga()
  ]);
}
