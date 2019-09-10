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
    fetch('http://demo8354958.mockable.io/userRedeemPlace')
      .then(res => {
        return res.json();
      })
      .then(myJson => {
        this.setState({
          placesLogos: myJson.places,
        });
      });
  }
  render() {
    let placeLogoRows = [];
    for (let i = 0; i < this.state.placesLogos.length; i += 2) {
      let placeLogoRow = (
        <View style={styles.placesLogoRow} key={i}>
          <View style={styles.placeLogoConainer}>
            <RedeemPlaceContainer placeLogo={this.state.placesLogos[i].logo} />
          </View>
          <View style={styles.placeLogoConainer}>
            <RedeemPlaceContainer placeLogo={this.state.placesLogos[i + 1].logo} />
          </View>
        </View>
      );
      placeLogoRows.push(placeLogoRow);
    }
    return (
      <ScrollView style={styles.body}>
        <View style={styles.header}>
          <View style={styles.headerTitleContainer}>
            <Text style={styles.headerTitle}>You can use Senses in</Text>
          </View>
        </View>
        <View style={styles.main}>
          <View style={styles.dropDownContainer}>
            {/* <Dropdown style={styles.dropDown} /> */}
          </View>
          <View style={styles.content}>
            {placeLogoRows}
          </View>
        </View>
      </ScrollView>
    );
  }
}

const screenWidth = Math.round(Dimensions.get('window').width);

const styles = StyleSheet.create({
  body: {
    width: '100%',
    // marginBottom : screenWidth*0.1,
  },
  header: {
    height: screenWidth*0.4,
    backgroundColor: '#212121',
  },
  headerTitleContainer: {
    width: '100%',
    marginTop: screenWidth*0.15,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle : {
    color : 'white',
    fontSize : screenWidth*0.05,
    fontWeight : 'bold'
  },
  main: {
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