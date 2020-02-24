import * as React from 'react';
import { ToolbarProps } from '../components/toolbar/Toolbar';
import { Veileder } from '../store/veiledere/veiledereTypes';
import { sortVeiledereAlphabetically } from './veiledereUtils';

export const assignUsersToSelectedVeileder = (({ buttonHandler, checkAllHandler }: ToolbarProps, selectedVeilederIdent: string) => {
  if (selectedVeilederIdent && selectedVeilederIdent.length > 0) {
    buttonHandler(selectedVeilederIdent);
  }
  checkAllHandler(false);
});

export const filterVeiledereOnInput = ((veiledere: Veileder[], lowerCaseInput: string) => {
  const filteredVeiledere = veiledere.filter((veileder: Veileder) =>
    lowerCaseInput === ''
    || veileder.ident.toLowerCase().includes(lowerCaseInput)
    || veileder.fornavn.toLowerCase().includes(lowerCaseInput)
    || veileder.etternavn.toLowerCase().includes(lowerCaseInput));

  if (isInputGiven(lowerCaseInput)) {
    return sortVeiledereAlphabetically(filteredVeiledere);
  }
  return filteredVeiledere;
});

export const hasNoCheckedPersoner = ((personer: string[]) => {
  return personer.length === 0;
});

export const isInputGiven = (input: string) => {
  return input.length > 0;
};
