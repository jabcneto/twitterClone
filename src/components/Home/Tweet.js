import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';

import Icon from 'react-native-vector-icons/FontAwesome';

export default ({nome, arroba, tempo, imgUrl}) => {
  return (
    <View style={styles.container}>
      <View style={styles.containerNome}>
        <Image
          style={styles.icon}
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
                Phasellus tellus odio, fringilla eu leo at, feugiat
                eleifenderos.
              </Text>
              <Text style={styles.tweet}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Phasellus tellus odio, fringilla eu leo at, feugiat
                eleifenderos.
              </Text>
              {imgUrl ? (
                <Image style={styles.img} source={{uri: imgUrl}} />
              ) : null}
            </View>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="comment"
                size={20}
                color="#a8a4a3"
                style={{margin: 10}}
              />
              <Text
                style={{
                  color: '#fefefe',
                  textAlignVertical: 'center',
                }}>
                32
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Icon
                name="retweet"
                size={20}
                color="#a8a4a3"
                style={{margin: 10}}
              />
              <Text style={{color: '#fefefe', textAlignVertical: 'center'}}>
                32
              </Text>
            </View>

            <View style={{flexDirection: 'row'}}>
              <Icon
                name="heart"
                size={20}
                color="#a8a4a3"
                style={{margin: 10}}
              />
              <Text style={{color: '#fefefe', textAlignVertical: 'center'}}>
                32
              </Text>
            </View>
            <View style={{flexDirection: 'row'}}>
              <Icon
                name="share-alt"
                size={20}
                color="#a8a4a3"
                style={{margin: 10}}
              />
            </View>
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
    borderWidth: 1.45,
  },
  containerNome: {
    flexDirection: 'row',
  },
  icon: {
    marginRight: 15,
    borderRadius: 100,
    width: 55,
    height: 55,
  },
  img: {
    margin: 10,
    marginRight: 15,
    borderRadius: 10,
    width: 270,
    height: 200,
  },
  nome: {
    color: '#fefefe',
    fontSize: 18,
    justifyContent: 'center',
  },
  arroba: {
    color: '#a8a4a3',
    fontSize: 16,
    marginLeft: 10,
  },
  tweet: {
    color: '#fefefe',
    fontSize: 14,
    margin: 5,
    width: 275,
    textAlign: 'justify',
  },
});
