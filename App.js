import {NavigationContainer} from '@react-navigation/native';

import React from 'react';
import {StyleSheet} from 'react-native';
import DrawerNavigator from './src/Navigators/DrawerNavigator';

export default () => {
  return (
    <>
      <NavigationContainer>
        <DrawerNavigator />
      </NavigationContainer>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: '#15202B',
  },
  textLogin: {
    color: '#fefefe',
    fontSize: 30,
  },
  textForgot: {
    color: '#a8a4a3',
    fontSize: 15,
    textAlign: 'center',
  },
});
