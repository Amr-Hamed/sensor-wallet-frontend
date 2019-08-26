import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body, Text, View } from 'native-base';
import QRCode from 'react-native-qrcode';
import { StyleSheet } from 'react-native';

export default class UserQRCode extends Component {
    state = {
        data: `{"id" : ${this.props.navigation.getParam('id') || "Dummy ID"} , "username" : "${this.props.navigation.getParam('username') || "Dummy User Name"}   } `
    };
    render() {
        return (
            <Container>
                <Content>

                    <Card>
                        <CardItem>
                            <Body style={styles.container}>

                                <QRCode
                                    value={this.state.data}
                                    size={200}
                                    bgColor="black"
                                    fgColor="white"
                                    style={{ width: 500, borderWidth: 5, borderColor: 'red' }}
                                />
                            </Body>
                        </CardItem>

                    </Card>
                </Content>
                <Content padder style={{ borderRadius: 10 }} >
                    <Card style={{ borderRadius: 10 }}>
                        <CardItem>
                            <Body>
                                <CardItem>
                                    <View style={ styles.container}>
                                        <Text style={styles.quote}>Scan QR Code </Text>
                                    </View>
                                </CardItem>
                            </Body>
                        </CardItem>
                    </Card>
                </Content>
            </Container>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 2

    } , 
    quote : {
        fontSize : 16 , 
        fontFamily : 'Rubik-Regular'
    }
})