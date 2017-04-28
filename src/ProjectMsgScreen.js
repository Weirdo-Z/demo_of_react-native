/**
 * Created by Zoey on 2017/4/26.
 */
'use strict'
import React, {Component} from 'react';
import {
    View,
    Text,
    Button,
    Image
} from 'react-native';
export default class MessageScreen extends Component {

    render() {
        const {params} = this.props.navigation.state;
        return (
            <View>
                <Text>chat with {params.user}</Text>
            </View>
        );
    }
}
