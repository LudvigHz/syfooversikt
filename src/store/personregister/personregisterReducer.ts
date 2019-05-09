import { Reducer } from 'redux';
import { EnhetensMotebehovActionTypes } from '../enhetensMotebehov/enhetensMotebehovTypes';
import {
  PersonNavnActionTypes,
  PersonNavn,
} from '../personNavn/personNavnTypes';
import {
  PersonregisterActionTypes,
  PersonData,
  PersonregisterState,
  PersonHendelseData,
} from './personregisterTypes';
import { EnhetensMoterActionTypes } from '../enhetensMoter/enhetensMoterTypes';

const tilPersonDataMap = (personDataMapObject: any) => {
  return personDataMapObject.reduce((acc: { }, curr: { [fnr: string]: PersonData}) => {
    return {...acc, ...curr};
  }, { });
};

const initiellState = { };

const personregisterReducer: Reducer<PersonregisterState> = (
  state = initiellState,
  action
) => {
  switch (action.type) {
    case EnhetensMotebehovActionTypes.HENT_ENHETENS_MOTEBEHOV_HENTET: {
      const motebehovSvarHentet = action.data;
      const personerSomSkalOppdateres: { [fnr: string]: PersonData } = motebehovSvarHentet.map((motebehovSvar: PersonHendelseData) => {
        return {
          [motebehovSvar.fnr]: {
            ...state[motebehovSvar.fnr],
            harSvartPaaMotebehov: true,
            skjermingskode: motebehovSvar.skjermingskode
          }
        };
      });
      const oppdatering = tilPersonDataMap(personerSomSkalOppdateres);
      return {...state, ...oppdatering };
    }
    case EnhetensMoterActionTypes.HENT_ENHETENS_MOTER_HENTET: {
      const moterSvarHentet = action.data;
      const personerSomSkalOppdateres: { [fnr: string]: PersonData } = moterSvarHentet.map((moter: PersonHendelseData) => {
        return {
          [moter.fnr]: {
            ...state[moter.fnr],
            harMote: true,
            skjermingskode: moter.skjermingskode
          }
        };
      });
      const oppdatering = tilPersonDataMap(personerSomSkalOppdateres);
      return {...state, ...oppdatering };
    }
    case PersonNavnActionTypes.HENT_PERSON_NAVN_HENTET: {
      const navnHentet = action.data;
      const personerSomSkalOppdateres: { [fnr: string]: PersonData } = navnHentet.map((personNavn: PersonNavn) => {
        return {
          [personNavn.fnr]: {
            ...state[personNavn.fnr],
            navn: personNavn.navn
          }
        };
      });
      const oppdatering = tilPersonDataMap(personerSomSkalOppdateres);
      return {...state, ...oppdatering };
    }
    case PersonregisterActionTypes.TOGGLE_PERSON_MARKERT: {
      const personSomSkalToggles = action.fnr;
      const erMarkert = state[personSomSkalToggles].markert;
      return {
        ...state,
        [personSomSkalToggles]: {
          ...state[personSomSkalToggles],
          markert: !erMarkert
        }
      };
    }
    case PersonregisterActionTypes.TOGGLE_VELG_ALLE: {
      const skalMarkeres = action.kryssetAv;
      const allePersoner = Object.keys(state).map((fnr) => {
        return {
          [fnr]: {
            ...state[fnr],
            markert: skalMarkeres
          }
        };
      });
      const oppdatering = tilPersonDataMap(allePersoner);
      return {...state, ...oppdatering };
    }
  }
  return state;
};

export default personregisterReducer;
