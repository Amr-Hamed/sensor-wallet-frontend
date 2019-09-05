import React from 'react';
import { View, Text, Image, TextInput, StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

import { Icon , Header } from 'native-base';

import Navbar from '../../components/Navbar/Navbar';
import SearchBar from '../../components/SearchBar/SearchBar';

export default class UserSurveyHomePage extends React.Component {
  state = {};

  constructor(props){
    super(props); 
    // alert(this.props.navigation.getParam('userID'))
  }

  render() {
    return (
      <View style={styles.main}>
        <Header style={{backgroundColor:"#333"}} />
        <SearchBar />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
  },
 
});
