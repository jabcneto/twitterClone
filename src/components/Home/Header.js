import {DrawerActions} from '@react-navigation/native';
import React from 'react';
import {StatusBar, StyleSheet, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tweet from './Tweet';

export default ({navigation}) => {
  return (
    <SafeAreaView style={styles.body}>
      <View style={styles.container}>
        <TouchableHighlight onPress={() => navigation.navigate('Main')}>
          <Icon name="bars" size={25} color="#1DA1F2" />
        </TouchableHighlight>
        <Icon name="twitter" size={25} color="#1DA1F2" />
        <Icon name="star" size={25} color="#1DA1F2" />
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: '#15202B',
  },
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
  },
});
