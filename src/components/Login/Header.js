import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default () => {
  return (
    <>
      <View style={styles.container}>
        <Icon name="arrow-left" size={20} color="#1DA1F2" />
        <View style={styles.grupoIcon}>
          <Icon
            style={{marginHorizontal: 20}}
            name="twitter"
            size={25}
            color="#1DA1F2"
          />
          <Text style={styles.textoHeader}>Sign up</Text>
          <Icon
            style={{marginLeft: 30}}
            name="ellipsis-v"
            size={30}
            color="#1DA1F2"
          />
        </View>
      </View>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingVertical: 5,
  },
  textoHeader: {
    color: '#1DA1F2',
    fontSize: 20,
    marginLeft: 20,
  },
  grupoIcon: {
    alignItems: 'center',
    justifyContent: 'space-around',
    flexDirection: 'row',
  },
});
