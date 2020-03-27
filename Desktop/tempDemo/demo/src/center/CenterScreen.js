import React from 'react';
import {View, Button, NativeModules, Platform} from 'react-native';

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
          title="跳转二级详情"
          onPress={() => {
            this.props.navigation.navigate('FindScreens');
          }}
        />
        <Button
          title="跳转原生页面"
          onPress={() => {
            if (!(Platform.OS == 'web')) {
              NativeModules.testAndroid.startActivity('dd');
            }
          }}
        />
        <Button
          title="分享"
          onPress={() => {
            if (!(Platform.OS == 'web')) {
              NativeModules.testAndroid.showShare();
            }
          }}
        />
      </View>
    );
  }
}
