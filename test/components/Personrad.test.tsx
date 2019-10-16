import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import { shallow } from 'enzyme';
import React from 'react';
import { Column } from 'nav-frontend-grid';
import Personrad, { PersonRad } from '../../src/components/Personrad';
import { lenkeTilModiaEnkeltperson } from '../../src/utils/lenkeUtil';
import { skjermingskode, veilederEllerNull, companyNamesFromPersonData } from '../../src/utils/personDataUtil';
import {
  testdata,
  veiledere,
} from '../data/fellesTestdata';
import { PersonData } from '../../src/store/personregister/personregisterTypes';

chai.use(chaiEnzyme());
const expect = chai.expect;

describe('Personrad', () => {
  const fnr = testdata.fnr1;
  const personData = { navn: testdata.navn1, harMotebehovUbehandlet: false, harMoteplanleggerUbehandlet: false,
    skjermingskode: testdata.skjermingskode.ingen, markert: false } as PersonData;
  // tslint:disable-next-line:no-empty
  const checkboxHandler = () => {};
  const component = shallow(<Personrad
    index={1}
    fnr={fnr}
    veilederComponent={`${veiledere[0].etternavn}, ${veiledere[0].fornavn}`}
    personData={personData}
    checkboxHandler={checkboxHandler}
    kryssAv={false}
  />);

  it('Skal inneholde PersonRad', () => {
    expect(component.find(PersonRad)).to.have.length(1);
  });

  it('Skal rendre Column-komponenter med riktig navn, fodselsnummer og skjermingskode', () => {
    expect(component.contains(<Column xs={'2'}>{lenkeTilModiaEnkeltperson(personData.navn, fnr)}</Column>)).to.equal(true);
    expect(component.contains(<Column xs={'2'}>{fnr}</Column>)).to.equal(true);
    expect(component.contains(<Column xs={'2'}>{companyNamesFromPersonData(personData)}</Column>)).to.equal(true);
    // expect(component.contains(<Column xs={'2'}>{veilederEllerNull(veiledere[0])}</Column>)).to.equal(true);
    expect(component.contains(<Column xs={'1'}>{skjermingskode(personData)}</Column>)).to.equal(true);
  });
});
