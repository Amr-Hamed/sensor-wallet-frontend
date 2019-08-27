import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Dimensions, TouchableOpacity } from 'react-native';
import {
  Content,
  Card,
  CardItem,
  Left,
  Body,
  Right,
  Thumbnail,
  Icon,
} from 'native-base';
// import { TouchableOpacity } from 'react-native-gesture-handler';

const imgPathes = {
  senses: require('../../assets/images/sensesLogo.png'),
};
const { width: WIDTH, height: Hieght } = Dimensions.get('window');

export default class SurveySlideItem extends Component {

  constructor(props) {
    super(props);
  }

  handleClick = () => {
    // fire navigation method in user profile screen with following props
    this.props.pressed(this.props.title, this.props.brandName,this.props.brandLogo,this.props.brandID , this.props.cover, this.props.points, this.props.time);
  }

  render() {
    return (
      <TouchableOpacity onPress={this.handleClick}>


        <Content style={this.props.style}>
          <Card style={{ borderRadius: 20, width: WIDTH - 50 }} >
            <CardItem cardBody style={{ marginTop: 20 }}>
              <Image
                source={{
                  uri:
                    this.props.cover,
                }}
                style={{
                  height: 200,
                  width: null,
                  flex: 1,
                  borderRadius: 20,
                  marginHorizontal: 20,
                }}
              />
            </CardItem>
            <CardItem>
              <View style={{}}>
                <Text note style={styles.brandName}>{this.props.brandName}</Text>
                <Text style={styles.title}> {this.props.title} </Text>
                <View style={{ flexDirection: 'row', width: 0.3 * WIDTH }}>
                  <Icon name="time" style={{ color: 'grey', marginRight: 2 }} />
                  <Text style={styles.time}>{this.props.time} min</Text>
                </View>
              </View>
              <Body>
                <Text> </Text>
              </Body>

              <Right style={{ flexDirection: 'column', alignItems: 'baseline', paddingTop: -0.1 * WIDTH }} >
                <View style={{ flexDirection: 'row' }}>
                  <Thumbnail source={imgPathes.senses} style={styles.sensesLogo} />
                  <Text
                    style={{
                      color: '#45b3b5',
                      fontWeight: 'bold',
                      marginRight: 4,
                    }}>
                    {this.props.points}
                  </Text>
                </View>
              </Right>
            </CardItem>
          </Card>
        </Content>
      </TouchableOpacity>


    );
  }
}

const styles = StyleSheet.create({
  brandName: {
    color: 'grey',
    fontSize: 12
  },
  title: {
    color: "#333",
    fontSize: 18,
    fontWeight: "bold"
  },
  time: {
    color: 'grey',
    marginBottom: -10
  }
  , sensesLogo: { width: 20, height: 20, marginHorizontal: 10 },
});
