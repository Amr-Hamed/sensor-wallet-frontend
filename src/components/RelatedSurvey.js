import React, { Component } from 'react';
import { StyleSheet } from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Text,
  Body,
  Left,
  Thumbnail,
  Button,
} from 'native-base';

const imgPathes = {
  senses: require('../../assets/images/sensesLogo.png'),
};

export default class RelatedSurvey extends Component {
  render() {
    return (
      <Content padder style={this.props.style}>
        <Card bordered >
          <CardItem >
            <Left>
              <Body>
                <Text note>{this.props.brandName}</Text>
                <Text style={{ fontWeight: 'bold' }}>{this.props.surveyTitle}</Text>
              </Body>
            </Left>
          </CardItem>
          <CardItem>
            <Left>
              <Text style={{ color: '#137b08' }}>{this.props.points}</Text>
              <Thumbnail source={imgPathes.senses} style={styles.sensesLogo} />
            </Left>
          </CardItem>
          <CardItem footer>
            <Button transparent>
            <Text>View Details</Text>
            </Button>
          </CardItem>
        </Card>
      </Content>
    );
  }
}

const styles = StyleSheet.create({
  sensesLogo: { width: 20, height: 20, marginHorizontal: 10 },
});
