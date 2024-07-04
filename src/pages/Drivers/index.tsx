import React, {useEffect, useState} from 'react';
import {FlatList, View, TouchableOpacity} from 'react-native';
import api from '../../service/api';
import {useTheme} from '@emotion/react';
import Typography from '../components/Typography';
import {format, isBefore} from 'date-fns';
import {ptBR} from 'date-fns/locale';
import {Driver, Root} from './types';
import American from '../../assets/iconsNatiolality/american.svg';
import Belgium from '../../assets/iconsNatiolality/belgian.svg';
import British from '../../assets/iconsNatiolality/british.svg';
import French from '../../assets/iconsNatiolality/french.svg';
import Germany from '../../assets/iconsNatiolality/germany.svg';
import Italian from '../../assets/iconsNatiolality/italian.svg';
import New_zealander from '../../assets/iconsNatiolality/new_zealander.svg';
import Spain from '../../assets/iconsNatiolality/spainish.svg';
import Swedish from '../../assets/iconsNatiolality/swedish.svg';
import Thai from '../../assets/iconsNatiolality/thai.svg';
import Dutch from '../../assets/iconsNatiolality/dutch.svg';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import {useNavigation} from '@react-navigation/native';

const Drivers: React.FC = () => {
  const [data, setDate] = useState<Driver[] | []>([]);
  const {color} = useTheme();
  const {goBack} = useNavigation();
  const listDrivers = async () => {
    try {
      const {
        data: {
          MRData: {
            DriverTable: {Drivers: Data = []},
          },
        },
      }: {data: Root} = await api.get('/drivers.json');

      if (Data.length > 0) {
        const sort: Driver[] = Data?.filter(
          list => !isBefore(list.dateOfBirth, '1960-01-01'),
        )
          ?.sort(
            (a: any, b: any) =>
              //@ts-ignore
              new Date(a.dateOfBirth) - new Date(b.dateOfBirth),
          )
          .map(item => ({
            ...item,
            nameIcon: item.nationality.replace(/\s/, '_').toLowerCase(),
          }));
        setDate(sort || []);
      }
    } catch (error) {
      //
    }
  };

  const returnIcon = (nameIcon: string): any => {
    try {
      const nationalities: any = {
        american: <American />,
        belgian: <Belgium />,
        british: <British />,
        french: <French />,
        germany: <Germany />,
        italian: <Italian />,
        new_zealander: <New_zealander />,
        spanish: <Spain />,
        swedish: <Swedish />,
        thai: <Thai />,
        dutch: <Dutch />,
      };
      return nationalities[nameIcon];
    } catch (error) {
      return null;
    }
  };
  // };

  useEffect(() => {
    listDrivers();
  }, []);

  const header = () => {
    return (
      <View style={{padding: 20}}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <View style={{flex: 0.5}}>
            <TouchableOpacity
              onPress={() => {
                goBack();
              }}
              style={{
                width: 40,
                padding: 12,
                borderRadius: 8,
                backgroundColor: color.primary[100],
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <MaterialIcons color={color.primary[950]} name="arrow-back-ios" />
            </TouchableOpacity>
          </View>
          <Typography
            style={{alignSelf: 'center'}}
            variant="14_semi_bold"
            color="neutro_900">
            História
          </Typography>
        </View>
        <View style={{marginTop: 20}}>
          <Typography variant="h5" color="neutro_950">
            História da F1
          </Typography>
          <Typography variant="16_semi_bold" color="neutro_500">
            Conheça os nomes que fizeram história, desde os pioneiros até os
            campeões inesquecíveis.
          </Typography>
        </View>
      </View>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: color.background.white,
      }}>
      {header()}

      <FlatList
        data={data}
        ListHeaderComponent={() => (
          <Typography variant="12_semi_bold" color="neutro_950">
            Pilotos
          </Typography>
        )}
        contentContainerStyle={{
          marginHorizontal: 16,
          gap: 10,
          backgroundColor: color.background.white,
          paddingBottom: 100,
        }}
        keyExtractor={item => item.driverId}
        renderItem={({item}) => (
          <View
            style={{
              borderWidth: 1,
              padding: 12,
              borderColor: color.neutro[200],
              flexDirection: 'row',
              borderRadius: 8,
              gap: 12,
              alignItems: 'center',
            }}>
            {returnIcon(item.nameIcon)}

            <View>
              <Typography variant="16_bold" color="neutro_950">
                {item.givenName} {item.nameIcon}
              </Typography>
              <Typography variant="14_medium" color="neutro_500">
                {format(
                  new Date(item.dateOfBirth),
                  "'Nascido em' dd 'de' MMMM 'de' yyyy",
                  {locale: ptBR},
                )}
              </Typography>
            </View>
          </View>
        )}
      />
    </View>
  );
};

export default Drivers;
