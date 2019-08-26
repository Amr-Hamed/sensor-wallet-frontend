import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, View, ScrollView } from 'react-native';
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

const imgPathes = {
  senses: require('../../../assets/images/sensesLogo.png'),
};

const { width: WIDTH, height: Hieght } = Dimensions.get('window');

export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
          <FeaturedSurveys />  
        <ScrollView>
          <UserProfileCard
            id="26654"
            name="Mohamed Khaled "
            rating="4.5"
            numberOfSurveys="200"
            hours="20"
            score="12,886"
            profileImg="https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/13718717_1066170630138908_2702957568995397852_n.jpg?_nc_cat=104&_nc_oc=AQmS2AqzHyNGByLYPe-sndCi2LNTR8tJ43Oj9O9EjP33_tIk09AiaQi5q_4ovwR97FQ&_nc_ht=scontent-hbe1-1.xx&oh=f89e8817f4dbb390d602652e0272eb75&oe=5DE1B5EC"
          />
          <Content padder>
            <POSButton
              title="NEW SCAN"
              style={styles.newScanBtn}
              height={0.15 * WIDTH}
            />
          </Content>
          <Content padder>
            <Text style={styles.sideTitle}>Top Surveys For You : </Text>

            <ScrollView horizontal={true}>
              <SurveySlideItem
                cover="https://www.pcclean.io/wp-content/gallery/messi-hd-wallpapers/Messi-HD-78.jpg"
                brandName="Barcelona"
                title="Leonel Messi"
                time="10 min"
                points="100"
              />
              <SurveySlideItem
                cover="https://wallpapersite.com/images/wallpapers/cristiano-ronaldo-2560x1440-hd-17168.jpg"
                brandName="Juventus"
                title="Ronaldo"
                time="7 min"
                points="77"
              />
              <SurveySlideItem
                cover="https://images2.alphacoders.com/961/961964.jpg"
                brandName="Liverpool"
                title="Mohamed Salah"
                time="11 min"
                points="111"
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
  newScanBtn: { borderRadius: 10 },
  sideTitle: {
    fontSize: 20,
    marginBottom: 20,
  },
});
