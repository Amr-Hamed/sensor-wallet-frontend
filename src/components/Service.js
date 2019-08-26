import React, { Component } from 'react';
import { Image, StyleSheet, Text, Dimensions, View } from 'react-native';
import { Content } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

const { width: WIDTH, height: Hieght } = Dimensions.get('window');

export default class SideLogoCard extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <LinearGradient
          colors={['#5ecccf', '#45b3b5']}
          style={styles.serviceBlock}>
          <Text style={styles.serviceName}> {this.props.serviceName} </Text>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  serviceBlock: {
    width: WIDTH - 50,
    height: 0.2 * Hieght,
    alignSelf: 'center',
    alignItems: 'center',
    alignContent: 'center',
    borderRadius: 15,
    paddingVertical: 0.08 * Hieght,
    marginVertical: 15,
  },
  serviceName: {
    color: '#eee',
    fontWeight: 'bold',
    fontSize: 20,
    alignSelf: 'center',
  },
});
