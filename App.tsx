import React from 'react';

import Routes from './src/routes';
import {ThemeProvider} from '@emotion/react';
import {color} from './src/theme/colors';
import {fonts} from './src/theme/fonts';

function App(): React.JSX.Element {
  return (
    <ThemeProvider
      theme={{
        color,
        fonts,
      }}>
      <Routes />
    </ThemeProvider>
  );
}

export default App;
