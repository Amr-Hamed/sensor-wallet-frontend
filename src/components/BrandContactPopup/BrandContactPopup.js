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

export default class BrandContactPopup extends Component {
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
    console.log(this.state.isModalVisible);

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
            <Text style={styles.popUpText}> Contact </Text>
            <Image
              source={{
                uri:
                  'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/50967370_1673125816120922_6830167314076270592_n.jpg?_nc_cat=106&_nc_oc=AQkr-7lNX5DFB7DSoQ8icspmaCnOTJOA2wXPHZKDdjMi5oq4P7jK2rjiDOXg6zpsdmo&_nc_ht=scontent-hbe1-1.xx&oh=09edef77bc9576d08f98bd592ee95b4c&oe=5DE9C029',
              }}
              style={styles.contactPhoto}
            />
            <Text style={styles.contactName}> Amr Essam </Text>
            <Text style={styles.contactPosition}> Junior web developer </Text>
            <View style={styles.contactMethods}>
              <View style={styles.contactMethod}>
                <Icon name="call" style={styles.contactIcon} />
                <Text style={styles.contactInfo}> 01069899112 </Text>
              </View>
              <View style={styles.contactMethod}>
                <Icon name="mail" style={styles.contactIcon} />
                <Text style={styles.contactInfo}>amressamhamed@gmail.com</Text>
              </View>
              <View style={styles.contactMethod}>
                <Icon name="home" style={styles.contactIcon} />
                <Text style={styles.contactInfo}>
                  Awl Abbas, Nasr City, Cairo
                </Text>
              </View>
            </View>
            <TouchableOpacity
              onPress={this.toggleModal}
              style={styles.hidePopupButton}>
              <Text style={styles.hidePopupButtonText}> Home </Text>
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
    height: width * 0.1,
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
    borderRadius: 5,
    backgroundColor: 'white',
    height: width * 1.2,
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
    fontWeight: 'bold',
    marginTop: -(width * 0.04),
  },
  contactPhoto: {
    marginTop: width * 0.05,
    height: width * 0.25,
    width: width * 0.25,
    borderRadius: 10,
  },
  contactName: {
    fontSize: width * 0.05,
    fontWeight: 'bold',
    marginTop: width * 0.03,
  },
  contactPosition: {
    color: '#A9A9A9',
    fontSize: width * 0.04,
  },
  contactMethods: {
    marginTop: width * 0.02,
    width: width * 0.6,
  },
  contactMethod: {
    flexDirection: 'row',
    marginTop: width * 0.02,
    alignItems: 'center',
    borderRadius: 5,
  },
  contactInfo: {
    marginLeft: width * 0.03,
  },
  hidePopupButton: {
    height: width * 0.15,
    width: '70%',
    backgroundColor: '#5ecccf',
    marginTop: width * 0.08,
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
