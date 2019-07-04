import { combineReducers, Dispatch, Action, AnyAction } from 'redux';
import { all, fork } from 'redux-saga/effects';
import { ModiacontextState } from './modiacontext/modiacontextTypes';
import { VeilederenheterState } from './veilederenheter/veilederenheterTypes';
import { VeilederinfoState } from './veilederinfo/veilederinfoTypes';
import { EnhetensMoterState } from './enhetensMoter/enhetensMoterTypes';
import { PersonInfoState } from './personInfo/personInfoTypes';
import { PersonregisterState } from './personregister/personregisterTypes';
import { EnhetNavnState } from './enhetNavn/enhetNavnTypes';
import { PersonoversiktStatusState } from './personoversikt/personoversiktTypes';
import modiacontextReducer from './modiacontext/modiacontextReducer';
import veilederenheterReducer from './veilederenheter/veilederenheterReducer';
import veilederinfoReducer from './veilederinfo/veilederinfoReducer';
import enhetensMoterReducer from './enhetensMoter/enhetensMoterReducer';
import personInfoReducer from './personInfo/personInfoReducer';
import personoversiktReducer from './personoversikt/personoversiktReducer';
import enhetNavnReducer from './enhetNavn/enhetNavnReducer';
import personregisterReducer from './personregister/personregisterReducer';

import modiacontextSagas from './modiacontext/modiacontextSagas';
import veilederenheterSagas from './veilederenheter/veilederenheterSagas';
import veilederinfoSagas from './veilederinfo/veilederinfoSagas';
import enhetensMoterSagas from './enhetensMoter/enhetensMoterSagas';
import personInfoSagas from './personInfo/personInfoSagas';
import personoversiktSagas from './personoversikt/personoversiktSagas';
import createHashHistory from 'history/createHashHistory';
import configureStore from './configureStore';
import veilederArbeidstakerSagas from './veilederArbeidstaker/veilederArbeidstakerSagas';
import enhetNavnSagas from './enhetNavn/enhetNavnSagas';

export interface ApplicationState {
  modiacontext: ModiacontextState;
  veilederenheter: VeilederenheterState;
  veilederinfo: VeilederinfoState;
  enhetensMoter: EnhetensMoterState;
  personInfo: PersonInfoState;
  personoversikt: PersonoversiktStatusState;
  personregister: PersonregisterState;
  enhetNavn: EnhetNavnState;
}

export interface ConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

export const rootReducer = combineReducers<ApplicationState>({
  modiacontext: modiacontextReducer,
  veilederenheter: veilederenheterReducer,
  veilederinfo: veilederinfoReducer,
  enhetensMoter: enhetensMoterReducer,
  personInfo: personInfoReducer,
  personoversikt: personoversiktReducer,
  personregister: personregisterReducer,
  enhetNavn: enhetNavnReducer,
});

export function* rootSaga() {
  yield all([
    fork(modiacontextSagas),
    fork(veilederenheterSagas),
    fork(veilederinfoSagas),
    fork(enhetensMoterSagas),
    fork(personInfoSagas),
    fork(personoversiktSagas),
    fork(veilederArbeidstakerSagas),
    fork(enhetNavnSagas),
  ]);
}

const history = createHashHistory();

const initialState = window.initialReduxState;
const store = configureStore(history, initialState);

export { store, history };
