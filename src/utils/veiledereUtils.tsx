import { Veileder } from '../store/veiledere/veiledereTypes';

export const sortVeiledereAlphabeticallyWithGivenVeilederFirst = (
  veiledere: Veileder[],
  veilederIdentToBeFirst: string
) => {
  const newVeiledere = [...veiledere];
  const veilederToBeFirstAsList = getAndRemoveVeileder(
    newVeiledere,
    veilederIdentToBeFirst
  );
  return veilederToBeFirstAsList.concat(
    sortVeiledereAlphabetically(newVeiledere)
  );
};

export const sortVeiledereAlphabetically = (veiledere: Veileder[]) => {
  return [...veiledere].sort((veileder1, veileder2) => {
    const surname1 = veileder1.etternavn.toLowerCase();
    const surname2 = veileder2.etternavn.toLowerCase();
    const firstname1 = veileder1.fornavn.toLowerCase();
    const firstname2 = veileder2.fornavn.toLowerCase();

    return surname1 === surname2
      ? firstname1.localeCompare(firstname2)
      : surname1.localeCompare(surname2);
  });
};

const getAndRemoveVeileder = (veiledere: Veileder[], ident: string) => {
  const veilederToRemoveIndex = veiledere.findIndex((veileder) => {
    return veileder.ident === ident;
  });

  return veilederToRemoveIndex > 0
    ? veiledere.splice(veilederToRemoveIndex, 1)
    : [];
};
