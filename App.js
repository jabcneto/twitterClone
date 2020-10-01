import {NavigationContainer} from '@react-navigation/native';
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import Footer from './src/components/Home/Footer';
import Header from './src/components/Login/Header';
import DrawerNavigator from './src/Navigators/DrawerNavigator';
import Navigator from './src/Navigators/DrawerNavigator';

import Login from './src/Screens/Login';
import Main from './src/Screens/Main';

export default () => {
  return (
    <>
      {/* <Login /> */}
      {/* <Main /> */}
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
