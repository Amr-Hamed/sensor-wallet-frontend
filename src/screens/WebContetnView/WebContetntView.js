import React, { Component } from 'react';
import { Image, StyleSheet, Text ,WebView } from 'react-native';

import { Content } from 'native-base';




export default class SideLogoCard extends Component {



    render() {
        return <WebView
            source={{ uri: 'https://www.facebook.com/AkletyXBaity/posts/2398554156894063' }}
            style={{ marginTop: 20 }} />


    }
}


const styles = StyleSheet.create({

})
