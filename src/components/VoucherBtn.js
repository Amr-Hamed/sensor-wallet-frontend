import React, { Component } from 'react';
import { Image, TouchableOpacity, StyleSheet, Text, View , Dimensions } from 'react-native';
import { Content, Thumbnail } from 'native-base';
import { LinearGradient } from 'expo-linear-gradient';

const imgPathes = {
  senses: require('../../assets/images/sensesLogo.png'),
};
const { width: WIDTH, height: Hieght } = Dimensions.get('window');



export default class VoucherBtn extends Component {
  render() {
    return (
      <View style={this.props.style}>
        <LinearGradient
          colors={['#5ecccf', '#45b3b5']}
          style={styles.voucherBtn}>
          <TouchableOpacity
            style={{ height: 55, borderRadius: 10, flexDirection: 'row' }}>
            <Text style={styles.text}> GET VOUCHER {this.props.value}% NOW ! </Text>
            <View
              style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                margin: 10,
                alignItems: 'center',
                borderRadius: 5,
              }}>
              <Thumbnail source={imgPathes.senses} style={styles.sensesLogo} />
              <Text
                style={{
                  color: '#45b3b5',
                  fontWeight: 'bold',
                  marginRight: 7,
                }}>
                {this.props.points}
              </Text>
            </View>
          </TouchableOpacity>
        </LinearGradient>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  voucherBtn: {
    width: 0.95 * WIDTH,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent:'center',
    display:'flex'
  },
  text: {
    marginTop: 7,
    color: '#eee',
    fontSize: 17,
    fontWeight: 'bold',
    alignSelf: 'center',
  },
  sensesLogo: { width: 20, height: 20, marginHorizontal: 10 },
});
