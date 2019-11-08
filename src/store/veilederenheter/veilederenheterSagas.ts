import {
  all,
  call,
  fork,
  put,
  takeEvery,
} from 'redux-saga/effects';
import { get } from '../../api/index';
import * as actions from './veilederenheter_actions';
import { fullNaisUrlDefault } from '../../utils/miljoUtil';
import { HOST_NAMES } from '../../konstanter';

export function* hentVeilederenheter() {
  yield put(actions.hentVeilederenheterHenter());
  try {
    const host = HOST_NAMES.SYFOMOTEADMIN;
    const path = `${process.env.REACT_APP_SYFOMOTEADMIN_ROOT}/internad/veilederinfo/enheter`;
    const url = fullNaisUrlDefault(host,path);
    const data = yield call(get, url);
    yield put(actions.hentVeilederenheterHentet(data));
  } catch (e) {
    yield put(actions.hentVeilederenheterFeilet());
  }
}

function* watchHentVeilederinfo() {
  yield takeEvery(
      actions.VeilederenheterActionTypes.HENT_VEILEDERENHETER_FORESPURT,
      hentVeilederenheter
  );
}

export default function* veilederinfoSagas() {
  yield all([fork(watchHentVeilederinfo)]);
}
