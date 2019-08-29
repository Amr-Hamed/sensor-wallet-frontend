import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, View } from 'native-base';
import QRCode from 'react-native-qrcode';
import { StyleSheet } from 'react-native';
import * as Font from 'expo-font';

export default class UserQRCode extends Component {
    state = {
        data: `{"receiverID" : ${this.props.navigation.getParam('userID') || "Dummy ID"} , "receiverName" : "${this.props.navigation.getParam('userName') || "Dummy User Name"}"  , "walletID" : ${this.props.navigation.getParam('walletID')} } `
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Indie Flower' : require('../../../assets/fonts/IndieFlower-Regular.ttf')
        });
      }


    render() {
        return (
            <Container>

                <View style={styles.quoteContainer}>
                    <Text style={styles.quote}>This is your Unique QRCode </Text>
                </View>


                <View style={styles.container}>

                    <QRCode
                        value={this.state.data}
                        size={200}
                        bgColor="black"
                        fgColor="white"
                        style={{ width: 500, borderWidth: 5, borderColor: 'red' }}
                        style={{ marginVertical: 150 }}
                    />
                </View>




            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#333',
        alignItems: 'center',
        justifyContent: 'center',
        // zIndex: 2,
        borderWidth: 2,
        borderColor: "#333"

    },
    quoteContainer: {
        marginTop : 50 , 
        alignItems: 'center',
        justifyContent: 'center',
        shadowOffset: { width: 10, height: 10 },
        shadowColor: 'black',
        shadowOpacity: 1,
        elevation: 3,
        // background color must be set
        backgroundColor : "#0000" ,// invisible color
        zIndex : 444
    },
    quote: {
        fontSize: 16,
        fontFamily: 'Indie Flower'
    }
})