import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Thumbnail,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

import { Icon } from 'native-base';

export default class ConfirmTransactionPopup extends Component {
  state = {
    popUpButtonText: this.props.popUpButtonText,
    amount: this.props.amount,
    brand: this.props.brand,
    isModalVisible: false,
  };

  toggleModal = () => {
    this.setState({ isModalVisible: !this.state.isModalVisible });
  };

  render() {
    return (
      <View style={styles.container}>
        <TouchableOpacity onPress={this.toggleModal} style={styles.popUpButton}>
          <Text style={styles.popUpButtonText}>
            {this.state.popUpButtonText}
          </Text>
        </TouchableOpacity>
        <Modal
          isVisible={this.state.isModalVisible}
          style={styles.popUpContainer}>
          <View style={styles.popup}>
            <View style={styles.closeButtonRow}>
              <TouchableOpacity onPress={this.toggleModal}>
                <Icon name="close-circle" style={styles.closeButton} />
              </TouchableOpacity>
            </View>
            <Text style={styles.popUpText}> Confirm Transaction </Text>
            <Text style={styles.action}> You will pay </Text>
            <View style={styles.amountAndType}>
              <Image
                source={require('../../../assets/images/sensesLogo.png')}
                style={styles.sensesLogo}
              />
              <Text style={styles.amount}> {this.state.amount} </Text>
            </View>
            <Text style={styles.toText}> TO </Text>
            <Text style={styles.brandName}> {this.state.brand} </Text>
            <TouchableOpacity
              onPress={this.toggleModal}
              style={styles.hidePopupButton}>
              <Text style={styles.hidePopupButtonText}> Hide Modal </Text>
            </TouchableOpacity>
          </View>
        </Modal>
      </View>
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
    height: height * 0.08,
    width: width * 0.6,
    backgroundColor: '#A9A9A9',
    justifyContent: 'center',
    alignItems: 'center',
  },
  popUpButtonText: {
    color: 'white',
    fontSize: width * 0.08,
    fontWeight: 'bold',
  },
  popUpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: width * 1.05,
    width: width * 0.8,
    alignItems: 'center',
  },
  closeButtonRow: {
    alignItems: 'flex-end',
    width: '100%',
  },
  closeButton: {
    marginRight: -(width * 0.02),
    marginTop: -(width * 0.025),
    fontSize: width * 0.12,
  },
  popUpText: {
    fontSize: width * 0.05,
  },
  action: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    marginTop: width * 0.04,
  },
  amountAndType: {
    flexDirection: 'row',
    width: width * 0.4,
    justifyContent: 'space-around',
    alignItems: 'center',
    marginTop: width * 0.065,
  },
  sensesLogo: {
    height: width * 0.15,
    width: width * 0.15,
    resizeMode: 'contain',
  },
  amount: {
    fontSize: width * 0.1,
    color: '#137b08',
    fontWeight: 'bold',
  },
  toText: {
    fontWeight: 'bold',
    fontSize: width * 0.06,
    marginTop: width * 0.03,
  },
  brandName: {
    fontSize: width * 0.07,
    fontWeight: 'bold',
    marginTop: width * 0.04,
  },
  hidePopupButton: {
    height: width * 0.15,
    width: '70%',
    backgroundColor: '#5ecccf',
    marginTop: width * 0.06,
    borderRadius: 5,
    justifyContent: 'center',
    marginBottom: width * 0.5,
  },
  hidePopupButtonText: {
    color: 'white',
    fontSize: width * 0.06,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
