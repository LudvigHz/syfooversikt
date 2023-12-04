import {
  AktivitetskravStatus,
  MoteStatusType,
  PersonOversiktStatusDTO,
} from '../../src/api/types/personoversiktTypes';

export const personoversiktEnhetMock: PersonOversiktStatusDTO[] = [
  {
    fnr: '01999911111',
    navn: 'Korrupt Heis',
    enhet: '0316',
    veilederIdent: null,
    motebehovUbehandlet: null,
    aktivitetskrav: AktivitetskravStatus.OPPFYLT,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: null,
    oppfolgingsplanLPSBistandUbehandlet: true,
    dialogmotekandidat: undefined,
    motestatus: undefined,
    dialogmotesvarUbehandlet: false,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
  },
  {
    fnr: '99999922222',
    navn: 'Korrupt Bordsen',
    enhet: '0316',
    veilederIdent: null,
    motebehovUbehandlet: true,
    aktivitetskrav: AktivitetskravStatus.UNNTAK,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: undefined,
    motestatus: undefined,
    dialogmotesvarUbehandlet: false,
    behandlerdialogUbehandlet: true,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
  },
  {
    fnr: '99999922220',
    navn: 'Ola Forhåndsvarselsen',
    enhet: '0316',
    veilederIdent: null,
    motebehovUbehandlet: true,
    aktivitetskrav: AktivitetskravStatus.FORHANDSVARSEL,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: undefined,
    motestatus: undefined,
    dialogmotesvarUbehandlet: false,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: true,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
  },
  {
    fnr: '99999911120',
    navn: 'Hans Huskelappen',
    enhet: '0316',
    veilederIdent: null,
    motebehovUbehandlet: true,
    aktivitetskrav: null,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: null,
    aktivitetskravVurderingFrist: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: undefined,
    motestatus: undefined,
    dialogmotesvarUbehandlet: false,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: true,
    trengerOppfolgingFrist: new Date('2024-01-01'),
    behandlerBerOmBistandUbehandlet: false,
  },
  {
    fnr: '18049911120',
    navn: 'Bent Behandlerbistandsen',
    enhet: '0316',
    veilederIdent: null,
    motebehovUbehandlet: true,
    aktivitetskrav: null,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: null,
    aktivitetskravVurderingFrist: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: undefined,
    motestatus: undefined,
    dialogmotesvarUbehandlet: false,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: true,
  },
  {
    fnr: '59999933333',
    navn: 'Korrupt Bolle',
    enhet: '0316',
    veilederIdent: 'Z101010',
    motebehovUbehandlet: true,
    aktivitetskrav: AktivitetskravStatus.AVVENT,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: new Date('2022-12-10'),
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: undefined,
    motestatus: undefined,
    dialogmotesvarUbehandlet: false,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-10-25'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654321',
          virksomhetsnavn: 'NAV Security',
        },
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
        {
          virksomhetsnummer: '987654320',
          virksomhetsnavn: 'Annen Virksomhet AS',
        },
        {
          virksomhetsnummer: '987654328',
          virksomhetsnavn: 'Bolle Og Brus',
        },
      ],
    },
  },
  {
    fnr: '99999944444',
    navn: 'Stol Bordsen',
    enhet: '0316',
    veilederIdent: 'Z101010',
    motebehovUbehandlet: true,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: undefined,
    motestatus: undefined,
    aktivitetskrav: AktivitetskravStatus.AVVENT,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: new Date('2022-12-10'),
    dialogmotesvarUbehandlet: false,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-08-03'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654321',
          virksomhetsnavn: 'NAV Security',
        },
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
        {
          virksomhetsnummer: '987654324',
          virksomhetsnavn: 'Kompani & Co. AS',
        },
      ],
    },
  },
  {
    fnr: '18999955555',
    navn: 'Bord Stolesen',
    enhet: '0316',
    veilederIdent: null,
    motebehovUbehandlet: true,
    oppfolgingsplanLPSBistandUbehandlet: true,
    dialogmotekandidat: undefined,
    motestatus: undefined,
    dialogmotesvarUbehandlet: false,
    aktivitetskrav: AktivitetskravStatus.AVVENT,
    aktivitetskravActive: true,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: new Date('2023-04-01'),
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-08-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
        {
          virksomhetsnummer: '987654321',
          virksomhetsnavn: 'NAV Security',
        },
      ],
    },
  },
  {
    fnr: '99999966666',
    navn: 'Gulv Heisen',
    enhet: '0316',
    veilederIdent: 'M987654',
    motebehovUbehandlet: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: false,
    motestatus: MoteStatusType.NYTT_TID_STED,
    dialogmotesvarUbehandlet: false,
    aktivitetskrav: AktivitetskravStatus.AVVENT,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('1984-01-19T10:12:05.913826'),
    aktivitetskravVurderingFrist: new Date('2023-12-10'),
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-01-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
      ],
    },
  },
  {
    fnr: '99999955556',
    navn: 'Skjerm Visen',
    enhet: '0316',
    veilederIdent: null,
    motebehovUbehandlet: true,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: false,
    motestatus: MoteStatusType.INNKALT,
    dialogmotesvarUbehandlet: true,
    aktivitetskrav: AktivitetskravStatus.NY,
    aktivitetskravActive: true,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: null,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-01-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
      ],
    },
  },
  {
    fnr: '99999966667',
    navn: 'Stol Sengestad',
    enhet: '0316',
    veilederIdent: 'M987654',
    motebehovUbehandlet: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: true,
    motestatus: MoteStatusType.AVLYST,
    dialogmotesvarUbehandlet: false,
    aktivitetskrav: AktivitetskravStatus.STANS,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: null,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-01-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
      ],
    },
  },
  {
    fnr: '99999966668',
    navn: 'Bord Plantesen',
    enhet: '0316',
    veilederIdent: 'M987654',
    motebehovUbehandlet: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: true,
    motestatus: undefined,
    dialogmotesvarUbehandlet: false,
    aktivitetskrav: AktivitetskravStatus.AVVENT,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: new Date('2022-12-10'),
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-05-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
      ],
    },
  },
  {
    fnr: '99999966669',
    navn: 'Lun Gange',
    enhet: '0316',
    veilederIdent: 'Wienerbrød',
    motebehovUbehandlet: null,
    oppfolgingsplanLPSBistandUbehandlet: true,
    dialogmotekandidat: false,
    motestatus: MoteStatusType.FERDIGSTILT,
    dialogmotesvarUbehandlet: false,
    aktivitetskrav: AktivitetskravStatus.UNNTAK,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: null,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-10-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
        {
          virksomhetsnummer: '987654321',
          virksomhetsnavn: 'NAV Security',
        },
      ],
    },
  },
  {
    fnr: '99999966670',
    navn: 'Vissen Plass',
    enhet: '0316',
    veilederIdent: 'Wienerbrød',
    motebehovUbehandlet: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: false,
    motestatus: undefined,
    dialogmotesvarUbehandlet: false,
    aktivitetskrav: AktivitetskravStatus.AUTOMATISK_OPPFYLT,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: null,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-01-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
      ],
    },
  },
  {
    fnr: '99999966671',
    navn: 'Mør Benk',
    enhet: '0316',
    veilederIdent: 'Z999991',
    motebehovUbehandlet: null,
    oppfolgingsplanLPSBistandUbehandlet: true,
    dialogmotekandidat: undefined,
    motestatus: undefined,
    dialogmotesvarUbehandlet: false,
    aktivitetskrav: AktivitetskravStatus.NY,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: null,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-01-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
      ],
    },
  },
  {
    fnr: '99999966672',
    navn: 'Grønn Due',
    enhet: '0316',
    veilederIdent: 'Z999991',
    motebehovUbehandlet: null,
    oppfolgingsplanLPSBistandUbehandlet: true,
    dialogmotekandidat: undefined,
    motestatus: undefined,
    dialogmotesvarUbehandlet: false,
    latestOppfolgingstilfelle: undefined,
    aktivitetskrav: AktivitetskravStatus.OPPFYLT,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: null,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
  },
  {
    fnr: '99999966673',
    navn: 'Kandidat Endringsen',
    enhet: '0316',
    veilederIdent: 'Z101010',
    motebehovUbehandlet: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: false,
    motestatus: MoteStatusType.NYTT_TID_STED,
    dialogmotesvarUbehandlet: false,
    aktivitetskrav: AktivitetskravStatus.IKKE_OPPFYLT,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-10-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: null,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-01-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
      ],
    },
  },
  {
    fnr: '99999966674',
    navn: 'Kandidat Innkaltsen',
    enhet: '0316',
    veilederIdent: 'Z101010',
    motebehovUbehandlet: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: false,
    motestatus: MoteStatusType.INNKALT,
    dialogmotesvarUbehandlet: false,
    aktivitetskrav: AktivitetskravStatus.NY,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: null,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-01-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
      ],
    },
  },
  {
    fnr: '99999966675',
    navn: 'Kandidat Avlystsen',
    enhet: '0316',
    veilederIdent: 'Z101010',
    motebehovUbehandlet: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: true,
    motestatus: MoteStatusType.AVLYST,
    dialogmotesvarUbehandlet: false,
    aktivitetskrav: AktivitetskravStatus.AVVENT,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2020-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: new Date('2022-12-10'),
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-01-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
      ],
    },
  },
  {
    fnr: '99999966676',
    navn: 'Kandidat Kandidatsen',
    enhet: '0316',
    veilederIdent: 'Z101010',
    motebehovUbehandlet: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: true,
    motestatus: undefined,
    aktivitetskrav: AktivitetskravStatus.AVVENT,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: new Date('2022-12-20'),
    dialogmotesvarUbehandlet: false,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-01-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
      ],
    },
  },
  {
    fnr: '99999966677',
    navn: 'Ikke Viseson',
    enhet: '0316',
    veilederIdent: 'Z101010',
    motebehovUbehandlet: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: false,
    motestatus: MoteStatusType.FERDIGSTILT,
    aktivitetskrav: AktivitetskravStatus.UNNTAK,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: null,
    dialogmotesvarUbehandlet: false,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-01-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
      ],
    },
  },
  {
    fnr: '99999966678',
    navn: 'Ikke Visesen',
    enhet: '0316',
    veilederIdent: 'Z101010',
    motebehovUbehandlet: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: false,
    motestatus: undefined,
    aktivitetskrav: AktivitetskravStatus.UNNTAK,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: null,
    dialogmotesvarUbehandlet: false,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-01-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
      ],
    },
  },
  {
    fnr: '99999966678',
    navn: 'Ikke Viseby',
    enhet: '0316',
    veilederIdent: 'Z101010',
    motebehovUbehandlet: null,
    oppfolgingsplanLPSBistandUbehandlet: null,
    dialogmotekandidat: undefined,
    motestatus: undefined,
    aktivitetskrav: AktivitetskravStatus.UNNTAK,
    aktivitetskravActive: false,
    aktivitetskravSistVurdert: new Date('2022-12-01T10:12:05.913826'),
    aktivitetskravVurderingFrist: null,
    dialogmotesvarUbehandlet: false,
    behandlerdialogUbehandlet: false,
    aktivitetskravVurderStansUbehandlet: false,
    trengerOppfolging: false,
    trengerOppfolgingFrist: null,
    behandlerBerOmBistandUbehandlet: false,
    latestOppfolgingstilfelle: {
      oppfolgingstilfelleStart: new Date('2022-01-01'),
      oppfolgingstilfelleEnd: new Date('2022-12-31'),
      virksomhetList: [
        {
          virksomhetsnummer: '987654322',
          virksomhetsnavn: 'NAV Investments',
        },
      ],
    },
  },
];
