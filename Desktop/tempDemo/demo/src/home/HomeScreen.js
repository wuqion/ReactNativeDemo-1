import React from 'react';
import {
  View,
  Text,
  Alert,
  StyleSheet,
  Image,
  Button,
  TextInput,
  Dimensions,
  Platform
} from 'react-native';

import Swiper from 'react-native-swiper';
import { ScrollView } from 'react-native-gesture-handler';
import NetUtils from '../netUtil/NetUtils';
// import LinearGradient from 'react-native-linear-gradient';

const deviceWidth = Dimensions.get('window').width;      //设备的宽度
const testUrl = 'https://api.apiopen.top/musicRankings';
const icons = Platform.OS == 'web' ? [//分类 
  { src: "../../images/home/in_01.jpg", title: "出境游" },
  { src: "../../images/home/in_02.jpg", title: "国内游" },
  { src: "../../images/home/in_03.jpg", title: "签证" },
  { src: "../../images/home/in_04.jpg", title: "邮轮" },
  { src: "../../images/home/in_09.jpg", title: "定制游" },
  { src: "../../images/home/in_05.jpg", title: "机票" },
  { src: "../../../images/home/in_06.jpg", title: "酒店" },
  { src: "../../images/home/in_07.jpg", title: "门票车票" },
  { src: "../../images/home/in_08.jpg", title: "当地游" },
  { src: "../../images/home/in_10.jpg", title: "火车票" }
] : [//分类 
    { src: require("../../images/home/in_01.jpg"), title: "出境游" },
    { src: require("../../images/home/in_02.jpg"), title: "国内游" },
    { src: require("../../images/home/in_03.jpg"), title: "签证" },
    { src: require("../../images/home/in_04.jpg"), title: "邮轮" },
    { src: require("../../images/home/in_09.jpg"), title: "定制游" },
    { src: require("../../images/home/in_05.jpg"), title: "机票" },
    { src: require("../../images/home/in_06.jpg"), title: "酒店" },
    { src: require("../../images/home/in_07.jpg"), title: "门票车票" },
    { src: require("../../images/home/in_08.jpg"), title: "当地游" },
    { src: require("../../images/home/in_10.jpg"), title: "火车票" }
  ];
import { StackRouter } from '@react-navigation/native';

const MyStackRouter = options => {
  const router = StackRouter(options);

  return {
    ...router,
    getStateForAction(state, action, options) {
      const result = router.getStateForAction(state, action, options);

      if (
        result != null &&
        result.index < state.index &&
        state.routes[state.index].params?.isEditing
      ) {
        // Returning the current state means that the action has been handled, but we don't have a new state
        return state;
      }


      return result;
    },
  };

};
export default class HomeScreen extends React.Component {
  constructor() {
    super()
    this.state = {
      swiper: [],
      // 
      arr_icons: icons,//分类 
      images: [
        { src: Platform.OS == 'web' ? '../../images/home/in_14.jpg' : require('../../images/home/in_14.jpg'), title: '会员中心', des: '立享会员福利' },
        { src: Platform.OS == 'web' ? '../../images/home/in_15.jpg' : require('../../images/home/in_15.jpg'), title: '爱旅行', des: '分享旅行乐趣' }
      ],
      text: ''

    }
  }
  componentDidUpdate() {
    alert('xx');
  }
  componentWillReceiveProps(nextProps) {

    alert("回传:" + JSON.stringify(nextProps.route.params));
    if (nextProps.route.params.itemId) {
      this.setState(() => {
        return {
          text: nextProps.route.params.itemId
        }
      })
    }
  }
  // componentWillMount() {

