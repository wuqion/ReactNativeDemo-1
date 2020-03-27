import React from 'react';
import { MapView } from 'react-native-amap3d';
import {
  View,
  Button,
  StyleSheet,
  Platform
} from 'react-native';

export default class FindScreen extends React.Component {
  render() {
    if (Platform.OS != 'web') {

    return (
      <View style={styles.container}>
        {/* <MapView style={StyleSheet.absoluteFill} locationEnabled>
          <MapView.Marker
            draggable
            title="这是一个可拖拽的标记"
            onDragEnd={({nativeEvent}) =>
              console.log(`${nativeEvent.latitude}, ${nativeEvent.longitude}`)
            }
            coordinate={{
              latitude: 39.91095,
              longitude: 116.37296,
            }}
          />
        </MapView> */}
      </View>
    );
  } else {
    return (
      <View>

      </View>
    )
  }
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
});
