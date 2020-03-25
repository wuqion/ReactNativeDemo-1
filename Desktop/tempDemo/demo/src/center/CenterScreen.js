import React from 'react';
import {View, Text, Button, Alert, NativeModules} from 'react-native';

export default class CenterScreen extends React.Component {
  constructor() {
    super();
    this.state = {
      obj: 'dd',
    };
  }
  render() {
    return (
      <View>
        <Button
          title="跳转首页"
          onPress={() => {
            this.props.navigation.navigate('Home');
          }}
        />
        <Button
          title="跳转原生页"
          onPress={() => {
            NativeModules.testAndroid.startActivity('dd');
          }}
        />
        <Button
          title="分享"
          onPress={() => {
            NativeModules.testAndroid.showShare();
          }}
        />
      </View>
    );
  }
}
