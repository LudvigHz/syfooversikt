import React, { ReactElement } from 'react';
import styled from 'styled-components';
import { Column } from 'nav-frontend-grid';
import { Checkbox } from 'nav-frontend-skjema';
import themes from '../styles/themes';
import {
  lenkeTilModiaEnkeltperson,
  lenkeTilModiaEnkeltpersonFnr,
} from '@/utils/lenkeUtil';
import { PersonData } from '@/api/types/personregisterTypes';
import {
  skjermingskode,
  firstCompanyNameFromPersonData,
} from '@/utils/personDataUtil';
import { useAktivBruker } from '@/data/modiacontext/useAktivBruker';

interface PersonradProps {
  fnr: string;
  personData: PersonData;
  checkboxHandler: (fnr: string) => void;
  kryssAv: boolean;
  veilederName: string | React.ReactNode;
  index: number;
}

export const StyledPersonRad = styled.div<{ index: number; selected: boolean }>`
  display: flex;
  align-items: center;
  padding-right: 0.5em;
  margin-bottom: 1px;
  ${(props) => {
    if (props.selected) {
      return { backgroundColor: themes.color.navBlaLighten60 };
    }
    return props.index % 2 === 0
      ? { backgroundColor: 'white' }
      : { backgroundColor: themes.color.navLysGra };
  }};
`;

const NoWrapText = styled.p`
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`;

const VelgBoks = styled(Checkbox)`
  margin-left: 0.5em;
  padding-bottom: 2em;
`;

export const Personrad = (props: PersonradProps): ReactElement => {
  const {
    fnr,
    checkboxHandler,
    personData,
    kryssAv,
    veilederName,
    index,
  } = props;

  const aktivBruker = useAktivBruker();

  const onClick = () => {
    aktivBruker.mutate(fnr);
  };

  return (
    <StyledPersonRad index={index} selected={kryssAv}>
      <Column xs={'1'}>
        <VelgBoks
          label={''}
          checked={kryssAv}
          onChange={() => {
            checkboxHandler(fnr);
          }}
        />
      </Column>
      <Column xs={'3'}>{lenkeTilModiaEnkeltperson(personData, onClick)}</Column>
      <Column xs={'2'}>
        {lenkeTilModiaEnkeltpersonFnr(personData, fnr, onClick)}
      </Column>
      <Column xs={'2'}>{firstCompanyNameFromPersonData(personData)}</Column>
      <Column xs={'2'}>{veilederName}</Column>
      <Column xs={'2'}>
        <NoWrapText>{skjermingskode(personData)}</NoWrapText>
      </Column>
    </StyledPersonRad>
  );
};
