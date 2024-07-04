export interface Primary {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  '950': string;
}

export interface Neutro {
  '50': string;
  '100': string;
  '200': string;
  '300': string;
  '400': string;
  '500': string;
  '600': string;
  '700': string;
  '800': string;
  '900': string;
  '950': string;
}

export interface Alert {
  success: Success;
  info: Info;
  warning: Warning;
  error: Error;
}

export interface Success {
  '200': string;
  '800': string;
}

export interface Info {
  '200': string;
  '800': string;
}

export interface Warning {
  '200': string;
  '800': string;
}

export interface Error {
  '200': string;
  '800': string;
}

export interface Background {
  white: string;
  'off-white': string;
}

export interface RootColors {
  primary: Primary;
  neutro: Neutro;
  alert: Alert;
  background: Background;
}
