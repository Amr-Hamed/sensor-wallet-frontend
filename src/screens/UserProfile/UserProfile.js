import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, View, ScrollView, TouchableOpacity } from 'react-native';
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
import Swiper from 'react-native-swiper';

import POSHeader from '../../components/POSHeader';
import POSButton from '../../components/POSButton';
import UserProfileCard from '../../components/UserProfileCard';
import SurveySlideItem from '../../components/SurveySlideItem';
import SurveyItem from '../../components/SurveyItem';
import FeaturedSurveys from '../../components/FeaturedSurveys';
import { ThemeConsumer } from 'react-native-elements';

const imgPathes = {
  senses: require('../../../assets/images/sensesLogo.png'),
  qrCode: require('../../../assets/images/qr-code.png') , 
  profileAvatar : require('../../../assets/images/user.png')
};

const { width: WIDTH, height: Hieght } = Dimensions.get('window');



export default class CardImageExample extends Component {

  constructor(props) {
    super(props);
    this.state = {
      baseUrl : "http://demo9744643.mockable.io/" , 
      userName : '' , 
      profileAvatar : "https://image.flaticon.com/icons/svg/149/149071.png"
    }

    fetch(this.state.baseUrl + "users/1")
    .then(res => res.json())
    .then(res => {
      this.setState({
        userName : res.userName , 
        profileAvatar: res.profileImgUrl
      })
    })
  }



  goToSurvey = (surveyTitle, brandName,brandLogo,brandID, surveyCover, surveyPoints, surveyDuration) => {
    this.props.navigation.navigate('SurveyIntro', { surveyTitle, brandName, surveyCover, surveyPoints, surveyDuration , brandLogo , brandID}) ; 
}

  goToQRCode = () => {
    this.props.navigation.navigate('UserQRCode');
  }
  
  goToWallet = () => {
    this.props.navigation.navigate('UserWallet');
  }


  render() {
    return (
      <Container>
        <FeaturedSurveys />

        <ScrollView>
          <UserProfileCard
            id="26654"
            name= {this.state.userName}
            rating="4.5"
            numberOfSurveys="200"
            hours="20"
            score="12,886"
            profileImg={this.state.profileAvatar}
            walletClcked = {this.goToWallet} 
          />
          <Content padder >
            <View style={{ flexDirection: 'row' }} >

              <Left>
                <POSButton
                  title="NEW SCAN"
                  style={styles.newScanBtn}
                  height={0.15 * WIDTH}
                  pressed={()=> alert(" Comming Soon")}
                />
              </Left>
              <Body></Body>
              <Right>
                <TouchableOpacity onPress = {this.goToQRCode} ><Image source={imgPathes.qrCode} style={styles.QRCodeBtn} /></TouchableOpacity>
              </Right>
            </View>
          </Content>
          <Content padder>
            <Text style={styles.sideTitle}>Top Surveys For You : </Text>

            <ScrollView horizontal={true}>
              <SurveySlideItem
                cover="https://www.pcclean.io/wp-content/gallery/messi-hd-wallpapers/Messi-HD-78.jpg"
                brandName="Barcelona"
                brandID = "1"
                title="Leonel Messi"
                time="10 min"
                points="100"
                brandLogo = "https://www.pngfind.com/pngs/m/254-2549567_https-i-postimg-cc-xcrcrwh1-barcelona-crest-new.png"
                pressed={this.goToSurvey}
              />
              <SurveySlideItem
                cover="https://wallpapersite.com/images/wallpapers/cristiano-ronaldo-2560x1440-hd-17168.jpg"
                brandName="Juventus"
                brandID = "2"
                title="Ronaldo"
                time="7 min"
                points="77"
                brandLogo="https://abeon-hosting.com/images/escudo-juventus-png-7.png"
                pressed={this.goToSurvey}
              />
              <SurveySlideItem
                cover="https://images2.alphacoders.com/961/961964.jpg"
                brandName="Liverpool"
                brandID = "3"
                title="Mohamed Salah"
                time="11 min"
                points="111"
                brandLogo="https://www.trzcacak.rs/myfile/detail/68-688343_-liverpool-pride-liverpool-logo-liverpool-logo-dream.png"
                pressed={this.goToSurvey}
              />
            </ScrollView>
          </Content>
          <SurveyItem
            brandName="Orange"
            title="Orange Survey"
            time="00:30 min"
            points="50"
            brandCover="https://logoeps.com/wp-content/uploads/2011/06/orange-logo-vector.png"
          />
          <SurveyItem
            brandName="Adidas"
            title="Adidas Survey"
            time="00:20 min"
            points="70"
            brandCover="https://ak5.picdn.net/shutterstock/videos/32508595/thumb/8.jpg"
          />
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  newScanBtn: { borderRadius: 10, width: 0.7 * WIDTH },
  sideTitle: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Rubik-Regular'
   },
  QRCodeBtn: {
    width: 0.15 * WIDTH,
    height: 0.15 * WIDTH,
  }
});
