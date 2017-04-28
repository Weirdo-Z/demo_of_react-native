/**
 * Created by Zoey on 2017/4/26.
 */
'use strict'
import React, {Component} from 'react';
import {
    View,
    Text
} from 'react-native';
export default class ProjectScreen extends Component {

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>发现</Text>
            </View>
        );
    }
}
