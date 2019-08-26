import React from 'react';
import { View, Image, Text, StyleSheet } from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

export default class Navbar extends React.Component {
  render() {
    return (
      <View style={styles.navbar}>
        <FontAwesomeIcon
          style={styles.headerIcon}
          icon={faBars}
          color={'white'}
          size={20}
        />
        <View style={styles.logoAndTitleContainer}>
          <Image
            source={require('../../../assets/images/sensesLogo.png')}
            style={styles.sensesLogo}
          />
          <Text style={styles.navbarTitle}>Sensor Wallet</Text>
        </View>
        <FontAwesomeIcon
          style={styles.headerIcon}
          icon={faBell}
          color={'white'}
          size={20}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  navbar: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    height: '20%',
    backgroundColor : '#212121'
  },
  logoAndTitleContainer: {
    width: '45%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  sensesLogo: {
    height: 30,
    width: 30,
  } , 
  navbarTitle: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  }
})
