import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  View,
  TouchableOpacity,
  Dimensions,
  AsyncStorage
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

// Define Some Constants for default Values  
const baseUrl = "http://demo9744643.mockable.io/";
const userID = 5;
const surveyCover = "https://www.helpscout.com/images/blog/2018/feb/customer-survey.png";
const clientAvatar = "https://sherkatdaran.com/wp-content/uploads/2018/04/teamwork-and-brainstorming-concept_1325-637.jpg"


export default class SurveyIntro extends Component {

  state = {
    userID: '',
    loading: true,
    userClientSurveys: []
  }

  constructor(props) {
    super(props);
    this.fetchSurveyData();
    // alert()
    AsyncStorage.getItem('UserID', (err, userID) => {

      this.setState({
        userID
      })
    })
  }

  fetchSurveyData = () => {
    fetch(`https://demo9744643.mockable.io/endUser/5/client/1/surveys`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          userClientSurveys: res.data
        })
      )
      .then(() => this.setState({
        loading: false
      }))
  }
  takeSurvey = () => {
    this.props.navigation.navigate('SurveyQuestion')
  }
  goToSurvey = (surveyTitle, brandName, brandLogo, brandID, surveyCover, surveyPoints, surveyDuration , surveyDescription) => {
    this.props.navigation.navigate('SurveyIntro', { surveyTitle, brandName, surveyCover, surveyPoints, surveyDuration, brandLogo, brandID ,surveyDescription });
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
            brandLogoPressed={() => this.goToCompanyProfile(this.props.navigation.getParam('brandID'))}
            points={this.props.navigation.getParam('surveyPoints')}
            duration={this.props.navigation.getParam('surveyDuration')}
          />

          <View style={styles.aboutSection}>
            <Text style={styles.title}> Survey Description  </Text>
            <Text style={styles.aboutBody}>
              {this.props.navigation.getParam('surveyDescription')}
            </Text>
          </View>

          <POSButton title="Take This Survey Now" style={styles.btnLogin} pressed={this.takeSurvey} />
          <Content padder>
            <Text style={styles.sideTitle}>Top Surveys For You : </Text>

            <ScrollView horizontal={true}>
              {this.state.userClientSurveys.map((survey) =>
                <SurveySlideItem
                  surveyID={survey.surveyID}
                  cover={survey.surveyImageURL || survey.surveyCreatorImageURL || surveyCover}
                  brandName={survey.surveyCreatorName}
                  brandID={survey.surveyCreatorID}
                  title={survey.surveyTitle}
                  time={survey.surveyDuration}
                  points={survey.surveyReward}
                  brandLogo={survey.surveyCreatorImageURL || clientAvatar}
                  pressed={this.goToSurvey}
                  key={survey.surveyID}
                />
              )}
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
