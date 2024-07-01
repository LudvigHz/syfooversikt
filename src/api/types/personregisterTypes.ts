import {
  AktivitetskravStatus,
  ArbeidsuforhetvurderingDTO,
  OppfolgingsoppgaveDTO,
  OppfolgingstilfelleDTO,
} from './personoversiktTypes';

export type Skjermingskode = 'INGEN' | 'DISKRESJONSMERKET' | 'EGEN_ANSATT';

export interface PersonData {
  navn: string;
  harMotebehovUbehandlet: boolean;
  harDialogmotesvar: boolean;
  harOppfolgingsplanLPSBistandUbehandlet: boolean;
  skjermingskode: Skjermingskode;
  markert: boolean;
  tildeltEnhetId: string;
  tildeltVeilederIdent: string;
  dialogmotekandidat?: boolean;
  latestOppfolgingstilfelle?: OppfolgingstilfelleDTO;
  aktivitetskrav: AktivitetskravStatus | null;
  aktivitetskravActive: boolean;
  aktivitetskravVurderingFrist: Date | null;
  harBehandlerdialogUbehandlet: boolean;
  harAktivitetskravVurderStansUbehandlet: boolean;
  behandlerBerOmBistandUbehandlet: boolean;
  friskmeldingTilArbeidsformidlingFom: Date | null;
  arbeidsuforhetvurdering: ArbeidsuforhetvurderingDTO | null;
  oppfolgingsoppgave: OppfolgingsoppgaveDTO | null;
}

export interface PersonregisterState {
  [fnr: string]: PersonData;
}

export interface PersonHendelseData {
  fnr: string;
  skjermingskode: Skjermingskode;
}

export interface PersonregisterData {
  fnr: string;
  skjermingskode: Skjermingskode;
}
