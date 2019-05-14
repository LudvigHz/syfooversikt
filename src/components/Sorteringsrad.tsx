import React from 'react';
import { Checkbox } from 'nav-frontend-skjema';
import {
  Column,
  Row,
} from 'nav-frontend-grid';

const tekster = {
  velgalle: 'Velg alle',
  navn: 'Navn',
  fodselsnummer: 'Fødselsnummer',
  diskresjonskode: 'Diskresjonskode',
  typer: 'Hendelsestyper',
};

interface SorteringsradProps {
  checkAllHandler: (checked: boolean) => void;
}

const Sorteringsrad = (props: SorteringsradProps) => {
  return (<Row className="sorteringsrad">
    <Column md={'2'}>
      <Checkbox label={tekster.velgalle} onChange={(event) => {props.checkAllHandler(event.target.checked);}} />
    </Column>
    <Column md={'2'}>{tekster.navn}</Column>
    <Column md={'2'}>{tekster.fodselsnummer}</Column>
    <Column md={'2'}>{tekster.diskresjonskode}</Column>
    <Column md={'2'}>{tekster.typer}</Column>
  </Row>);
};

export default Sorteringsrad;
