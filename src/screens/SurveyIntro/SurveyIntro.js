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
import SurveySlideItem from '../../components/SurveySlideItem';
import RoundedBG from '../../components/RoundedBG';


export default class SurveyIntro extends Component {

  takeSurvey = () => {
    this.props.navigation.navigate('SurveyQuestion')
  }
  goToSurvey = (surveyTitle, brandName, brandLogo, brandID, surveyCover, surveyPoints, surveyDuration) => {
    this.props.navigation.navigate('SurveyIntro', { surveyTitle, brandName, surveyCover, surveyPoints, surveyDuration, brandLogo, brandID });
  }
  goToCompanyProfile = (brandID) => {

    this.props.navigation.navigate('CompanyProfile', { brandID })
  }

  render() {
    return (
      <Container>
        <ScrollView>
          <RoundedBG />
          <SideLogoCard
            surveyTitle={this.props.navigation.getParam('surveyTitle')}
            brandName={this.props.navigation.getParam('brandName')}
            surveyCover={this.props.navigation.getParam('surveyCover')}
            brandLogo={this.props.navigation.getParam('brandLogo')}
            brandLogoPressed={()=>this.goToCompanyProfile(this.props.navigation.getParam('brandID'))}
            points={this.props.navigation.getParam('surveyPoints')}
            duration={this.props.navigation.getParam('surveyDuration')}
          />

          <View style={styles.aboutSection}>
            <Text style={styles.title}> ABOUT US </Text>
            <Text style={styles.aboutBody}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. orum.
            </Text>
          </View>

          <POSButton title="Take This Survey Now" style={styles.btnLogin} pressed={this.takeSurvey} />
          <Content padder>
            <Text style={styles.sideTitle}>Top Surveys For You : </Text>

            <ScrollView horizontal={true}>
              <SurveySlideItem
                cover="https://www.pcclean.io/wp-content/gallery/messi-hd-wallpapers/Messi-HD-78.jpg"
                brandName="Barcelona"
                brandID="1"
                title="Leonel Messi"
                time="10 min"
                points="100"
                brandLogo="https://www.pngfind.com/pngs/m/254-2549567_https-i-postimg-cc-xcrcrwh1-barcelona-crest-new.png"
                pressed={this.goToSurvey}
              />
              <SurveySlideItem
                cover="https://wallpapersite.com/images/wallpapers/cristiano-ronaldo-2560x1440-hd-17168.jpg"
                brandName="Juventus"
                brandID="2"
                title="Ronaldo"
                time="7 min"
                points="77"
                brandLogo="https://abeon-hosting.com/images/escudo-juventus-png-7.png"
                pressed={this.goToSurvey}
              />
              <SurveySlideItem
                cover="https://images2.alphacoders.com/961/961964.jpg"
                brandName="Liverpool"
                brandID="3"
                title="Mohamed Salah"
                time="11 min"
                points="111"
                brandLogo="https://www.trzcacak.rs/myfile/detail/68-688343_-liverpool-pride-liverpool-logo-liverpool-logo-dream.png"
                pressed={this.goToSurvey}
              />
            </ScrollView>
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
    justifyContent: 'center'
  },
  relSurvey: {
    width: WIDTH - 20,
    borderRadius: 50,
    marginVertical: 10,
    alignSelf: 'center',
    overflow: 'hidden',
  },
});
