import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    TextInput,
    KeyboardAvoidingView,
} from 'react-native';

import { Container, Header, Content, Card, CardItem, Button, Icon, Left, Body, Spinner } from 'native-base';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import Modal from 'react-native-modal';

import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';
import POSButton from '../../components/POSButton';

// const coreURL = "https://hookb.in/8PMgyqQ9PNhXgXYxO6mP" ; 
const coreURL = "https://bondnbeyond-apigateway.herokuapp.com/transaction";


export default class TransactionConfirm extends Component {
    state = {

        amount: "not a valid amount",
        transactionInfo: this.props.navigation.getParam('transactionInfo'),
        ValidAmount: true,
        showActivity: false,
        disableBtns: false,
        errorMessage: '',
        error: false,
        transactionSuccess: false,
        isModalVisible: false
    };

    goToProfile = () => {
        // this.props.goToProfile();
        this.props.navigation.navigate('Profile', { 'showSuccessTrans': true })
    };

    toggleModal = () => {
        this.setState({ isModalVisible: !this.state.isModalVisible });
    };

    makeTransaction = () => {
        // check if amount entered iszy
        if (!isNaN(this.state.amount)) {
            this.setState({
                showActivity: true,
                disableBtns: true
            })
            fetch(`${coreURL}`, {
                method: 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    "transactionDetails": {
                        "receiverID": "" + this.state.transactionInfo.receiverID,
                        "senderID": "" + this.state.transactionInfo.senderID,
                        "amount": this.state.amount,
                        "currencyID": '2',
                        "transactionDate": new Date().toISOString().slice(0, 10)
                    }
                }),
            })
                .then(res => res.json())
                .then((res) => {

                    if (res.code == 200) {
                        this.setState({
                            transactionSuccess: true
                        })
                        // this.goToProfile();

                    }
                    else {
                        this.setState({
                            isModalVisible: true,
                            disableBtns: false,
                            errorMessage: res.msg
                        })
                    }
                })
        } else {
            this.setState({
                ValidAmount: false
            })
        }

    }



    render() {
        if (!this.state.transactionSuccess) {

            return (
                <Container style={styles.container}>
                    <Header style={{ backgroundColor: '#45b3b5', width }} />
                    <Content padder>

                        <Modal
                            isVisible={this.state.isModalVisible}
                            style={styles.popUpContainer}>
                            <View style={styles.popup}>
                                <View style={styles.closeButtonContainer}>
                                    <TouchableOpacity onPress={this.toggleModal}>
                                        <Icon name="close-circle" style={styles.closeButton} />
                                    </TouchableOpacity>
                                </View>
                                <Text style={styles.header}> Transaction Failed </Text>
                                <Image
                                    source={{
                                        uri:
                                            'https://icon-library.net/images/failed-icon/failed-icon-7.jpg',
                                    }}
                                    style={styles.tickImage}
                                />

                                <View>
                                    <Text>
                                        {this.state.errorMessage}
                                    </Text>
                                </View>
                                <POSButton title="Try Again" pressed={this.toggleModal} style={styles.btn} />
                            </View>
                        </Modal>


                        <Card>

                            <CardItem header>
                                <Text style={styles.popUpText}> You Will make a Transaction with </Text>
                                <Text style={{ fontWeight: 'bold', color: '#45b3b5', alignSelf: 'center', fontSize: 14 }}>{this.state.transactionInfo.receiverName}  </Text>
                            </CardItem>
                            <CardItem>

                                <KeyboardAvoidingView>
                                    <View >


                                        <View style={styles.popup}>
                                            {/* <View style={styles.closeButtonContainer}>
                            <TouchableOpacity onPress={this.toggleModal} disabled={this.state.disableBtns}>
                            <Icon name="close-circle" style={styles.closeButton} />
                            </TouchableOpacity>
                        </View> */}
                                            <View style={styles.usernameInputContainer}>
                                                <FontAwesomeIcon
                                                    style={styles.headerIcon}
                                                    icon={faMoneyBillWave}
                                                    color={'gray'}
                                                    size={20}
                                                />
                                                <TextInput
                                                    placeholder="Put amount of Senses"
                                                    style={styles.amountInput}
                                                    onChangeText={(amount) => {
                                                        this.setState({
                                                            amount
                                                        })
                                                    }}
                                                    editable={!this.state.disableBtns}
                                                />
                                            </View>
                                            <POSButton title="Confirm" pressed={this.makeTransaction} style={styles.btn} />

                                            <POSButton pressed={this.goToProfile} title=" Back to Profile" style={styles.btn} />
                                            <Text style={{ color: 'red', display: this.state.ValidAmount ? 'none' : 'flex' }}>Sorry but amount must be a number</Text>
                                            <View style={[styles.container, styles.horizontal]}>
                                                <Spinner size="large" color="#45b3b5" style={{ display: this.state.showActivity ? 'flex' : 'none' }} />
                                            </View>

                                        </View>
                                    </View>
                                </KeyboardAvoidingView>
                            </CardItem>
                        </Card>
                    </Content>
                </Container>
            );
        }
        else {


            return (
                <Container>
                    <Header style={{ backgroundColor: '#333' }} />
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
                        </Card>
                    </Content>
                </Container>
            );
            333

        }
    }
}
const height = Dimensions.get('window').height,
    width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
        alignContent: 'center'
    },

    popUpButton: {
        height: 50,
        width: '60%',
        backgroundColor: '#A9A9A9',
        justifyContent: 'center',
        alignItems: 'center',
    },
    popUpButtonText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold',
    },

    popup: {
        borderRadius: 10,
        backgroundColor: 'white',
        height: height * 0.8,
        width: width * 0.9,
        alignItems: 'center',
    },
    closeButtonContainer: {
        alignItems: 'flex-end',
        width: '100%',
    },
    closeButton: {
        marginRight: -10,
        marginTop: -10,
        fontSize: 40,
    },
    popUpText: {
        fontSize: 12,
        alignSelf: 'center'
    },
    tickImage: {
        height: 100,
        width: 100,
        marginTop: height * 0.1
    },
    hidePopupButton: {
        height: 60,
        backgroundColor: '#5ecccf',

        borderRadius: 10,
        justifyContent: 'center'
    },
    hidePopupButtonText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
        marginBottom: 20
    },
    usernameInputContainer: {
        backgroundColor: 'white',
        height: 0.12 * height,
        width: '90%',
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        borderBottomColor: '#636363',
        borderBottomWidth: 1,
        marginVertical: 10,
    },
    amountInput: {
        marginLeft: 10,
        marginVertical: 20,
        width: '90%'
    },
    horizontal: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        padding: 10
    },
    header: {
        alignSelf: 'center',
        color: '#333',
        fontWeight: 'bold',
        fontSize: 20

    },
    headerContainer: {
        backgroundColor: "#333",
        alignContent: 'center',
        alignItems: 'center',
        flex: 1,
        width,
        borderRadius: 10,
        paddingBottom: 0.1 * width
    },
    backBtn: {
        width: 0.6 * width,
        height: 0.1 * width,
        alignSelf: 'center',

    },
    btn: {
        width: 0.6 * width,
        height: 0.2 * width,
        marginVertical: 10,
        borderRadius: 10,
        paddingTop: 0.06 * width
    }


});
