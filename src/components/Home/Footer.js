import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {
  return (
    <>
      <View style={styles.container}>
        <View style={styles.grupoIcon}>
          <Icon name="home" size={20} color="#a8a4a3" />
          <Icon name="search" size={20} color="#a8a4a3" />
          <Icon name="bell" size={20} color="#a8a4a3" />
          <Icon name="envelope" size={20} color="#a8a4a3" />
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
    justifyContent: 'space-between',
  },
});
