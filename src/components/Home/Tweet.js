import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default ({nome, arroba, tempo}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerNome}>
        <Image
          style={styles.logo}
          source={{
            uri:
              'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
          }}
        />
        <View style={{}}>
          <View>
            <View>
              <View style={{flexDirection: 'row'}}>
                <Text style={styles.nome}>{nome}</Text>
                <Text style={styles.arroba}>
                  {arroba} · {tempo}
                </Text>
              </View>
              <Text style={styles.tweet}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus tellus odio, fringilla eu leo at, feugiat eleifend
                eros.
              </Text>
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Icon
              name="comment"
              size={17}
              color="#a8a4a3"
              style={{margin: 10}}
            />
            <Icon
              name="retweet"
              size={17}
              color="#a8a4a3"
              style={{margin: 10}}
            />
            <Icon name="heart" size={17} color="#a8a4a3" style={{margin: 10}} />
            <Icon
              name="share-alt"
              size={17}
              color="#a8a4a3"
              style={{margin: 10}}
            />
          </View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderColor: '#25313B',
    borderWidth: 0.25,
  },
  containerNome: {
    flexDirection: 'row',
  },
  logo: {
    marginRight: 15,
    borderRadius: 100,
    width: 66,
    height: 66,
  },
  nome: {
    color: '#fefefe',
    fontSize: 18,
    justifyContent: 'center',
  },
  arroba: {
    color: '#a8a4a3',
    fontSize: 16,
    justifyContent: 'center',
    marginLeft: 10,
  },
  tweet: {
    color: '#fefefe',
    fontSize: 18,
    margin: 5,
    width: 270,
    textAlign: 'justify',
  },
});
