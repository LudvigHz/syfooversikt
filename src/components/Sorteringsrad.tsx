import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
import {
  Column,
  Row,
} from 'nav-frontend-grid';
import themes from '../styles/themes';
import { SortingType } from '../utils/hendelseFilteringUtils';
import Chevron from 'nav-frontend-chevron';

const tekster = {
  navn: 'Etternavn, Fornavn',
  fodselsnummer: 'Fødselsnummer',
  ident: 'NAV-ident',
  veileder: 'Veileder',
  overskriftBruker: 'Bruker',
  overskriftVeileder: 'Veileder',
  virksomhet: 'Virksomhet',
};
const RowStyled = styled(Row)`
  margin-left: 0px !important;
  margin-right: 0px !important;
`;

export const OverskriftRad = styled(RowStyled)`
  display: flex;
  align-items: center;
  /* padding: .5rem 0; */
  border-top: 1px solid ${themes.color.navGra20};
  border-bottom: 1px solid ${themes.color.navGra20};
  font-weight: 700;
`;

const IngressRad = styled(RowStyled)`
  display: flex;
  align-items: center;
  border-bottom: 1px solid ${themes.color.navGra40};
`;

export const GrayChevron = styled(Chevron)`
  margin-left: 0.25em;
  color: #3E3832;
`;

export const SortingButton = styled.p`
  cursor: pointer;
  color: ${themes.color.navBla};
  user-select: none;
`;

export const FlexColumn = styled(Column)`
  margin: 0px;
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  /* overflow: hidden; */
  @media (max-width: 960px) {
    ${GrayChevron} {
      display: none;
    }
  }
`;

interface ColumnItem {
  sortingText: string;
  extraText: any;
  sortingTypeAsc: SortingType;
  sortingTypeDesc: SortingType;
  xs: string;
}

interface SortingRowProps {
  onSortClick(type: SortingType): void;
}

const Sorteringsrad = ({ onSortClick }: SortingRowProps) => {
  const [ currentSortingType, setCurrentSortingType ] = useState<SortingType>('NONE');

  const onSortingButtonClicked = (sortingTypeAsc: SortingType, sortingTypeDesc: SortingType) => {
    const nextSortingType: SortingType = currentSortingType === sortingTypeAsc
              ? sortingTypeDesc
              : sortingTypeAsc;
    setCurrentSortingType(nextSortingType);
    onSortClick(nextSortingType);
  };

  const chevronType = (sortingTypeAsc: SortingType) => {
    if (currentSortingType === sortingTypeAsc) {
         return 'opp';
    }
    return 'ned';
  };

  const columns: ColumnItem[] = [
    {
      sortingText: 'Etternavn',
      extraText: <p>, Fornavn</p>,
      sortingTypeAsc: 'NAME_ASC',
      sortingTypeDesc: 'NAME_DESC',
      xs: '3',
    },
    {
      sortingText: tekster.fodselsnummer,
      extraText: null,
      sortingTypeAsc: 'FNR_ASC',
      sortingTypeDesc: 'FNR_DESC',
      xs: '2',
    },
    {
      sortingText: tekster.virksomhet,
      extraText: null,
      sortingTypeAsc: 'COMPANY_ASC',
      sortingTypeDesc: 'COMPANY_DESC',
      xs: '2',
    },
    {
      sortingText: tekster.veileder,
      extraText: null,
      sortingTypeAsc: 'VEILEDER_ASC',
      sortingTypeDesc: 'VEILEDER_DESC',
      xs: '2',
    },
  ];

  return (
    <>
      <IngressRad>
        <Column className="emptyColumn" xs={'1'} />
        {columns.map((col, index) => {
          return (
              <FlexColumn key={index} xs={col.xs}>
                <SortingButton onClick={() => onSortingButtonClicked(col.sortingTypeAsc, col.sortingTypeDesc)}>
                  <strong>{col.sortingText}</strong>
                </SortingButton>
                {col.extraText}
                <GrayChevron type={chevronType(col.sortingTypeAsc)}/>
              </FlexColumn>
          );
        })}
        <Column xs={'2'} />
      </IngressRad>
    </>
  );
};

export default Sorteringsrad;
