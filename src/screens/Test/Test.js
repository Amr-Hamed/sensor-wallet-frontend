import React from 'react';
import { Text, View, Image, TextInput, StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

export default class UserPlaceRedeem extends React.Component {
   
  render() {
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <View style={styles.navbar}>
            <View style={styles.sidebarIconContainer}>
              <FontAwesomeIcon
                style={styles.headerIcon}
                icon={faBars}
                color={'white'}
                size={20}
              />
            </View>
            <View style={styles.logoAndTitleContainer}>
              <Image
                source={require('../../../assets/images/sensesLogo.png')}
                style={styles.logo}
              />
              <Text style={styles.navTitle}> Sensor Wallet </Text> 
            </View>
            <View style={styles.bellContainer}>
              <FontAwesomeIcon
                style={styles.bellIcon}
                icon={faBell}
                color={'white'}
                size={20}
              />
            </View>
          </View>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>
              You can redeem your Senses here
            </Text>
          </View>
        </View>
      </View>
    );
  }
}

let styles = StyleSheet.create({
  body: {
    height: '100%',
  },
  header: {
    backgroundColor: '#212121',
    height: '25%',
    display: 'none',
  },
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 10,
  },
  sidebarIconContainer: {
    marginLeft: 10,
  },
  logoAndTitleContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '40%',
  },
  logo: {
    height: 20,
    width: 20,
  },
  navTitle: {
    color: 'white',
    fontWeight: 'bold',
  },
  bellContainer: {
    marginRight: 10,
  },
  bellIcon: {
    height: 10,
    width: 10,
  },
  headerTitleContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  headerTitle: {
    color: 'white',
    fontSize: 16,
  },
});