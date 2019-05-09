import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import Personliste from '../../src/components/Personliste';
import Sorteringsrad from '../../src/components/Sorteringsrad';
import Personrad from '../../src/components/Personrad';
import * as testdata from '../../Mock/Data/fellesTestdata.json';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('Personliste', () => {
  const personregister = {
    [testdata.fnr1]: { navn: testdata.navn1, harSvartPaaMotebehov: true, harMote: false, skjermingskode: testdata.skjermingskode.ingen, markert: false },
    [testdata.fnr2]: { navn: testdata.navn2, harSvartPaaMotebehov: false, harMote: false, skjermingskode: testdata.skjermingskode.egenAnsatt, markert: false },
  };
  const fnrListe = [testdata.fnr1, testdata.fnr2];
  const component = shallow(<Personliste fnrListe={fnrListe} personregister={personregister} />);

  it('Skal rendre Sorteringsrad', () => {
    expect(component.contains(<Sorteringsrad/>)).to.equal(true);
  });

  it('Skal rendre Personrad-komponenter med riktig persondata', () => {
    expect(component.contains(<Personrad fnr={testdata.fnr1} personData={personregister[testdata.fnr1]} />)).to.equal(true);
    expect(component.contains(<Personrad fnr={testdata.fnr2} personData={personregister[testdata.fnr2]} />)).to.equal(true);
  });
});
