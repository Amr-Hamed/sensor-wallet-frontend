import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  Dimensions,
  View,

} from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';

const { width: WIDTH, height: Hieght } = Dimensions.get('window');

export default class POSButton extends Component {

  componentDidMount = () => {
  }

  handleClick = () => {
    this.props.pressed();
  }

  render() {
    return (
      <View style={[styles.btnContainer, this.props.style]}>
        <TouchableOpacity
          style={{
            height: this.props.height,
            borderRadius: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
          onPress={this.handleClick}>
          <Text style={styles.text}>{this.props.title}</Text>
        </TouchableOpacity>
      </View>
    );
  }
}

const styles = StyleSheet.create({

  btnContainer: {
    backgroundColor: '#45b3b5',
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,
    elevation: 10
  },
  text: {
    color: '#eee',
    fontSize: 20,
    fontWeight: 'bold',
    alignSelf: 'center',

  },
});
