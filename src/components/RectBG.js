import React, { Component } from 'react';
import { Image, StyleSheet, View, Dimensions, Text } from 'react-native';
import { Content } from 'native-base';

const { width: WIDTH, height: Hieght } = Dimensions.get('window');

export default class RectBG extends Component {
  render() {
    return (
      <View
        style={{
          width: WIDTH,
          height: 0.25 * Hieght,
          backgroundColor: '#333',
          borderBottomRightRadius: 3,
          borderBottomLeftRadius: 3,
          position: 'absolute',
        }}
      />
    );
  }
}

const styles = StyleSheet.create({});
