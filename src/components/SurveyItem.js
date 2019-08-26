import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Content, Icon, Thumbnail, Body, Left } from 'native-base';

import POSButton from '../components/POSButton';

const imgPathes = {
  senses: require('../../assets/images/sensesLogo.png'),
};

const { width: WIDTH, height: Hieght } = Dimensions.get('window');

export default class SurveyItem extends Component {
  render() {
    return (
      <View
        style={{
          flexDirection: 'row',
          paddingVertical: 10,
          paddingRight: 10,
          borderColor: '#eee',
          borderBottomWidth: 1,
        }}>
        <Image
          source={{
            uri: this.props.brandCover,
          }}
          style={styles.surveyCover}
        />
        <View>
          <Text note>{this.props.brandName}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            {this.props.title}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="time" style={{ color: 'grey' }} />
            <View style={{ flexDirection: 'row', marginTop: 4 }}>
              <Text note> {this.props.time} |</Text>
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
          </View>
        </View>
        <Body />
        <Left>
          <POSButton
            title="GO"
            style={{ borderRadius: 10, width: 0.15 * WIDTH }}
            height={0.15 * WIDTH}
          />
        </Left>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  surveyCover: {
    height: 70,
    width: null,
    flex: 1,
    marginRight: 10,
    marginLeft: 5,

    borderRadius: 15,
    marginTop: 0,
  },
  sensesLogo: { width: 20, height: 20, marginHorizontal: 10 },
});
