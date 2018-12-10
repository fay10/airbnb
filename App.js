import React from 'react';
import { Text, View } from 'react-native';
import  { createBottomTabNavigator } from 'react-navigation';
import * as firebase from 'firebase';
import EStyleSheet from 'react-native-extended-stylesheet';
import { FontAwesome } from '@expo/vector-icons';

import Home from './screens/Home';
import Profile from './screens/Profile'

// Initialize Firebase
const firebaseConfig = {
  apiKey: 'AIzaSyAgOcNvVc0_Y-EPJh4xEmwYvSoTv3GTI4k',
  authDomain: 'fronteers-8bd8c.firebaseapp.com',
  databaseURL: 'https://fronteers-8bd8c.firebaseio.com',
  storageBucket: 'fronteers-8bd8c.appspot.com'
};

firebase.initializeApp(firebaseConfig);

EStyleSheet.build();

export default createBottomTabNavigator(
  {
    Home, // ES6+
    Profile
  },
  {
    navigationOptions: ({ navigation }) => ({
      tabBarIcon: ({ focused, tintColor }) => {
        const { routeName } = navigation.state;
        let iconName;
        switch (routeName) {
          case 'Home':
          iconName = 'search';
          break;
          case 'Profile':
          iconName = 'user-o';
          break;
        }
        return <FontAwesome name={ iconName } size={ 25 } color={ tintColor } />;
      }
    }),
    tabBarOptions: {
      activeTintColor: '#fd5c63',
      inactiveTintColor: 'gray',
    },
  }
);

const styles = EStyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
