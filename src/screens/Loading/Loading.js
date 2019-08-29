import React from 'react';
import { View, Image, StyleSheet, Dimensions } from 'react-native';

const imgPathes = {
  loadingImg: require('../../../assets/images/loading.gif'),

};
const { width: WIDTH, height: Hieght } = Dimensions.get('window');

export default class UserPlaceRedeem extends React.Component {

  

  render() {
    return (
      <View style={styles.container}>
        <Image source={imgPathes.loadingImg} style={styles.loadingImg} />
      </View>
    );
  }
}

let styles = StyleSheet.create({
  loadingImg: {

  },
  container: {
    height: Hieght,
    flex: 1,
    alignContent: 'center',
    justifyContent: 'center',
    alignItems: 'center',
    zIndex: 99999
  }
});