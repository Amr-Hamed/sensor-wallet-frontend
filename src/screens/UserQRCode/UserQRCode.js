import React, { Component } from 'react';
import { Container, Header, Content, Card, CardItem, Body } from 'native-base';
import QRCode from 'react-native-qrcode';
import { StyleSheet , Dimensions , Image , Text , View , Modal } from 'react-native';
import * as Font from 'expo-font';
import {Notifications } from 'expo';

import POSButton from '../../components/POSButton';



const height = Dimensions.get('window').height,
    width = Dimensions.get('window').width;

export default class UserQRCode extends Component {

    state = {
        data: `{"receiverID" : ${this.props.navigation.getParam('userID') || "Dummy ID"} , "receiverName" : "${this.props.navigation.getParam('userName') || "Dummy User Name"}"  , "walletID" : ${this.props.navigation.getParam('walletID')} , "token" : "${this.props.navigation.getParam('token') || '"ExponentPushToken[cufXgMGLq_lpwoIyqurRh7]"'} " } ` , 
        transactionSuccess : false , 
        transactionData : ''
    };

    async componentDidMount() {
        await Font.loadAsync({
            'Indie Flower' : require('../../../assets/fonts/IndieFlower-Regular.ttf')
        });

        Notifications.addListener(async (data)=>{
            this.setState({userPoints : this.state.userPoints + 5})
            // console.log(data); 
            this.setState({
                transactionSuccess : true , 
            })
            console.log()
            // await this.props.navigation.navigate('Profile');
        }); 

      
      }

      goToProfile = () => {
        // this.props.goToProfile();
        this.setState({
            transactionSuccess : false 
        })
        this.props.navigation.navigate('Profile')
    };

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

                <Modal
                visible={this.state.transactionSuccess}
                style = {{height , width}}>
                <Container>
            <Content>
                <Card style={{ flex: 0 }}>
                    <CardItem>
                        <Image style={{ alignSelf: 'center' }} source={{ uri: 'https://cdn.dribbble.com/users/911154/screenshots/3332845/vfmov3.gif' }} style={{ height: 0.75 * height, width: 200, flex: 1 }} />
                    </CardItem>
                    <CardItem>
                        <Body>
                            <POSButton
                                title="Back"
                                pressed={this.goToProfile}
                                style={styles.backBtn}
                                />
                        </Body>
                    </CardItem>

                    <CardItem>
                        <Text>
                            {this.state.transactionData}
                        </Text>
                    </CardItem>
                </Card>
            </Content>
        </Container>
                </Modal>



            </Container>
        );
    
    
}
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
       
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
    } , 
    backBtn: {
        width: 0.6 * width,
        height: 0.1 * width,
        alignSelf: 'center',

    },
})