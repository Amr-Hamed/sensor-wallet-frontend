import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
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
  Title,
} from 'native-base';
const { width: WIDTH, height: Hieght } = Dimensions.get('window');

import SideLogoCard from '../../components/SideLogoCard';
import POSButton from '../../components/POSButton';
import RelatedSurvey from '../../components/RelatedSurvey';
import POSHeader from '../../components/POSHeader';
import RoundedBG from '../../components/RoundedBG';


export default class CardImageExample extends Component {
  render() {
    return (
      <Container>
        <ScrollView>
          <RoundedBG /> 
          <SideLogoCard
            surveyTitle="NIKE Survey"
            brandName="NIKE"
            surveyCover="https://images4.alphacoders.com/632/thumb-1920-632661.jpg"
            brandLogo="https://www.thelogocreative.co.uk/wp-conte nt/uploads/Famous-Logos-Nike-The-Logo-Creative-650x406.jpg"
            points="50"
            duration="03 min"
          />

          <View style={styles.aboutSection}>
            <Text style={styles.title}> ABOUT US </Text>
            <Text style={styles.aboutBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. orum.
            </Text>
          </View>

          <POSButton title="Take This Survey Now" style={styles.btnLogin} />
          <Content style={{ flexDirection: 'row' }}>
            <Text style={styles.sideTitle}>OTHER SURVEY </Text>
            <RelatedSurvey
              style={styles.relSurvey}
              brandName="Nike"
              surveyTitle="Survey #2"
              points="70"
            />
            <RelatedSurvey
              style={styles.relSurvey}
              brandName="Nike"
              surveyTitle="Survey #3"
              points="60"
            />
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    alignSelf: 'center',
    marginVertical: 16,
    fontSize: 20,
  },
  sideTitle: {
    marginVertical: 16,
    fontSize: 20,
    marginLeft: 10,
  },
  aboutBody: {
    alignSelf: 'center',
  },
  aboutSection: {
    margin: 20,
  },
  btnLogin: {
    width: WIDTH - 20,
    height: 55,
    borderRadius: 10,
    marginVertical: 20,
    alignSelf: 'center',
  },
  relSurvey: {
    width: WIDTH - 20,
    borderRadius: 50,
    marginVertical: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
});
