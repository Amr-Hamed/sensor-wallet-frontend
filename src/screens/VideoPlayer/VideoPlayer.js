import React, { Component } from 'react';
import { Image, StyleSheet, Text, WebView, Dimensions } from 'react-native';
import POSButton from '../../components/POSButton';

import { Content } from 'native-base';



const { width: WIDTH, height: Hieght } = Dimensions.get('window');

export default class WebContent extends Component {

    constructor(props) {
        super(props);
        this.state = {
            url: this.props.navigation.getParam('URL')+"?autoplay=1" ,
            duration: this.props.navigation.getParam('duration') , 
            disableBtn : true , 
            buttonText : this.props.navigation.getParam('duration')
        }

    }
    componentDidMount = ()=> {
        console.log("Video URL : ", this.state.url)
               setInterval(()=> {
                if (this.state.buttonText > 0){
                    this.setState({
                        buttonText : this.state.buttonText - 1 
                    })
                } else {
                    this.setState({
                        disableBtn : false , 
                        buttonText:'Back'
                    })
                }
               },1000)
    }
    backToProfile = () => {
        this.props.navigation.navigate('Profile')
    }

    onShouldStartLoadWithRequest = (navigator) => {
        if (navigator.url.indexOf('embed') !== -1
        ) {
            return true;
        } else {
            this.videoPlayer.stopLoading(); //Some reference to your WebView to make it stop loading that URL
            return false;
        }    
    }

    render() {
        return (
            <>
                <WebView
                    source={{ uri: this.state.url }}
                    ref={(ref) => { this.videoPlayer = ref;}}
                    onNavigationStateChange = {this.onShouldStartLoadWithRequest}
                    scalesPageToFit={true} 
                    // javaScriptEnabled={true}
                />
                <POSButton title={this.state.buttonText} style={styles.btn} pressed={this.backToProfile} disable = {this.state.disableBtn} 
                />
            </>
        )


    }
}


const styles = StyleSheet.create({
    btn: {
        marginVertical: 0.1* Hieght,
        width: WIDTH - 20,
        height: 55,
        borderRadius: 10,
        marginVertical: 20,
        alignSelf: 'center',
        justifyContent: 'center'
    }
})
