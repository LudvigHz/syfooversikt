import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import Sokeresultat from '../../src/components/Sokeresultat';
import {
  enhet,
  veilederinfo,
  personregister,
  veiledere,
  markertePersoner,
} from '../data/fellesTestdata';
import Toolbar from '../../src/components/toolbar/Toolbar';
import Personliste from '../../src/components/Personliste';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('Sokeresultat', () => {
  // tslint:disable-next-line:no-empty
  const dummyFunksjon = () => {};

  const component = shallow(<Sokeresultat
      aktivEnhet={enhet}
      aktivVeilederinfo={veilederinfo}
      personregister={personregister}
      tildelVeileder={dummyFunksjon}
      veiledere={veiledere}
  />);

  it('Skal inneholde knapperad', () => {
    expect(component.contains( <Toolbar
      aktivVeilederInfo={veilederinfo}
      buttonHandler={dummyFunksjon}
      checkAllHandler={dummyFunksjon}
      veiledere={veiledere}
      markertePersoner={markertePersoner}
    />));
  });
  it('Skal inneholde liste av personer', () => {
    expect(component.find(Personliste)).to.have.length(1);
  });
});
