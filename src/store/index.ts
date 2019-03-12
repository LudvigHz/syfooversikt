import { combineReducers, Dispatch, Action, AnyAction } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { ModiacontextState } from './modiacontext/modiacontextTypes';
import { VeilederinfoState } from './veilederinfo/veilederinfoTypes';
import { EnhetensMotebehovState } from './enhetensMotebehov/enhetensMotebehovTypes';
import modiacontextReducer from './modiacontext/modiacontextReducer';
import veilederinfoReducer from './veilederinfo/veilederinfoReducer';
import enhetensMotebehovReducer from './enhetensMotebehov/enhetensMotebehovReducer';
import modiacontextSagas from './modiacontext/modiacontextSagas';
import veilederinfoSagas from './veilederinfo/veilederinfoSagas';
import enhetensMotebehovSagas from './enhetensMotebehov/enhetensMotebehovSagas';

export interface ApplicationState {
  modiacontext: ModiacontextState;
  veilederinfo: VeilederinfoState;
  enhetensMotebehov: EnhetensMotebehovState;
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export const rootReducer = combineReducers<ApplicationState>({
  modiacontext: modiacontextReducer,
  veilederinfo: veilederinfoReducer,
  enhetensMotebehov: enhetensMotebehovReducer,
});

export function* rootSaga() {
  yield all([
    fork(modiacontextSagas),
    fork(veilederinfoSagas),
    fork(enhetensMotebehovSagas),
  ]);
}
