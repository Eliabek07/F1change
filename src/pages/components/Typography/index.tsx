import React from 'react';
import {Text, TextStyle} from 'react-native';

import {returnTypeFont} from '../../../utils/font_type';
import {returnTypeColors} from '../../../utils/color_type';

interface Props {
  variant?: keyof typeof returnTypeFont;
  color?: keyof typeof returnTypeColors;
  children?: any;
  style?: TextStyle;
}
function Typography({
  color = 'neutro_700',
  variant = '14_regular',
  children = null,
  style = {},
}: Props) {
  const returnStylingFont = () => {
    return returnTypeFont[variant];
  };
  return (
    <Text
      style={[
        returnStylingFont(),
        {color: returnTypeColors[color] as any},
        style,
      ]}>
      {children}
    </Text>
  );
}

export default Typography;
