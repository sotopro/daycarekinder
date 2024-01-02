/* eslint-disable react/no-unstable-nested-components */
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Home, Kinder, Nearby} from '../../screens';
import {Header} from '../../components';
import {MainStackParamList} from '../types';
import {ROUTES} from '../constants/routes';

const Stack = createNativeStackNavigator<MainStackParamList>();

const MainNavigation = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerBackTitleVisible: false,
      }}>
      <Stack.Screen
        name={ROUTES.HOME}
        component={Home}
        options={{
          header: () => <Header />,
        }}
      />
      <Stack.Screen
        name={ROUTES.KINDER}
        component={Kinder}
        options={({route}) => ({
          title: route.params.item.title,
        })}
      />
      <Stack.Screen name={ROUTES.NEARBY} component={Nearby} />
    </Stack.Navigator>
  );
};

export default MainNavigation;
