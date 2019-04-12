import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import { Column } from 'nav-frontend-grid';
import Personrad from '../../src/components/Personrad';
import { lenkeTilModiaEnkeltperson } from '../../src/utils/lenkeUtil';
import { skjermingskode } from '../../src/utils/personDataUtil';
import * as testdata from '../../Mock/Data/fellesTestdata.json';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('Personrad', () => {
  const fnr = testdata.fnr1;
  const personData = { navn: testdata.navn1, harSvartPaaMotebehov: false, skjermingskode: testdata.skjermingskode.ingen, markert: false };
  const component = shallow(<Personrad fnr={fnr} personData={personData} />);

  it('Skal inneholde komponent med "personrad"-klasse', () => {
    expect(component.find('.personrad')).to.have.length(1);
  });

  it('Skal rendre Column-komponenter med riktig navn, fodselsnummer og skjermingskode', () => {
    expect(component.contains(<Column className="personrad__navn" md={'3'}>{personData.navn}</Column>)).to.equal(true);
    expect(component.contains(<Column className="personrad__fnr" md={'3'}>{lenkeTilModiaEnkeltperson(fnr)}</Column>)).to.equal(true);
    expect(component.contains(<Column className="personrad__skjermet" md={'3'}>{skjermingskode(personData)}</Column>)).to.equal(true);
  });
});
