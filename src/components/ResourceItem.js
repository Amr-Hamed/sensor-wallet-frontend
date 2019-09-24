import React, { Component } from 'react';
import { Image, StyleSheet, Text, View, Dimensions } from 'react-native';
import { Content, Icon, Thumbnail, Body, Left, Right } from 'native-base';

import POSButton from './POSButton';

const imgPathes = {
  senses: require('../../assets/images/sensesLogo.png'),
};

const { width: WIDTH, height: Hieght } = Dimensions.get('window');
const baseUrl = "http://192.168.1.39:4000";
const loadingImg = "https://www.fogratravel.pl/events/images/loader.gif";
export default class ResourceItem extends Component {


  constructor(props) {
    super(props);
    this.state = {
      // title : "Loading...",
      // time : "Loading...",
      // brandLogo : 'https://www.fogratravel.pl/events/images/loader.gif',
      // clientName : 'Loading...',
      // points :'Loading...',
      // description: 'Loading...',
      // cover:'',
      points: this.props.resource.amountPerResource,
      clientData: {},
      currencyData: {
        symbol: '',
        imageURL: ''
      },
      resourceData: {},
      loading: false
    }

  }


  componentDidMount = () => {
    // console.log("The Video : ", this.props.resource)
    fetch(baseUrl + '/resource/details', {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      },
      body: JSON.stringify({
        currencyID: this.props.resource.currencyID,
        resourceID: this.props.resource.resourceID,
        clientID: this.props.resource.clientID,
        resourceTypeID: this.props.resource.resourceTypeID
      })
    }).then(res => res.json())
      .then(res => {
        if (this.props.resource.resourceTypeID == 1)
          console.log("Video Res : ", res)
        if (this.props.resource.resourceTypeID == 3)
          console.log("Post Res : ", res)
        if (this.props.resource.resourceTypeID == 2)
          console.log("Survey Res : ", res)

        this.setState({
          //  title : "resource",
          //  time : "5",
          //  brandLogo : res.data.clientData.imageURL,
          //  clientName : res.data.clientData.userName,
          //  points :'10',
          //  description: 'Resource Decription',
          //  cover:'',
          clientData: res.data.clientData,
          currencyData: res.data.currencyData[0],
          resourceData: res.data.resourceData[0],
          loading: false
        })
      }
      )

  }


  handleClick = () => {
    // fire navigation method in user profile screen with following props
    // this.props.pressed(this.props.title, this.props.clientName,this.props.brandLogo,this.props.brandID , this.props.cover, this.props.points, this.props.time);

    // let resourceData = {};
    // if Resource is Video
       let resourceDetails = {
        resourceID: this.props.resource.resourceID,
        resourceData: this.state.resourceData,
        clientData: this.state.clientData, 
        currencyData: this.state.currencyData,
        otherDetails : this.props.resource,
      }
    
    this.props.pressed(resourceDetails);
  }


  render() {
    if (this.state.loading === false)
      return (
        <View
          style={{
            flexDirection: 'row',
            paddingVertical: 10,
            paddingRight: 10,
            borderColor: '#eee',
            borderBottomWidth: 1,
            flex: 1,
            maxHeight: 0.2 * Hieght
          }}>
          <Image
            source={{
              uri: this.state.clientData.imageURL || loadingImg
            }}
            style={styles.surveyCover}
          />
          <View>
            <Text note>{this.state.clientData.userName}</Text>
            <Text style={{ fontWeight: 'bold', fontSize: 18 }}>

              {this.state.resourceData ? this.state.resourceData.title : "Not Returned Well "}
            </Text>
            <View style={{ flexDirection: 'row' }}>
              <Icon name="time" style={{ color: 'grey' }} />
              <View style={{ flexDirection: 'row', marginTop: 4 }}>
                <Text note> {this.state.resourceData ? this.state.resourceData.duration : "5"} min |</Text>
                <Thumbnail source={{ uri: this.state.currencyData.imageURL || loadingImg}} style={styles.sensesLogo} />
                <Text
                  style={{
                    color: '#45b3b5',
                    fontWeight: 'bold',
                    marginRight: 7,
                  }}>
                  {this.state.points} {this.state.currencyData.symbol}
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
              pressed={this.handleClick}
            />
          </Right>
        </View>
      );

    else
      return (
        <View>
          <Text>Loading Resources...</Text>
        </View>
      )
  }
}

const styles = StyleSheet.create({
  surveyCover: {
    height: 70,
    width: 0.1 * WIDTH,
    flex: 1,
    marginRight: 10,
    marginLeft: 5,

    borderRadius: 15,
    marginTop: 0,
  },
  sensesLogo: { width: 20, height: 20, marginHorizontal: 10 },
});
