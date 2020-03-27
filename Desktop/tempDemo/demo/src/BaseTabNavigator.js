import React from 'react'
import {
    Image,
    Platform,
    LinkingStatic
} from 'react-native'
import JPush from 'jpush-react-native';
import { NavigationContainer, useLinking } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './home/HomeScreen';

import FindScreen from './find/FindScreen';

import center from './center/CenterScreen';

import FindScreens from './find/FindScreens'
const tabsImage = Platform.OS == 'web' ? {
    home: '../images/tabs/on/home.png',
    homeSelect: '../images/tabs/select/home.png',
    find: '../images/tabs/on/danyehuaban.png',
    findSelect: '../images/tabs/select/danyehuaban.png',
    center: '../images/tabs/on/geren.png',
    centerSelect: '../images/tabs/select/geren.png'
} : {
        home: require('../images/tabs/on/home.png'),
        homeSelect: require('../images/tabs/select/home.png'),
        find: require('../images/tabs/on/danyehuaban.png'),
        findSelect: require('../images/tabs/select/danyehuaban.png'),
        center: require('../images/tabs/on/geren.png'),
        centerSelect: require('../images/tabs/select/geren.png')
    }

// const routeNameRef = React.useRef(null);
const Tab = createBottomTabNavigator();
const Stack = createStackNavigator();
const getActiveRoute = state => {
    const route = state.routes[state.index]

    if (route.state) {
        // Dive into nested navigators
        return getActiveRoute(route.state)
    }

    return route
}
const Home = () => {
    return (
        <Tab.Navigator tabBarOptions={{
            activeTintColor: '#1afa29',
            inactiveTintColor: '#999',
        }}>
            <Tab.Screen name="Home" component={HomeScreen} options={{
                title: '首页',
                tabBarIcon: ({ color, size, focused }) => (
                    <Image style={{ height: 20, width: 20 }} source={focused ? tabsImage.home : tabsImage.homeSelect}></Image>
                ),

            }} />
            <Tab.Screen name="Find" component={FindScreen} options={{
                tabBarLabel: '发现',
                tabBarIcon: ({ color, size, focused }) => (
                    <Image style={{ height: 20, width: 20 }} source={focused ? tabsImage.find : tabsImage.findSelect}></Image>
                ),
            }} />
            <Tab.Screen name="Center" component={center} options={{
                tabBarLabel: '个人',
                tabBarIcon: ({ focused }) => (
                    <Image style={{ height: 20, width: 20 }} source={focused ? tabsImage.center : tabsImage.centerSelect}></Image>
                )
            }} />
        </Tab.Navigator>

    )
};

function BaseTabNavigator() {
    // JPush.init();
    const ref = React.useRef();
    const { getInitialState } = useLinking(ref, {
        prefixes: ['http://localhost:8080/'],
        config: {
            Root: {
                initialRouteName: 'Home',
                // path: 'stack',
                screens: {
                    Home: 'home',
                    Find: 'find',
                    Center: 'center',
                    FindScreens: 'findscreens',
                },
            },
        },
    });

    const [isReady, setIsReady] = React.useState(false);
    const [initialState, setInitialState] = React.useState();
    React.useEffect(() => {

        getInitialState()
            .catch(() => { })
            .then(state => {
                if (state !== undefined) {
                    setInitialState(state);
                }

                setIsReady(true);
            });
    }, [getInitialState]);

    if (!isReady) {
        return null;
    }
    return (
        <NavigationContainer
            initialState={initialState}
            ref={ref}
            onStateChange={state => {

                // alert(JSON.stringify(state));
                // const previousRouteName = routeNameRef.current
                const currentRoute = getActiveRoute(state)
                // alert(JSON.stringify(currentRoute))
                // if (previousRouteName !== currentRoute.name) {
                //   console.log('[onStateChange]', currentRoute)
                // 动态设置 StatusBar
                // 接入APM系统
                // }
                // Save the current route name for later comparision
                // routeNameRef.current = currentRoute.name
            }}
        >
            <Stack.Navigator>
                <Stack.Screen
                    options={{
                        headerTransparent: true,
                        headerTitleAlign: "center",
                        // headerMode: 'none',
                        headerShown: false,
                    }}
                    name="Root"
                    component={Home}
                />
                <Stack.Screen
                    options={{
                        headerTitleAlign: "center",
                    }}
                    name="FindScreens"
                    component={FindScreens}
                />
            </Stack.Navigator>
        </NavigationContainer>

    );
}
// componentDidMount() {
//     JPush.init();
//     //连接状态
//     this.connectListener = result => {
//       console.log("connectListener:" + JSON.stringify(result))
//     };
//     JPush.addConnectEventListener(this.connectListener);
//     //通知回调
//     this.notificationListener = result => {
//       console.log("notificationListener:" + JSON.stringify(result))
//     };
//     JPush.addNotificationListener(this.notificationListener);
//     //本地通知回调
//     this.localNotificationListener = result => {
//       console.log("localNotificationListener:" + JSON.stringify(result))
//     };
//     JPush.addLocalNotificationListener(this.localNotificationListener);
//     //自定义消息回调
//     this.customMessageListener = result => {
//       console.log("customMessageListener:" + JSON.stringify(result))
//     };
//     JPush.addCustomMessagegListener(this.customMessageListener);
//     //tag alias事件回调
//     this.tagAliasListener = result => {
//       console.log("tagAliasListener:" + JSON.stringify(result))
//     };
//     JPush.addTagAliasListener(this.tagAliasListener);
//     //手机号码事件回调
//     this.mobileNumberListener = result => {
//       console.log("mobileNumberListener:" + JSON.stringify(result))
//     };
//     JPush.addMobileNumberListener(this.mobileNumberListener);
//   }
export default BaseTabNavigator;


