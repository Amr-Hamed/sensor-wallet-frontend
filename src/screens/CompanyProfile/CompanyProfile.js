import React, { Component } from 'react';
import {
  Image,
  StyleSheet,
  Text,
  ScrollView,
  Dimensions,
  View,
  TouchableOpacity,
} from 'react-native';
import {
  Content,
  Container,
  Card,
  CardItem,
  Thumbnail,
  Left,
  Body,
} from 'native-base';

const { width: WIDTH, height: Hieght } = Dimensions.get('window');
const imgPathes = {
  senses: require('../../../assets/images/sensesLogo.png'),
};

import POSHeader from '../../components/POSHeader';
import POSButton from '../../components/POSButton';
import CompanyProfileCard from '../../components/CompanyProfileCard';
import VoucherBtn from '../../components/VoucherBtn';
import RelatedSurvey from '../../components/RelatedSurvey';
import Service from '../../components/Service';
import RoundedBG from '../../components/RoundedBG';
import SurveySlideItem from '../../components/SurveySlideItem';

// const coreApi = "http://demo9744643.mockable.io/" ; 
const coreApi = "http://192.168.1.39:4000" ; 
const surveyCover = "https://www.helpscout.com/images/blog/2018/feb/customer-survey.png";
const clientAvatar = "https://sherkatdaran.com/wp-content/uploads/2018/04/teamwork-and-brainstorming-concept_1325-637.jpg" ;


export default class CompanyProfile extends Component {


  constructor(props){
    super(props);

    this.state = {
      clientID : '',
      clientName : '' , 
      clientImage : 'https://www.fogratravel.pl/events/images/loader.gif' , 
      cover : 'https://www.fogratravel.pl/events/images/loader.gif', 
      surveys : [] , 
      bio : '' , 

    }

    // alert(`${coreApi}/client/${this.props.navigation.getParam('clientID')}/${this.props.navigation.getParam('clientName')}/profile`) ; 
   
   
    // fetching Client Data From API
    fetch(`${coreApi}/client/${this.props.navigation.getParam('clientID')}/${this.props.navigation.getParam('clientName')}/profile`)
    .then(res => res.json())
    .then(res=>{
      this.setState({
        clientID : res.data.clientID , 
        clientName : res.data.userName , 
        clientImage : res.data.imageURL , 
        cover : res.data.cover , 
        surveys : res.data.surveys , 
        bio : res.data.bio
      })
    }) 
    // .catch(err => alert(err))


  }

  goToSurvey = (surveyID, surveyTitle, clientName, brandLogo, clientID, surveyCover, surveyReward, surveyDuration, surveyDescription, userID, currencyData) => {
    this.props.navigation.navigate('SurveyIntro', { surveyID, surveyTitle, clientName, surveyCover, surveyReward, surveyDuration, brandLogo, clientID, surveyDescription, userID, currencyData });
  }
  goToService = () => {
    this.props.navigation.navigate('ServiceDetails')
  }
  render() {
    return (
      <Container>
        <ScrollView>
          <RoundedBG />
          <CompanyProfileCard
            cardTitle={this.state.clientName}
            cardNote="Since 1971"
            coverUrl={this.state.cover}
            profilePicUrl={this.state.clientImage || this.state.clientImage}
          />

          <Content padder>
            <Text style={styles.title}>BIO</Text>
            <Text>{this.state.bio}</Text>
            <View style={{ flexDirection: 'row', alignContent: 'center' }}>
              <POSButton style={styles.btn} title="Contact" height= {0.1 * WIDTH}  />
              <POSButton style={styles.btn} title="More" height= {0.1 * WIDTH}  />
            </View>

            <VoucherBtn points="30" value="25" style={{ marginVertical: 10 }} />

            <Content padder>
            <Text style={styles.sideTitle}>Company Surveys For You : </Text>


            <ScrollView horizontal={true}>
            {this.state.surveys.length !== 0 ?
                <ScrollView horizontal={true}>

                  {this.state.surveys.map((survey) =>
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
                :
                <View>
                  <Text style={{ alignSelf: 'center' }}> Sorry but There is no Surveys For you </Text>
                </View>
              }
            </ScrollView>
          </Content>

            <View style={styles.services}>
              <Text style={styles.sideTitle}>Services</Text>
              <Service serviceName="UI/UX" pressed = {this.goToService} />
              <Service serviceName="Development" pressed = {this.goToService}/>
              <Service serviceName="Coffee" pressed = {this.goToService} />
            </View>
          </Content>
        </ScrollView>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  title: {
    fontSize: 20,
    alignSelf: 'center',
    marginVertical: 10,
  },
  btn: {
    width: 0.35 * WIDTH,
    margin: 20,
    borderRadius: 10,
  },
  sideTitle: {
    marginVertical: 16,
    fontSize: 14,
    marginLeft: 10,
  },
  services: {
    borderTopWidth: 1,
    borderTopColor: '#eee',
  },
});
