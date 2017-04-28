/**
 * Created by Zoey on 2017/4/26.
 */
'use strict'
import React,{Component} from 'react';
//noinspection JSUnresolvedVariable
import {
    View,
    Text,
    TouchableOpacity,
    ListView
} from 'react-native';
//noinspection JSUnresolvedVariable
import ScrollableTabView, {DefaultTabBar} from 'react-native-scrollable-tab-view'
import CategoryMenu from '../component/CategoryMenu'
export default class FeaturedScreen extends Component{

    constructor(props) {
        super(props);
        let ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state = {
            dataSource: ds.cloneWithRows([{
                type: 'mark', title: '服装设计大赛', endTime: '2017-5-01 12:00:00'
            }, {
                type: '', title: '有创意纺织集团有限公司'
            }]),
            tabs: ['最新最热', '人气最新'],
        }
    }

    _tableContent=(rowData)=> {
        if (rowData.type) {
            return rowData.type == 'mark' ?
                <View>
                    <Text style={{fontSize:20}}>{rowData.title}</Text>
                    <Text style={{fontSize:15,color:'#b2b2b2'}}>{rowData.endTime}</Text>
                </View> :
                <Text style={{fontSize:15}}>{rowData.title}</Text>
        } else {
            return <Text style={{fontSize:15}}>{rowData.title}</Text>
        }
    };
    render(){
        let category1 = ['好设计', '每周一评', '灵感源', '赛事', '悬赏广场'];
        let category2 = ['人物秀', '展会信息', 'T台秀', '时尚趴', '趋势分析'];
        const {navigate} = this.props.navigation;//链接到其他页面（必备）
        return(
        <View>
            <CategoryMenu titles1={category1} titles2={category2}/>
            <View style={{flexDirection:'row',justifyContent:'space-around',backgroundColor:'#b2b2b2',height:80}}>
                <TouchableOpacity
                    style={{backgroundColor:'#000000',height:70,width:180,justifyContent:'center'}}
                    onPress={() => navigate('Discovery',{user:'Zoey'})}
                >
                    <Text style={{color:'#fad61c', alignSelf:'center',fontSize:17}}>发现设计达人
                    </Text>
                </TouchableOpacity >
                <TouchableOpacity
                    style={{backgroundColor:'#f3fafa',height:70,width:180,justifyContent:'center'}}
                    onPress={() => navigate('Discovery',{user:'Zoey'})}
                >
                    <Text style={{color:'#000000', alignSelf:'center',fontSize:17}}>寻找优质厂商
                    </Text>
                </TouchableOpacity >
            </View>
            <View style={{height:400}}>
                <ScrollableTabView style={{height:400,backgroundColor:'#FFFFFF' }}
                                   renderTabBar={() => <DefaultTabBar/>}
                                   tabBarUnderlineStyle={{backgroundColor:'#fad61c'}}//设置DefaultTabBar和ScrollableTabBarTab选中时下方横线的颜色
                                   tabBarActiveTextColor='#000000'//设置选中Tab的文字颜色
                                   tabBarInactiveTextColor='#000000'//设置未选中Tab的文字颜色
                                   tabBarTextStyle={{fontSize: 14}}//设置Tab文字的样式，比如字号、字体等
                >
                    <View tabLabel={this.state.tabs[0]}>
                        <ListView
                            dataSource={this.state.dataSource}
                            renderRow={this._tableContent}
                        />
                    </View>

                    <View tabLabel={this.state.tabs[1]}>
                        <Text>#3</Text>
                    </View>
                </ScrollableTabView>
            </View>
        </View>
        )
    }
}