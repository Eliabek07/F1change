export interface H1 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface H2 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface H3 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface H4 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface H5 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface H6 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface N16px {
  bold: Bold;
  semi_bold: SemiBold;
  medium: Medium;
  regular: Regular;
}

export interface Bold {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface SemiBold {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface Medium {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface Regular {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface N14px {
  bold: Bold2;
  semi_bold: SemiBold2;
  medium: Medium2;
  regular: Regular2;
}

export interface Bold2 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface SemiBold2 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface Medium2 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface Regular2 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface N12px {
  bold: Bold3;
  semi_bold: SemiBold3;
  medium: Medium3;
  regular: Regular3;
}

export interface Bold3 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface SemiBold3 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface Medium3 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface Regular3 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface Button {
  large: Large;
  medium: Medium4;
  small: Small;
}

export interface Large {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface Medium4 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface Small {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface Links {
  large: Large2;
  medium: Medium5;
}

export interface Large2 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface Medium5 {
  fontSize: number;
  lineHeight: number;
  fontFamily: string;
}

export interface RootFonts {
  h1: H1;
  h2: H2;
  h3: H3;
  h4: H4;
  h5: H5;
  h6: H6;
  '16px': N16px;
  '14px': N14px;
  '12px': N12px;
  button: Button;
  links: Links;
}
