import {DrawerActions} from '@react-navigation/native';
import React from 'react';
import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import {ScrollView, TouchableHighlight} from 'react-native-gesture-handler';
import {SafeAreaView} from 'react-native-safe-area-context';
import Icon from 'react-native-vector-icons/FontAwesome';
import Tweet from './Tweet';

export default ({navigation}) => {
  return (
    <>
      <SafeAreaView style={styles.body}>
        <View style={styles.container}>
          <TouchableHighlight onPress={() => navigation.navigate('Main')}>
            <Image
              style={{
                borderRadius: 100,
                width: 30,
                height: 30,
              }}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
              }}
            />
          </TouchableHighlight>
          <Icon name="twitter" size={25} color="#1DA1F2" />
          <Icon name="star" size={25} color="#1DA1F2" />
        </View>
      </SafeAreaView>
      <ScrollView
        showsHorizontalScrollIndicator={false}
        horizontal={true}
        style={{
          flex: 1,
          padding: 10,
        }}>
        <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
              }}
            />
            <Text style={styles.arroba}>JosieLue</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
              }}
            />
            <Text style={styles.arroba}>JosieLue</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
              }}
            />
            <Text style={styles.arroba}>JosieLue</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
              }}
            />
            <Text style={styles.arroba}>JosieLue</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
              }}
            />
            <Text style={styles.arroba}>JosieLue</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
              }}
            />
            <Text style={styles.arroba}>JosieLue</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
              }}
            />
            <Text style={styles.arroba}>JosieLue</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
              }}
            />
            <Text style={styles.arroba}>JosieLue</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
              }}
            />
            <Text style={styles.arroba}>JosieLue</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
              }}
            />
            <Text style={styles.arroba}>JosieLue</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
              }}
            />
            <Text style={styles.arroba}>JosieLue</Text>
          </View>
        </View>
        <View style={{justifyContent: 'space-evenly', flexDirection: 'row'}}>
          <View>
            <Image
              style={styles.icon}
              source={{
                uri:
                  'https://s3.amazonaws.com/uifaces/faces/twitter/supjoey/128.jpg',
              }}
            />
            <Text style={styles.arroba}>JosieLue</Text>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  body: {
    flex: 1,
    width: '100%',
    backgroundColor: '#15202B',
  },
  icon: {
    borderRadius: 100,
    width: 55,
    height: 55,
    marginRight: 20,
    borderColor: '#fefefe',
    borderWidth: 3,
  },
  arroba: {
    color: '#a8a4a3',
    fontSize: 16,
  },
  container: {
    padding: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 20,
    alignItems: 'center',
  },
});
