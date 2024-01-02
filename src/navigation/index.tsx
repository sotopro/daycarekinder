import React from 'react';
import {NavigationContainer} from '@react-navigation/native';

import MainNavigation from './main';

const RootNavigation = () => {
  return (
    <NavigationContainer>
      <MainNavigation />
    </NavigationContainer>
  );
};

export default RootNavigation;
