import React from 'react';
import {
  View,
  Text,
  Image,
  TextInput,
  ScrollView,
  Dimensions,
  StyleSheet,
} from 'react-native';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

import Navbar from '../../components/Navbar/Navbar'
import RedeemPlaceContainer from '../../components/RedeemPlaceContainer/RedeemPlaceContainer';
import Dropdown from '../../components/Dropdown/Dropdown';

export default class UserPlaceRedeem extends React.Component {
  state = {
    placesLogos: [],
  };

  componentDidMount() {
    fetch('http://demo8354958.mockable.io/logos')
      .then(res => {
        return res.json();
      })
      .then(myJson => {
        this.setState({
          placesLogos: myJson.placesLogos,
        });
      });
  }
  render() {
    let placeLogoRows = [];
    for (let i = 0; i < this.state.placesLogos.length; i += 2) {
      let placeLogoRow = (
        <View style={styles.placesLogoRow} key={i}>
          <View style={styles.placeLogoConainer}>
            <RedeemPlaceContainer placeLogo={this.state.placesLogos[i]} />
          </View>
          <View style={styles.placeLogoConainer}>
            <RedeemPlaceContainer placeLogo={this.state.placesLogos[i + 1]} />
          </View>
        </View>
      );
      placeLogoRows.push(placeLogoRow);
    }
    console.log(placeLogoRows);
    return (
      <View style={styles.body}>
        <View style={styles.header}>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>You can use Senses in</Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.dropDownContainer}>
            <Dropdown style={styles.dropDown} />
          </View>
          <View style={styles.content}>
            <ScrollView>{placeLogoRows}</ScrollView>
          </View>
        </View>
      </View>
    );
  }
}

const screenWidth = Math.round(Dimensions.get('window').width);
const containerDimension = screenWidth / 3;

const styles = StyleSheet.create({
  body: {
    width: '100%',
    height: '100%',
  },
  header: {
    height: '25%',
    backgroundColor: '#212121',
  },
  headerTitleContainer: {
    width: '100%',
    marginTop: '5%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle : {
    color : 'white',
    fontSize : 19,
    fontWeight : 'bold'
  },
  main: {
    width: '100%',
    height: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  dropDownContainer: {
    width: '70%',
    height: 50,
    borderRadius: 10,
    shadowOffset: { width: 2, height: 2 },
    shadowRadius: 2,
    backgroundColor: 'white',
    marginTop: -25,
  },
  content: {
    width: '100%',
    marginTop: '4%',
  },
  placesLogoRow: {
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom : 20,
  },
  placeLogoConainer: {
    width: 125,
    height: 125,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 4,
    },
    shadowOpacity: 0.3,
    shadowRadius: 4.65,
    elevation: 8,
    backgroundColor: 'white',
    borderRadius: 5,
  },
});
