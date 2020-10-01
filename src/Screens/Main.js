import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {
  ScrollView,
  TouchableHighlight,
  TouchableOpacity,
} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import {Dimensions} from 'react-native';
import Footer from '../components/Home/Footer';
import Header from '../components/Home/Header';
import Tweet from '../components/Home/Tweet';
import Icon from 'react-native-vector-icons/FontAwesome';

export default ({navigation}) => {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor={'#15202B'} />
      <SafeAreaView style={styles.body}>
        <ScrollView>
          <Header navigation={navigation} />
          <View style={{width: Dimensions.get('window').width}}>
            <Tweet
              nome={'Josie Lueilwitz'}
              arroba={'@JosieLue'}
              tempo={'1hr'}
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
            />
            <Tweet
              nome={'Josie Lueilwitz'}
              arroba={'@JosieLue'}
              tempo={'1hr'}
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
