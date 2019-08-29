import React, { Component } from 'react';
import { Image, StyleSheet, Text , TouchableOpacity} from 'react-native';
import {
  Container,
  Header,
  Content,
  Card,
  CardItem,
  Thumbnail,
  Button,
  Icon,
  Left,
  Body,
  Right,
} from 'native-base';


const imgPathes = {
  senses: require('../../assets/images/sensesLogo.png'),

}

export default class SideLogoCard extends Component {

handleThumbClick = () => {
  this.props.brandLogoPressed() ; 
  //alert("Clicked");

}

  render() {
    return (
      <>
        <Content padder style={styles.surveyCoverCont}>
          <Card style={{ borderRadius: 8 }}>
            <CardItem cardBody>
              <Image source={{ uri: this.props.surveyCover }} style={styles.surveyCover} />
            </CardItem>
            <CardItem>
              <Left>
                <TouchableOpacity onPress={this.handleThumbClick}>
                  <Thumbnail
                    source={{
                      uri: this.props.brandLogo,
                    }}
                    style={styles.brandLogo}
                  />
                </TouchableOpacity>
                <Body>
                  <Text>{this.props.surveyTitle}</Text>
                  <Text style={{ color: 'grey' }}>{this.props.brandName}</Text>
                </Body>
              </Left>
            </CardItem>

            <CardItem footer bordered>
              <Left>

              </Left>
              <Body style={{ flexDirection: 'row' }}>
                <Icon active name="time" style={styles.icon} />
                <Text style={{ marginTop: 5 }}>{this.props.duration} min</Text>
              </Body>
              <Right style={{ flexDirection: 'row' }} >
                <Thumbnail source={imgPathes.senses} style={styles.sensesLogo} />
                <Text style={{ color: '#137b08' }}>{this.props.points}</Text>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </>

    );
  }
}


const styles = StyleSheet.create({
  surveyCoverCont: { borderRadius: 20 },
  surveyCover: { height: 200, width: null, flex: 1, margin: 15, borderRadius: 10 },
  brandLogo: { borderRadius: 20 },
  icon: { marginHorizontal: 10, color: 'grey' },
  sensesLogo: { width: 20, height: 20, marginHorizontal: 10 },
})
