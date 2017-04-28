/**
 * Created by Zoey on 2017/4/26.
 */
'use strict'
import React from 'react';
import {
    AppRegistry,
    Text,
    View,
    Button,
    StyleSheet,
    Image
} from 'react-native';
import { StackNavigator,TabNavigator } from 'react-navigation';
import MyselfScreen from './MyselfScreen';
import DiscoveryScreen from './DiscoveryScreen';
import MessageScreen from './MessageScreen';
import ProjectScreen from './ProjectScreen';
import FeaturedScreen from './FeaturedScreen';

import ProjectMsgScreen from './ProjectMsgScreen';
class HomeScreen extends React.Component {
    render(){
        const { navigate } = this.props.navigation;//链接到其他页面（必备）
        return(
            <View>
                <Text>Hello, Navigation!</Text>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    icon: {
        width: 30,
        height: 26,
    },
});
const MainScreenNavigator = TabNavigator({
    Featured: {
        screen: FeaturedScreen ,
        navigationOptions: {
            title:'精选',
            tabBar: {
                label: '精选',
                icon: ({tintColor}) => (
                    <Image source={require('../images/tabItem.png')}
                           style={[styles.icon]}/>
                ),
            },
        }
    },
    Discovery: {
        screen: DiscoveryScreen ,
        navigationOptions: {
            title:'发现',
            tabBar: {
                label: '发现',
                icon: ({tintColor}) => (
                    <Image source={require('../images/tabItem.png')}
                           style={[{tintColor: tintColor},styles.icon]}/>
                ),
            },
        }
    },
    Project: {
        screen: ProjectScreen,
        navigationOptions: {
            title:'项目',
            tabBar: {
                label: '项目',
                icon: ({tintColor}) => (
                    <Image source={require('../images/tabItem.png')}
                           style={[{tintColor: tintColor},styles.icon]}/>
                ),
            },
        }
    },
    Message: {
        screen: MessageScreen ,
        navigationOptions: {
            title: '消息',
            tabBar: {
                label: '消息',
                icon: ({tintColor}) => (
                    <Image source={require('../images/tabItem.png')}
                           style={[{tintColor: tintColor},styles.icon]}/>
                ),
            },
        }
    },
    Myself: {
        screen:MyselfScreen,
        navigationOptions: {
            title:'我的',
            tabBar: {
                label: '我的',
                icon: ({tintColor}) => (
                    <Image source={require('../images/tabItem.png')}
                           style={[{tintColor: tintColor},styles.icon]}/>
                ),
            },
        }
    }
},{
    animationEnabled: false, // 切换页面时不显示动画
    swipeEnabled: false, // 禁止左右滑动
    initialRouteName: 'Featured',
    tabBarPosition: 'bottom',// 显示在底端，android 默认是显示在页面顶端的
    backBehavior: 'none', // 按 back 键是否跳转到第一个  Tab， none 为不跳转
    tabBarOptions: {
        showIcon: true, // android 默认不显示 icon, 需要设置为 true 才会显示
        activeTintColor: '#fad61c',// 文字和图片选中颜色
        inactiveTintColor: '#000000',// 文字和图片默认颜色
        activeBackgroundColor: '#ffffff',
        inactiveBackgroundColor: '#ffffff',
        indicatorStyle: {height: 0}, // android 中TabBar下面会显示一条线，高度设为 0 后就不显示线了
        style: {
            backgroundColor: '#f5f5f5',
        },
        labelStyle: {
            fontSize: 15,
            fontWeight:'900',
            color:'#000000'
        },
    }
});

const SimpleApp = StackNavigator({
    Main: {screen: MainScreenNavigator},
    ProjectMsg:{
        screen: ProjectMsgScreen,
        navigationOptions: {title:'项目交流'}
    },
},{
    initialRouteName: 'Main',
    navigationOptions: {  // 屏幕导航的默认选项, 也可以在组件内用 static navigationOptions 设置(会覆盖此处的设置)
        header: {  // 导航栏相关设置项
            backTitle: '返回',  // 左上角返回键文字
            style: {
                backgroundColor: '#b2b2b2'
            },
            titleStyle: {
                alignSelf: 'center',
                color: '#fad61c'
            }
        },
        cardStack: {
            gesturesEnabled: true
        }
    },
    mode: 'card',  // 页面切换模式, 左右是card(相当于iOS中的push效果), 上下是modal(相当于iOS中的modal效果)
    headerMode: 'float', // 导航栏的显示模式, screen: 有渐变透明效果, float: 无透明效果, none: 隐藏导航栏
    //onTransitionStart: ()=>{ console.log('导航栏切换开始'); },  // 回调
    //onTransitionEnd: ()=>{ console.log('导航栏切换结束'); }  // 回调
});
export default SimpleApp;