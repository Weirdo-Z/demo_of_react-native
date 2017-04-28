/**
 * Created by Zoey on 2017/4/27.
 */
import React, {Component} from 'react';
import {
    AppRegistry,
    Text,
    View,
    Image
} from 'react-native';
export default class CategoryMenu extends Component {

    constructor(props) {// 在组件挂载之前调用一次。返回值将会作为 this.state 的初始值。
        super(props);
    }

    renderItem(title,i) {
        return (
            <View style={{flexDirection:'column', alignItems:'center'}} key={i}>
                <Image style={{width:30,height:30}} source={require('../images/categoryMenu.png')}></Image>
                <Text style={{fontSize:15}}>{title}</Text>
            </View>
        )
    }
    render() {
        return (
            <View style={{height:170,marginTop:10,backgroundColor:'#FFFFFF'}}>
                <View style={{flexDirection:'row', height:85, justifyContent:'space-around',marginTop:5}}>
                    {
                        this.props.titles1.map((title,i) => this.renderItem(title,i))
                    }
                </View>
                <View style={{flexDirection:'row', height:85, justifyContent:'space-around'}}>
                    {
                        this.props.titles2.map((title,i) => this.renderItem(title,i+5))
                    }
                </View>
            </View>
        )
    }
}