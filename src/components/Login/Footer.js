import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {TouchableHighlight} from 'react-native-gesture-handler';

import Icon from 'react-native-vector-icons/FontAwesome';

export default ({navigation}) => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.grupoIcon}>
          <TouchableHighlight onPress={() => navigation.navigate('Main')}>
            <Text
              style={{
                textAlign: 'center',
                color: '#fefefe',
                backgroundColor: '#1DA1F2',
                padding: 10,
                borderRadius: 20,
                fontSize: 20,
              }}>
              Log in
            </Text>
          </TouchableHighlight>
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.2,
    borderTopColor: '#a8a4a3',
    alignItems: 'center',
    justifyContent: 'space-between',
    flexDirection: 'row',
    padding: 20,
  },
  grupoIcon: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
});
