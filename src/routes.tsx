import * as React from 'react';
import {NavigationContainer, NavigationProp} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Home from './pages/Home';
import Drivers from './pages/Drivers';

export type ScreenNames = ['Home', 'Drivers']; // type these manually
export type RootStackParamList = Record<ScreenNames[number], undefined>;
export type StackNavigation = NavigationProp<RootStackParamList>;

const Stack = createStackNavigator<RootStackParamList>();

export default function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="Home"
          component={Home}
        />
        <Stack.Screen
          options={{
            header: () => null,
          }}
          name="Drivers"
          component={Drivers}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}
