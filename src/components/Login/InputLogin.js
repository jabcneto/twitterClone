import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default ({label, password}) => {
  if (password) {
    return (
      <View style={styles.container}>
        <Text style={styles.label}>{label}</Text>
        <View
          style={{
            color: '#fefefe',
            height: 40,
            borderColor: 'gray',
            borderBottomWidth: 1,
            flexDirection: 'row',
          }}>
          <TextInput style={{color: '#fefefe', height: 40, flex: 1}} />
          <Icon style={styles.password} name="eye" size={20} color="#a8a4a3" />
        </View>
      </View>
    );
  }
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <View
        style={{
          color: '#fefefe',
          height: 40,
          borderColor: 'gray',
          borderBottomWidth: 1,
          flexDirection: 'row',
        }}>
        <TextInput style={{color: '#fefefe', height: 40, flex: 1}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  label: {
    color: '#a8a4a3',
    fontSize: 20,
  },
  container: {
    marginVertical: 10,
  },
  password: {
    alignItems: 'center',
    justifyContent: 'center',
  },
});
