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
const baseUrl = "https://bondnbeyond-apigateway.herokuapp.com";

export default class SurveyIntro extends Component {

  state = {
    userID: this.props.navigation.getParam('userID'),
    clientID: this.props.navigation.getParam('clientID'),
    surveyID: this.props.navigation.getParam('surveyID'),
    clientName: this.props.navigation.getParam('clientName'),
    clientImage: '',
    surveyReward: '',
    loading: true,
    userClientSurveys: [],
    showActivity: true
  }

  constructor(props) {
    super(props);
    this.fetchSurveyData();
    // alert()

  }
  componentDidMount = async () => {
    await AsyncStorage.getItem('UserID', (err, userID) => {


      this.setState({
        userID
      })
    })
  }

  componentWillReceiveProps() {
    this.scroll.scrollTo({ x: 0, y: 0, animated: true });
  }

  fetchSurveyData = () => {
    fetch(`${baseUrl}/client/${this.state.clientID}/${this.state.clientName}/profile`)
      .then(res => res.json())
      .then(res =>
        this.setState({
          userClientSurveys: res.data.surveys,
          clientImage: res.data.imageURL
        })
      )
      .then(() => this.setState({
        loading: false,
        showActivity: false
      }))
  }

  takeSurvey = () => {

    this.props.navigation.navigate('SurveyQuestion', { userID: this.state.userID, surveyID: this.state.surveyID, clientID: this.state.clientID, clientName: this.state.clientName, surveyReward: this.props.navigation.getParam('surveyReward') })
  }

  goToSurvey = (surveyID, surveyTitle, clientName, brandLogo, clientID, surveyCover, surveyReward, surveyDuration, surveyDescription, userID, currencyData) => {
    this.props.navigation.navigate('SurveyIntro', { surveyID, surveyTitle, clientName, surveyCover, surveyReward, surveyDuration, brandLogo, clientID, surveyDescription, userID, currencyData });
    // this.scroll.scrollTo({ x: 0, y: 0, animated: true });

  }

  goToCompanyProfile = (clientID, clientName) => {
    console.log('clientID : ' + clientID)
    this.props.navigation.navigate('CompanyProfile', { clientID, clientName })
  }

  // takeSurveyClicked = () => {
  //   this.takeSurvey(this.state.userID , this.state.surveyID, this.state.clientID, this.state.surveyReward)
  // }
  render() {
    return (
      <Container>
        <ScrollView
          ref={(c) => { this.scroll = c }}>
          <RoundedBG />
          <SideLogoCard
            surveyTitle={this.props.navigation.getParam('surveyTitle')}
            brandName={this.props.navigation.getParam('clientName')}
            surveyCover={this.props.navigation.getParam('surveyCover')}
            brandLogo={this.props.navigation.getParam('brandLogo')}
            brandLogoPressed={() => this.goToCompanyProfile(this.props.navigation.getParam('clientID'), this.props.navigation.getParam('clientName'))}
            points={this.props.navigation.getParam('surveyReward')}
            duration={this.props.navigation.getParam('surveyDuration')}
            currencyData={this.props.navigation.getParam('currencyData')}
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
                  userID={this.state.userID}
                  surveyID={survey.surveyID}
                  clientID={this.state.clientID}
                  cover={survey.imageURL || survey.surveyCreatorImageURL || surveyCover}
                  clientName={this.state.clientName}
                  title={survey.title}
                  time={survey.duration}
                  points={survey.amountPerSurvey}
                  brandLogo={this.state.clientImage || clientAvatar}
                  pressed={this.goToSurvey}
                  key={survey.surveyID}
                  description={survey.description}
                  currencyData={survey.rewardCurrency}
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
