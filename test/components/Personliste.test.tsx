import React from 'react';
import { Provider } from 'react-redux';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { mount } from 'enzyme';
import { before } from 'mocha';
import Personliste, { VeilederNavn } from '../../src/components/Personliste';
import Sorteringsrad from '../../src/components/Sorteringsrad';
import Personrad from '../../src/components/Personrad';
import {
  enhet,
  modiacontextNyAktivEnhet,
  testdata,
  personregister,
  veiledere,
} from '../data/fellesTestdata';
import { store } from '../../src/store';
import { veiledereHentet } from '../../src/store/veiledere/veiledere_actions';
import { modiaContextPushet } from '../../src/store/modiacontext/modiacontext_actions';

chai.use(chaiEnzyme());
const expect = chai.expect;

store.dispatch(veiledereHentet(enhet.enhetId, veiledere));
store.dispatch(modiaContextPushet(modiacontextNyAktivEnhet));

describe('Personliste', () => {
  const markertePersoner = ['123', '234'];
  // tslint:disable-next-line:no-empty
  const checkboxHandler = () =>  {};
  const component = mount(<Provider store={store}>
    <Personliste
      personregister={personregister}
      checkboxHandler={checkboxHandler}
      markertePersoner={markertePersoner}
      veiledere={veiledere}
      startItem={0}
      endItem={1}
    />
  </Provider>);

  it('Skal rendre Sorteringsrad', () => {
    expect(component.find(Sorteringsrad)).to.have.length(1);
  });

  it('Skal rendre 2 personrader', () => {
    // tslint:disable-next-line: no-console
    expect(component.find(Personrad)).to.have.length(2);
  });
});
