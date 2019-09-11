import React, { Component } from 'react';
import { Text, View } from 'react-native';

import StartApp from '../routes/Main';
import {MyContext} from './Provider';

export default class MyConsumer extends Component {
    render() {
        return (
                <MyContext.Consumer>
                    {(context) => 
                    <StartApp context = {context}/>
                    }
                </MyContext.Consumer>
        )
    }
}
