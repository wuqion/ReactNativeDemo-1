import React from 'react';
import { 
    View,
    Text,
    Button,
    Alert
} from 'react-native';

import HomeScreen from '../home/HomeScreen';
export default class FindsScreen extends React.Component
{
    
    render(){
        
       return(
        <View>
            <Button title="navigate跳转首页" onPress={()=>{
                this.props.navigation.navigate('HomeScreen')            
            }}></Button>
        </View>
    )}
}