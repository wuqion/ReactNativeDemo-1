import React from 'react';
import { 
    View,
    Text,
    Button,
    TextInput,
    navigate
} from 'react-native';

export default class DetailsScreen extends React.Component
{
    
    constructor(){
        super()
        this.state={
            obj:'dd',
            text:'',
            itemId:''
        }
        // console.log(this.props.navigation)
    }
    componentDidMount(){


        // this.props.navigation.state.params.text = "sdfsdf";
        this.setState(()=>{
            return{
                itemId:this.props.route.params.itemId
            }
        })
    }
    
    render(){        
       return(
        <View>
            <TextInput value={this.state.itemId} style={{backgroundColor:'#999',marginLeft:20,marginRight:20,padding:5}} placeholder="占位文字"
            onChangeText={(event)=>{
                this.setState({
                    itemId:event
                })
                this.props.route.params.itemId = event;
              }}></TextInput>
            <Button title="回传值" onPress={()=>{
                this.props.navigation.navigate('HomeScreen',{
                    itemId:this.state.itemId
                })
            }}></Button>
            <Button title="navigate返回" onPress={()=>{
                this.props.navigation.navigate('HomeScreen');
            }}></Button>
            <Button title="goBack返回" onPress={()=>{
                this.props.navigation.goBack();
            }}></Button>
            <Button title="push首页面" onPress={()=>{
                this.props.navigation.push('HomeScreen');
            }}></Button>
            <Button title="跳转发现页面" onPress={()=>{
                this.props.navigation.push('FindScreens');
            }}></Button>
        </View>
    )}
}