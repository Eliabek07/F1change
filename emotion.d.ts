import '@emotion/react';
import {RootColors} from './src/theme/colors.types';
import {RootFonts} from './src/theme/fonts.types';

declare module '@emotion/react' {
  export interface Theme {
    color: RootColors;
    fonts: RootFonts;
  }
}
