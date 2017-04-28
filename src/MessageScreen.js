/**
 * Created by Zoey on 2017/4/26.
 */
'use strict'
import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image,
    TouchableOpacity
} from 'react-native';
export default class MessageScreen extends Component {
    constructor(props){
        super(props);
        this.state = {
            items : [{
                'screen':'good','title':'谁赞赏了我的作品'
            }, {
                'screen':'focus','title': '谁关注了我'
            },{
                'screen':'invitation','title':'收到的邀请'
            },{
                'screen':'activity','title':'关注的活动进展'
            }],
        }
    }
    _renderItem(item,i){
        const {navigate} = this.props.navigation;//链接到其他页面（必备）
        return (
            <TouchableOpacity
                key={i}
                style={{height:50,width:'100%',justifyContent:'center',marginTop:5,marginLeft:15}}
                onPress={() => navigate('ProjectMsg',{user:'Zoey'})}
            >
                <View style={{flexDirection:'row'}}>
                    <Image style={{width:20,height:20}} source={require('../images/categoryMenu.png')} ></Image>
                    <Text style={{color:'#000000',fontSize:17,marginLeft:5}}>{item.title}</Text>
                </View>
            </TouchableOpacity >
        )
    }
    render() {
        const {params} = this.props.navigation.state;
        const {navigate} = this.props.navigation;//链接到其他页面（必备）
        return (
            <View style={{backgroundColor:'#f5f5f5'}}>
                <TouchableOpacity
                    style={{height:50,width:'100%',justifyContent:'center',marginTop:15,marginLeft:15,marginBottom:15}}
                    onPress={() => navigate('ProjectMsg',{user:'Zoey'})}
                >
                    <View style={{flexDirection:'row'}}>
                        <Image style={{width:20,height:20}} source={require('../images/categoryMenu.png')}></Image>
                        <Text style={{color:'#000000',fontSize:17,marginLeft:5}}>项目对话</Text>
                    </View>
                </TouchableOpacity >
                {
                    this.state.items.map((item,i)=>this._renderItem(item,i))
                }
            </View>
        );
    }
}
