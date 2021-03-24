import { call, put, takeEvery } from 'redux-saga/effects';
import { get } from '../../api';
import * as actions from './modiacontext_actions';
import { Modiacontext } from './modiacontextTypes';

export function* aktivEnhetSaga() {
  yield put(actions.henterAktivEnhet());
  try {
    const path = `${process.env.REACT_APP_MODIACONTEXTHOLDER_ROOT}/context/aktivenhet`;
    const data: Modiacontext = yield call(get, path);
    actions.hentAktivEnhetHentet(data.aktivEnhet);
  } catch (e) {
    yield put(actions.hentAktivEnhetFeilet());
  }
}

export default function* modiacontextSagas() {
  yield takeEvery(
    actions.modiacontextActionTypes.HENT_AKTIVENHET_FORESPURT,
    aktivEnhetSaga
  );
}
