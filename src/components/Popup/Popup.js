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

export default class Popup extends Component {
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
            <View style={styles.closeButtonContainer}>
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
            <TouchableOpacity onPress={this.toggleModal} style={styles.hidePopupButton}>
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
  popUpContainer: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  popup: {
    borderRadius: 10,
    backgroundColor: 'white',
    height: height * 0.6,
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
  popUpText : {
    fontSize : 22,
  },
  tickImage: {
    height: 100,
    width: 100,
    marginTop : height*0.1
  } , 
  hidePopupButton : {
    height : 60,
    width : '50%',
    backgroundColor : '#5ecccf',
    marginTop : height*0.1 , 
    borderRadius : 10,
    justifyContent : 'center'
  } , 
  hidePopupButtonText : {
    color : 'white',
    fontSize : 22,
    fontWeight : 'bold',
    textAlign : 'center',
  }

});
