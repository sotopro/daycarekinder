/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView} from 'react-native';
import {styles} from './styles';
import RootNavigation from './navigation';

function App(): JSX.Element {
  return (
    <SafeAreaView style={styles.safeArea}>
      <RootNavigation />
    </SafeAreaView>
  );
}

export default App;
