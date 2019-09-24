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

const defaultSenses = "https://upload.wikimedia.org/wikipedia/en/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png" ; 
const { width: WIDTH, height: Hieght } = Dimensions.get('window');
const loadingImgURL = 'https://www.fogratravel.pl/events/images/loader.gif';
const baseUrl = "http://192.168.1.39:4000";


export default class SurveySlideItem extends Component {

  constructor(props) {
    super(props);
    this.state = {
      // cover : loadingImgURL , 
      // title: '',
      // time:'',
      // points: this.props.resource.amountPerResource,
      // currencyData:{
      //   symbol : '',
      //   imageURL:loadingImgURL
      // } ,
      // resourceID : this.props.resource.resourceID , 
      // resourceData : {}
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
componentDidMount = async()=>{
 await fetch(baseUrl+'/resource/details',{
    method : "POST",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      currencyID: this.props.resource.currencyID,
      resourceID: this.props.resource.resourceID,
      clientID: this.props.resource.clientID,
      resourceTypeID:this.props.resource.resourceTypeID
    })
  }).then(res => res.json())
  .then(res => {
 
    // console.log("Resource Res : ",res)
    this.setState({
      // brandLogo : res.data.clientData.imageURL,
      // clientName : res.data.clientData.userName,
      // cover:res.data.clientData.imageURL,
      // currencyData:res.data.currencyData[0],
      // loading:false, 
      // resourceData : res.data.resourceData[0]
      clientData: res.data.clientData,
      currencyData: res.data.currencyData[0],
      resourceData: res.data.resourceData[0],
      loading: false
     })
   }
  )
}
  // handleClick = () => {
  //   // fire navigation method in user profile screen with following props
  //   this.props.pressed(this.props.surveyID ,this.props.title, this.props.clientName,this.props.brandLogo,this.props.clientID ,  this.props.cover, this.props.points, this.props.time , this.props.description , this.props.userID  , this.props.currencyData);
  // }

  handleClick = ()=> {
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
    return (
      <TouchableOpacity onPress={this.handleClick}>


        <Content style={this.props.style}>
          <Card style={{ borderRadius: 20, width: WIDTH - 50 }} >
            <CardItem cardBody style={{ marginTop: 20 }}>
              <Image
                source={{
                  uri:
                    this.state.resourceData.imageURL||loadingImgURL,
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
            <CardItem footer style = {{ borderBottomRightRadius : 20 , borderBottomLeftRadius : 20}}>
              <View style={{}}>
                <Text note style={styles.brandName}>{this.props.resource.clientName}</Text>
                <Text style={styles.title}>{this.state.resourceData.title}</Text>
                <View style={{ flexDirection: 'row', width: 0.3 * WIDTH }}>
                  <Icon name="time" style={{ color: 'grey', marginRight: 2 }} />
                  <Text style={styles.time}>{this.state.resourceData.duration} min </Text>
                </View>
              </View>
              <Body>
                <Text> </Text>
              </Body>

              <Right style={{ flexDirection: 'column', alignItems: 'baseline', paddingTop: -0.1 * WIDTH }} >
                <View style={{ flexDirection: 'row' }}>
                  <Thumbnail source={{uri : this.state.currencyData.imageURL}} style={styles.sensesLogo} />
                  <Text
                    style={{
                      color: '#45b3b5',
                      fontWeight: 'bold',
                      marginRight: 4,
                    }}>
                    {this.state.points} 
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
  clientName: {
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
