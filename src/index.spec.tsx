import {render} from '@testing-library/react-native';
import {Text} from 'react-native';

describe('', () => {
  it('', () => {
    const {toJSON} = render(<Text>abc</Text>);
    expect(toJSON()).toMatchSnapshot();
  });
});
