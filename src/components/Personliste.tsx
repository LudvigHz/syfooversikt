import React from 'react';
import Personrad from './Personrad';
import Sorteringsrad from './Sorteringsrad';
import { PersonData, PersonregisterState } from '../store/personregister/personregisterTypes';
import { Veileder } from '../store/veiledere/veiledereTypes';

interface PersonlisteProps {
  personregister: PersonregisterState;
  checkboxHandler: (fnr: string ) => void;
  markertePersoner: string[];
  alleMarkert: boolean;
  checkAllHandler: (checked: boolean) => void;
  veiledere: Veileder[];
}

const erMarkert = (markertePersoner: string[], fnr: string) => {
  return markertePersoner.findIndex((markertPerson: string) => {
    return markertPerson === fnr;
  }) !== -1;
};

const veilederForPerson = ((veiledere: Veileder[], person: PersonData) => {
  if (person.tildeltVeilederIdent) {
    return veiledere.find((veileder) => {
      return veileder.ident === person.tildeltVeilederIdent;
    });
  }
  return undefined;
});

const Personliste = (props: PersonlisteProps) => {
  const {
    personregister,
    checkboxHandler,
    markertePersoner,
    checkAllHandler,
    alleMarkert,
    veiledere,
  } = props;

  const fnrListe = Object.keys(personregister);

  return (<section>
    <Sorteringsrad checked={alleMarkert} checkAllHandler={checkAllHandler} />
    {
      fnrListe.map((fnr: string, idx: number) => {
        return (<Personrad
          key={idx}
          fnr={fnr}
          personData={personregister[fnr]}
          checkboxHandler={checkboxHandler}
          kryssAv={erMarkert(markertePersoner, fnr)}
          veileder={veilederForPerson(veiledere, personregister[fnr])}
        />);
      })
    }
  </section>);
};

export default Personliste;
