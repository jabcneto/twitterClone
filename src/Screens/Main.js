import React from 'react';
import {Dimensions, Image, StatusBar, StyleSheet, View} from 'react-native';
import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import Tweet from '../components/Home/Tweet';

export default ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#15202B'} />
      <SafeAreaView style={styles.body}>
        <ScrollView>
          <Header navigation={navigation} />
          <View>
            <Tweet
              nome={'Josie Lueilwitz'}
              arroba={'@JosieLue'}
              tempo={'1hr'}
            />
            <Tweet
              nome={'Josie Lueilwitz'}
              arroba={'@JosieLue'}
              tempo={'1hr'}
              imgUrl="http://lorempixel.com/640/480/cats"
            />
            <Tweet
              nome={'Josie Lueilwitz'}
              arroba={'@JosieLue'}
              tempo={'1hr'}
            />
            <Tweet
              nome={'Josie Lueilwitz'}
              arroba={'@JosieLue'}
              tempo={'1hr'}
              imgUrl="http://lorempixel.com/640/480/cats"
            />
            <Tweet
              nome={'Josie Lueilwitz'}
              arroba={'@JosieLue'}
              tempo={'1hr'}
            />
            <Tweet
              nome={'Josie Lueilwitz'}
              arroba={'@JosieLue'}
              tempo={'1hr'}
              imgUrl="http://lorempixel.com/640/480/abstract"
            />
          </View>
        </ScrollView>
        <Footer />
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: '#15202B',
    justifyContent: 'center',
    alignItems: 'center',
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
