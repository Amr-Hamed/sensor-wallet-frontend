import React, { Component } from 'react';
import {
    TouchableOpacity,
    Text,
    View,
    Image,
    Dimensions,
    StyleSheet,
    TextInput ,
    KeyboardAvoidingView
} from 'react-native';
import Modal from 'react-native-modal';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';

import { Icon } from 'native-base';
import { faMoneyBillWave } from '@fortawesome/free-solid-svg-icons';



export default class TransactionConfirm extends Component {
    state = {
        popUpButtonText: this.props.popUpButtonText,
        amount: '0' , 
        transactionInfo :  this.props.transactionInfo

    };

    toggleModal = () => {
        this.props.hidePopup();
    };

    render() {
        return (
            <KeyboardAvoidingView>

                <View style={styles.container}>


                    <View style={styles.popup}>
                        <View style={styles.closeButtonContainer}>
                            <TouchableOpacity onPress={this.toggleModal}>
                                <Icon name="close-circle" style={styles.closeButton} />
                            </TouchableOpacity>
                        </View>
                        <Text style={styles.popUpText}> You Will make a Transaction with {this.state.transactionInfo.receiverName}  </Text>
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
                            />
                        </View>
                        <TouchableOpacity onPress={this.makeTransaction} style={styles.hidePopupButton}>
                            <Text style={styles.hidePopupButtonText}> Confirm </Text>
                        </TouchableOpacity>
                        <TouchableOpacity onPress={this.toggleModal} style={styles.hidePopupButton}>
                            <Text style={styles.hidePopupButtonText}> Back to Your Profile  </Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </KeyboardAvoidingView>
        );
    }
}

const height = Dimensions.get('window').height,
    width = Dimensions.get('window').width;

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
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
        fontSize: 15,
        fontFamily : 'LexendDeca'
    },
    tickImage: {
        height: 100,
        width: 100,
        marginTop: height * 0.1
    },
    hidePopupButton: {
        height: 60,
        backgroundColor: '#5ecccf',
        marginTop: height * 0.1,
        borderRadius: 10,
        justifyContent: 'center'
    },
    hidePopupButtonText: {
        color: 'white',
        fontSize: 22,
        fontWeight: 'bold',
        textAlign: 'center',
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
        marginVertical: 20
    },


});
