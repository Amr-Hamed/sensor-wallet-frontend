import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  Content,
  Header,
  Left,
  Right,
  Body,
  Title,
  Thumbnail,
  Icon,
} from 'native-base';

const { width: WIDTH, height: Hieght } = Dimensions.get('window');
const imgPathes = {
  senses: require('../../assets/images/sensesLogo.png'),
};

export default class SideLogoCard extends Component {
  render() {
    return (
      <Header
        style={{
          backgroundColor: '#212121',
          height: 0.13 * Hieght,
          paddingTop: 25, 
        }}>
        <Left> 
          <TouchableOpacity onPress={this.props.toggleMenu} >
          <Icon
          name='menu'
            style={{ width: 25, height: 25, marginLeft: 5 , color:'white' }}
          />
        </TouchableOpacity>
        </Left>
        <Body style={{ flexDirection: 'row' }}>
          <Thumbnail source={imgPathes.senses} style={styles.sensesLogo} />
          <Title>Sensor Wallet</Title>
        </Body>
        <Right>
          <Icon name="notifications-outline" style={{ color: 'grey' }} />
        </Right>
      </Header>
    );
  }
}

const styles = StyleSheet.create({
  sensesLogo: { width: 30, height: 30, marginHorizontal: 20 },
});
