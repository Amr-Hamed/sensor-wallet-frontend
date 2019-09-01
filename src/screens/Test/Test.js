import React from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';

export default class UserPlaceRedeem extends React.Component {
  constructor(props) {
    super(props);
    alert(this.props.navigation.getParam('userID'))
  }
  render() {
    return ;
  }
}
