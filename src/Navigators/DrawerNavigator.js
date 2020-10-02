import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import {NavigationContainer} from '@react-navigation/native';
import Main from '../Screens/Main';
import Login from '../Screens/Login';

const Drawer = createDrawerNavigator();

export default function () {
  return (
    <Drawer.Navigator
      drawerStyle={{backgroundColor: '#15202B'}}
      initialRouteName="Main">
      <Drawer.Screen name="Login" component={Login} />
      <Drawer.Screen name="Main" component={Main} />
    </Drawer.Navigator>
  );
}
