import { expect } from 'chai';
import { veilederArbeidstakerActionTypes } from '../../../src/store/veilederArbeidstaker/veilederArbeidstaker_actions';
import {
  call,
  put } from 'redux-saga/effects';
import { pushBrukerArbeidstakerSaga } from '../../../src/store/veilederArbeidstaker/veilederArbeidstakerSagas';
import { fullNaisUrlDefault } from '../../../src/utils/miljoUtil';
import { post } from '../../../src/api';
import { HOST_NAMES } from '../../../src/konstanter';

describe('veilederArbeidstakerSagas', () => {
  describe('fordel liste av brukere til en veileder', () => {
    const payload = [{
      veilederIdent: 'Z999999',
      fnr: '123456789',
      enhet: '0001',
    }];
    const forespurtAction  = {
      type: veilederArbeidstakerActionTypes.PUSH_VEILEDERARBEIDSTAKER_FORESPURT,
      data: payload};
    const generator = pushBrukerArbeidstakerSaga(forespurtAction);
    const url = '/api/v1/persontildeling/registrer';

    it(`dispatch ${veilederArbeidstakerActionTypes.PUSH_VEILEDERARBEIDSTAKER_PUSHER}`, () => {
      const nesteAction = put({
        type: veilederArbeidstakerActionTypes.PUSH_VEILEDERARBEIDSTAKER_PUSHER});
      expect(generator.next().value).to.deep.equal(nesteAction);
    });

    it(`kall ${url}`, () => {
      const nesteKall = call(post, url, { tilknytninger: forespurtAction.data });
      expect(generator.next().value).to.deep.equal(nesteKall);
    });

    it(`dispatch ${veilederArbeidstakerActionTypes.PUSH_VEILEDERARBEIDSTAKER_PUSHET}`, () => {
      const nesteAction = put({
        type: veilederArbeidstakerActionTypes.PUSH_VEILEDERARBEIDSTAKER_PUSHET,
        data: payload,
      });
      expect(generator.next().value).to.deep.equal(nesteAction);
    });
  });
});
