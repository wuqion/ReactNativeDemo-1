/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import {
  View,
  Text
} from 'react-native';

import 'react-native-gesture-handler';
import BaseTabNavigator from './BaseTabNavigator';

const App: () => React$Node = () => {
  return (
   <View style={{flex:1}}>
     {/* <Text>dddsssssss</Text>
     <Text>dddsssssss</Text>
     <Text>dddsssssss</Text>
     <Text>dddsssssss</Text>
     <Text>dddsssssss</Text> */}
     <BaseTabNavigator></BaseTabNavigator>
   </View>
  );
};

export default App;
