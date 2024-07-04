import {useTheme} from '@emotion/react';
import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {StatusBar, Text, TouchableOpacity, View} from 'react-native';
import Typography from '../components/Typography';
import {StackNavigation} from '../../routes';
// import { Container } from './styles';

const Home: React.FC = () => {
  const navi = useNavigation<StackNavigation>();
  const {color} = useTheme();

  const returnHeader = () => {
    return (
      <View style={{padding: 16, backgroundColor: color.primary[950]}}>
        {/* <Typography>imagem</Typography> */}
        <Typography variant="h5" color="primary_50">
          Olá, Ana Paula
        </Typography>

        <Typography variant="12_semi_bold" color="background_off_white">
          Próxima corrida
        </Typography>
        <Typography variant="h6" color="background_off_white">
          GP do Bahrein
        </Typography>
        <Typography variant="14_semi_bold" color="background_off_white">
          Data Sáb., 2 de Mar., 12:00
        </Typography>
      </View>
    );
  };

  return (
    <View>
      <StatusBar backgroundColor={color.primary[950]} />
      {returnHeader()}
      <TouchableOpacity
        onPress={() => {
          navi.navigate('Drivers');
        }}>
        <Text style={{color: 'black'}}>
          <Typography color="alert_error_800" variant="14_bold">
            ver pilotos
          </Typography>
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Home;
