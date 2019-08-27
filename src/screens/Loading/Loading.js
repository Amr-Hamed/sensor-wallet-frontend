import React from 'react';
import {  View, Image, StyleSheet , Dimensions } from 'react-native';

const imgPathes = {
    loadingImg: require('../../../assets/images/loading.gif'),
   
  };

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
    loadingImg : {

    } , 
    container : {
        flex : 1 , 
        alignContent:'center',
        justifyContent:'center' , 
        alignItems:'center'
    }
});