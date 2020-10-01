/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar, StyleSheet, Text, View} from 'react-native';
import InputLogin from '../components/Login/InputLogin';
import Header from '../components/Login/Header';
import {SafeAreaView} from 'react-native-safe-area-context';
import {ScrollView} from 'react-native-gesture-handler';

import Footer from '../components/Login/Footer';
export default ({navigation}) => {
  return (
    <SafeAreaView style={styles.body}>
      <StatusBar barStyle="light-content" backgroundColor={'#15202B'} />
      <ScrollView>
        <View style={{paddingHorizontal: 20}}>
          <Header />
          <Text style={styles.textLogin}>Log in to Twitter.</Text>
          <InputLogin label={'Phone, email or username'} />
          <InputLogin password label={'Password'} />
          <Text style={styles.textForgot}>Forgot password?</Text>
        </View>
      </ScrollView>
      <Footer navigation={navigation} />
    </SafeAreaView>
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
