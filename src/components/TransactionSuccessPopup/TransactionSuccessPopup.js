import React, { Component } from 'react';
import {
  TouchableOpacity,
  Text,
  View,
  Image,
  Dimensions,
  StyleSheet,
} from 'react-native';
import Modal from 'react-native-modal';

import { Icon } from 'native-base';

export default class TransactionSuccessPopup extends Component {
  state = {
    popUpButtonText: this.props.popUpButtonText,
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
            <Text style={styles.popUpText}> Transaction confirmation </Text>
            <Image
              source={{
                uri:
                  'https://martielbeatty.com/wp-content/uploads/2018/03/green-tick-png-green-tick-icon-image-14141-1000.png',
              }}
              style={styles.tickImage}
            />
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
    height: width * 0.8,
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
    fontWeight : 'bold'
  },
  tickImage: {
    height: width*0.25,
    width: width*0.25,
    marginTop: width * 0.1,
  },
  hidePopupButton: {
    height: width * 0.1,
    width: '70%',
    backgroundColor: '#5ecccf',
    marginTop: width * 0.1,
    borderRadius: 10,
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
