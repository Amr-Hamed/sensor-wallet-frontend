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
// const baseUrl = "http://192.168.1.39:4000";
const baseUrl = "http://134.209.181.231:4000";

export default class SurveyIntro extends Component {

  state = {
    // userID: this.props.navigation.getParam('userID'),
    // clientID: this.props.navigation.getParam('clientID'),
    // surveyID: this.props.navigation.getParam('surveyID'),
    // clientName: this.props.navigation.getParam('clientName'),
    // clientImage: '',
    // surveyReward: '',
    // loading: true,
    // userClientSurveys: [],
    // showActivity: true
    resourceDetails : this.props.navigation.getParam('resourceDetails')
  }

  constructor(props) {
    super(props);
    console.log("Intro : ", this.state.resourceDetails)
    // this.fetchSurveyData();
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

    this.props.navigation.navigate('SurveyQuestion', { userID: this.state.userID,
      resourceID:this.state.resourceDetails.resourceID, clientID: this.state.clientID, clientName: this.state.clientName, surveyReward: this.props.navigation.getParam('surveyReward') })
  }

  viewPost = () => {
    this.props.navigation.navigate('WebContent', {
      URL : this.state.resourceDetails.resourceData.URL  })
  }
  viewVideo = () => {
    this.props.navigation.navigate('VideoPlayer', {
      URL : this.state.resourceDetails.resourceData.URL ,
      duration :this.state.resourceDetails.resourceData.duration})
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
            surveyTitle={this.state.resourceDetails.resourceData.title}
            brandName={this.state.resourceDetails.clientData.userName}
            surveyCover={this.state.resourceDetails.resourceData.imageURL}
            brandLogo={this.state.resourceDetails.clientData.imageURL}
            brandLogoPressed={() => this.goToCompanyProfile(this.state.resourceDetails.clientData.clientID, this.state.resourceDetails.clientData.userName)}
            points={this.state.resourceDetails.otherDetails.amountPerResource}
            duration={this.state.resourceDetails.resourceData.duration}
            currencyData={this.state.resourceDetails.currencyData}
          />

          <View style={styles.aboutSection}>
            <Text style={styles.sideTitle}> 
            {this.state.resourceDetails.otherDetails.resourceTypeID == 1 ? 
            
            "Video Description"
            : this.state.resourceDetails.otherDetails.resourceTypeID == 2 ?
            "Survey Description"
            : "Post Description"
          }
            </Text>
            <Text style={styles.aboutBody}>
              {this.state.resourceDetails.resourceData.description}
            </Text>
          </View>
          {this.state.resourceDetails.otherDetails.resourceTypeID == 1 ? 
            
            <POSButton title="Watch Video Now" style={styles.btnLogin} pressed={this.viewVideo} />
            : this.state.resourceDetails.otherDetails.resourceTypeID == 2 ?
            <POSButton title="Take This Survey Now" style={styles.btnLogin} pressed={this.takeSurvey} />
            :  <POSButton title="Proceed to Post Now" style={styles.btnLogin} pressed={this.viewPost} />
          }
         
          <Content padder>
            {/* <Text style={styles.sideTitle}>Top Surveys For You </Text> */}
            <View style={[styles.container, styles.horizontal]}>
              <Spinner size="large" color="#45b3b5" style={{ display: this.state.showActivity ? 'flex' : 'none' }} />
            </View>
            {/* <ScrollView horizontal={true}>
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
            </ScrollView> */}
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
