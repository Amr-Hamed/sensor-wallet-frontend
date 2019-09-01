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
  Content,
  Spinner
} from 'native-base';
const { width: WIDTH, height: Hieght } = Dimensions.get('window');

import SideLogoCard from '../../components/SideLogoCard';
import POSButton from '../../components/POSButton';
import SurveySlideItem from '../../components/SurveySlideItem';
import RoundedBG from '../../components/RoundedBG';

// Define Some Constants for default Values  
const surveyCover = "https://www.helpscout.com/images/blog/2018/feb/customer-survey.png";
const clientAvatar = "https://sherkatdaran.com/wp-content/uploads/2018/04/teamwork-and-brainstorming-concept_1325-637.jpg"


export default class SurveyIntro extends Component {

  state = {
    userID: this.props.navigation.getParam('userID'),
    clientID: this.props.navigation.getParam('clientID'),
    surveyID: this.props.navigation.getParam('surveyID'),
    clientName : this.props.navigation.getParam('clientName'),
    surveyReward: '',
    loading: true,
    userClientSurveys: [],
    showActivity : true
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
        loading: false , 
        showActivity : false
      }))
  }
  takeSurvey = () => {
    this.props.navigation.navigate('SurveyQuestion', {userID : this.state.userID , surveyID : this.state.surveyID, clientID : this.state.clientID,clientName : this.state.clientName ,surveyReward : this.state.surveyReward})
  }
  goToSurvey = () => {
    this.props.navigation.navigate('SurveyIntro');
  }
  goToCompanyProfile = (brandID) => {

    this.props.navigation.navigate('CompanyProfile', { brandID })
  }

  // takeSurveyClicked = () => {
  //   this.takeSurvey(this.state.userID , this.state.surveyID, this.state.clientID, this.state.surveyReward)
  // }
  render() {
    return (
      <Container>
        <ScrollView>
          <RoundedBG />
          <SideLogoCard
            surveyTitle={this.props.navigation.getParam('surveyTitle')}
            brandName={this.props.navigation.getParam('clientName')}
            surveyCover={this.props.navigation.getParam('surveyCover')}
            brandLogo={this.props.navigation.getParam('brandLogo')}
            brandLogoPressed={() => this.goToCompanyProfile(this.props.navigation.getParam('brandID'))}
            points={this.props.navigation.getParam('surveyReward')}
            duration={this.props.navigation.getParam('surveyDuration')}

          />

          <View style={styles.aboutSection}>
            <Text style={styles.sideTitle}> Survey Description  </Text>
            <Text style={styles.aboutBody}>
              {this.props.navigation.getParam('surveyDescription')}
            </Text>
          </View>

          <POSButton title="Take This Survey Now" style={styles.btnLogin} pressed={this.takeSurvey} />
          <Content padder>
            <Text style={styles.sideTitle}>Top Surveys For You </Text>
            <View style={[styles.container, styles.horizontal]}>
            <Spinner size="large" color="#45b3b5" style={{ display: this.state.showActivity ? 'flex' : 'none' }} />
          </View>
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
  sideTitle: {
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Rubik-Regular',
    alignSelf: 'center',
    color: "#333",
    borderColor: "#333",
    borderTopWidth: 2,
    borderBottomWidth: 2,
    marginVertical: 20,
    paddingVertical: 10
  }
});
