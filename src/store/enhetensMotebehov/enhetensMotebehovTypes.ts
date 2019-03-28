export interface MotebehovSvar {
  fnr: string;
  skjermetEllerEgenAnsatt: string;
}

export interface EnhetensMotebehov {
  motebehovSvar: MotebehovSvar[];
}

export const enum EnhetensMotebehovActionTypes {
  HENT_ENHETENS_MOTEBEHOV_FORESPURT = 'HENT_ENHETENS_MOTEBEHOV_FORESPURT',
  HENT_ENHETENS_MOTEBEHOV_HENTER = 'HENT_ENHETENS_MOTEBEHOV_HENTER',
  HENT_ENHETENS_MOTEBEHOV_FEILET = 'HENT_ENHETENS_MOTEBEHOV_FEILET',
  HENT_ENHETENS_MOTEBEHOV_HENTET = 'HENT_ENHETENS_MOTEBEHOV_HENTET',
}

export interface EnhetensMotebehovState {
  readonly hentet: boolean;
  readonly henter: boolean;
  readonly hentingFeilet: boolean;
  readonly data: MotebehovSvar[];
}
