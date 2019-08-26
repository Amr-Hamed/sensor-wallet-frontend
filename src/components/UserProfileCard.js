import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, View } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Text,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';


const imgPathes = {
  senses: require('../../assets/images/sensesLogo.png'),
};

const { width: WIDTH, height: Hieght } = Dimensions.get('window');

export default class UserProfileCard extends Component {
  render() {
    return (
      <Content style={{borderRaduis:10}} padder>
        <Card style={{borderRaduis:10}}>
          <CardItem>
            <Left>
              <Thumbnail
                style={{ borderRadius: 10 }}
                source={{
                  uri: this.props.profileImg,
                }}
              />
              <Body>
                <Text>{this.props.name}</Text>
                <Text note>ID: {this.props.id}</Text>
              </Body>
            </Left>
          </CardItem>

          <CardItem style={{ borderTopWidth: 1, borderColor: '#eee' }}>
            <Left>
              <Icon active name="star" style={{ color: 'gold' }} />
              <Text>
                {this.props.rating}<Text style={{ color: 'grey' }}>({this.props.numberOfSurveys})</Text>
              </Text>
            </Left>
            <Left style={{ marginLeft: 0.1 * WIDTH }}>
              <Icon active name="time" style={{ color: 'grey' }} />
              <Text style={{}}>{this.props.hours} h</Text>
            </Left>
            <Right style={{ flexDirection: 'row' }}>
              <Thumbnail source={imgPathes.senses} style={styles.sensesLogo} />
              <Text
                style={{
                  color: '#45b3b5',
                  fontWeight: 'bold',
                  marginRight: 7,
                }}>
                {this.props.score}
              </Text>
            </Right>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  sensesLogo: { width: 20, height: 20, marginRight: 10 },
});
