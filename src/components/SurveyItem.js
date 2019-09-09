import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Content, Icon, Thumbnail, Body, Left , Right } from 'native-base';

import POSButton from '../components/POSButton';

const imgPathes = {
  senses: require('../../assets/images/sensesLogo.png'),
};

const { width: WIDTH, height: Hieght } = Dimensions.get('window');

export default class SurveyItem extends Component {

  handleClick = () => {
    // fire navigation method in user profile screen with following props
    // this.props.pressed(this.props.title, this.props.clientName,this.props.brandLogo,this.props.brandID , this.props.cover, this.props.points, this.props.time);
    this.props.pressed(this.props.surveyID ,this.props.title, this.props.clientName,this.props.brandLogo,this.props.clientID , this.props.cover, this.props.points, this.props.time , this.props.description , this.props.userID , this.props.currencyData );
  }


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
            uri: this.props.brandLogo,
          }}
          style={styles.surveyCover}
        />
        <View>
          <Text note>{this.props.clientName}</Text>
          <Text style={{ fontWeight: 'bold', fontSize: 18 }}>
            {this.props.title}
          </Text>
          <View style={{ flexDirection: 'row' }}>
            <Icon name="time" style={{ color: 'grey' }} />
            <View style={{ flexDirection: 'row', marginTop: 4 }}>
              <Text note> {this.props.time} min |</Text>
              <Thumbnail source={{uri : this.props.currencyData.imageURL}} style={styles.sensesLogo} />
              <Text
                style={{
                  color: '#45b3b5',
                  fontWeight: 'bold',
                  marginRight: 7,
                }}>
                {this.props.points} {this.props.currencyData.symbol}
              </Text>
            </View>
          </View>
        </View>
        <Body />
        <Right>
          <POSButton
            title="GO"
            style={{ borderRadius: 10, width: 0.15 * WIDTH }}
            height={0.15 * WIDTH} 
            pressed = {this.handleClick}
          />
        </Right>
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