  // fetch('http://rap2.taobao.org:38080/app/mock/247672/homo')
  //   .then((response) => response.json())
  //   .then((responseJson) => {
  //     this.setState({
  //       swiper: responseJson.swiper
  //     })
  //     console.log(responseJson.swiper)
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });
  // }

  render() {
    return (
      <ScrollView>
        <View style={{ flex: 1 }}>
          <View style={styles.wrapper}>
            <Swiper showsButtons={false} autoplay={true}>
            <View>
              <Image style={styles.slide_image}
                source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584638767208&di=93a6e8c3a4ec8efbe09b06ecd255fcce&imgtype=0&src=http%3A%2F%2Fimage.hnol.net%2Fc%2F2016-03%2F31%2F16%2F201603311627201261-2089977.jpg' }}></Image>
              <Text style={styles.slide_title}>标题</Text>
            </View>
            <View>
              <Image style={styles.slide_image}
                source={{ uri: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1584638767206&di=de2d7277cb423125e1dac0fb1af8cdc9&imgtype=0&src=http%3A%2F%2Fpic1.win4000.com%2Fpic%2F4%2F77%2Fc445755754.jpg'}}></Image>
              <Text style={styles.slide_title}>标题</Text>
            </View>
          </Swiper>
          </View>
          <View style={{ backgroundColor: '#fff', flexDirection: 'row', flexWrap: 'wrap' }}>

            {
              this.state.arr_icons.map((item) => {
                return <View style={styles.styleItem} key={item.title}>
                  <Image style={styles.styleItem_img} source={item.src}></Image>
                  <Text style={styles.styleItem_title}>{item.title}</Text>
                </View>
              })
            }
          </View>
          <View style={{ flexDirection: 'row' }}>
            {
              this.state.images.map((item) => {
                return <View style={styles.styleImages} key={item.src}>
                  <Image style={styles.styleImages_img} source={item.src}></Image>
                  <View style={{ position: "absolute", flexDirection: 'row', left: 15, top: 20 }}>
                    <View style={{ height: '100%', width: 4, backgroundColor: 'red', borderRadius: 3, marginRight: 3 }}></View>
                    <Text style={{ fontWeight: 'bold', fontSize: 16 }}>{item.title}</Text>
                  </View>
                  {/* <LinearGradient style={{width:'auto',position:'absolute',left:15,top:45,borderRadius:10}} colors={['#ff3939', '#ff7830']} start={{x: 0, y: 0}} end={{x: 1, y: 0}}>
                              <Text style={{color:"#fff",height:13,textAlign:'center',fontSize:10,marginTop:3,marginRight:5,marginLeft:5}}>
                              {item.des}
                              </Text>
                            </LinearGradient> */}
                </View>
              })
            }
          </View>
          <TextInput style={{ backgroundColor: '#999', marginLeft: 20, marginRight: 20, padding: 5 }} placeholder="占位文字"
            value={this.state.text}
            onChangeText={(event) => {
              this.setState(() => {
                return { text: event }
              });
            }}></TextInput>
          <Button title="跳转" onPress={() => {

            React.useEffect(() => {
              const unsubscribe = this.props.navigation.addListener('focus', () => {
                // Screen was focused
                // Do something
              });

              return unsubscribe;
            }, [navigation]);


            // NetUtils.get(testUrl, '',
            //   response => {
            //     success && success(response)    //定义成功回调
            //   }, failresponse => {
            //     fail && fail(failresponse);    //定义失败回调
            //   }, errresponse => {
            //     err && err(errresponse);        //定义异常回调
            //   });
          }} />
        </View>
      </ScrollView>
    )
  }

}
const item_size = deviceWidth * 0.2 - 20;

const styles = StyleSheet.create({
  styleItem: {
    padding: 10,
  },
  styleItem_img: {
    height: item_size,
    width: item_size,
  },
  styleItem_title: {
    textAlign: 'center',
    marginTop: 10,
    fontSize: 13
  },
  styleImages: {
    width: '50%',
    padding: 10,

    shadowOffset: {
      width: 3,
      height: 3
    },

    shadowColor: '#999',
    shadowOpacity: 9,
  },
  styleImages_img: {
    width: '100%',
    height: 70,
    resizeMode: 'stretch',
    borderRadius: 5

    // shadowOffset: {
    //   width: 3,
    //   height: 3
    // },

    // shadowColor:'red',
    // shadowRadius:9
  },
  wrapper: {
    width: deviceWidth,
    height: 200
  },
  slide_title: {
    color: 'red',
    position: 'absolute',
    right: 0,
    bottom: 0
  },
  slide_image: {
    height: 200,
    width: deviceWidth
  }
})