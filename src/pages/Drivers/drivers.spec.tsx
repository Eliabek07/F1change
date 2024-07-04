import React from 'react';
import {render} from '@testing-library/react-native';
import Drivers from '.';
import {ThemeProvider} from '@emotion/react';
import {color} from '../../theme/colors';
import {fonts} from '../../theme/fonts';
import api from '../../service/api';

jest.mock('react-native-vector-icons/MaterialIcons', () => 'Icon');
jest.mock('@react-navigation/native', () => ({
  useNavigation: () => ({
    goBack: jest.fn(),
  }),
}));
jest.mock('react-native-gesture-handler', () => {});
jest.mock('../../service/api');
let axiosMocked: jest.Mocked<typeof api>;

describe('Testing Typography component', () => {
  beforeEach(() => {
    axiosMocked = api as jest.Mocked<typeof api>;
  });

  afterEach(() => {
    axiosMocked.get.mockClear();
  });
  it('Shoud render Typography', () => {
    const {toJSON} = render(
      <ThemeProvider
        theme={{
          color: color,
          fonts: fonts,
        }}>
        <Drivers />,
      </ThemeProvider>,
    );
    expect(toJSON()).toMatchSnapshot();
  });
});
