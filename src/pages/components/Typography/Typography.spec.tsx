import React from 'react';
import {render} from '@testing-library/react-native';
import Typography from '.';

describe('Testing Typography component', () => {
  it('Shoud render Typography', () => {
    const {toJSON, getByText} = render(
      <Typography variant="14_bold" color="alert_error_200">
        Testando Typography
      </Typography>,
    );
    expect(getByText(/Testando Typography/i)).toBeTruthy();
    expect(toJSON()).toMatchSnapshot();
  });
  it('Shoud render with empty values', () => {
    const {toJSON} = render(<Typography />);
    expect(toJSON()).toMatchSnapshot();
  });
});
