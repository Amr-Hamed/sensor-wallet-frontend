import React from 'react';
import { View, ScrollView, Text, Image, TextInput, StyleSheet, WebView } from 'react-native';
import { Content, Card, CardItem, Body, Container } from 'native-base';

import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faBars, faBell } from '@fortawesome/free-solid-svg-icons';

import { Icon, Header } from 'native-base';

import Navbar from '../../components/Navbar/Navbar';
import WebContetntView from '../WebContetnView/WebContetntView';

import SearchBar from '../../components/SearchBar/SearchBar';
import POSBotton from '../../components/POSButton';
import SurveySlideItem from '../../components/SurveySlideItem';



export default class UserSurveyHomePage extends React.Component {
  state = {};

  constructor(props) {
    super(props);
    // alert(this.props.navigation.getParam('userID'))
  }


  gotoPost = () => {
    this.props.navigation.navigate('WebContent', { url: '' })
  }


  render() {
    return (
      <ScrollView style={styles.main}>
        <SearchBar />
        <Container>

          <Content padder>
            <SurveySlideItem
              userID={this.state.userID}
              surveyID={survey.surveyID}
              clientID={survey.surveyCreatorID}
              cover={survey.imageURL || survey.surveyCreatorImageURL || surveyCover}
              clientName={survey.surveyCreatorName}
              title={survey.title}
              time={survey.duration}
              points={survey.amountPerSurvey}
              brandLogo={survey.surveyCreatorImageURL || clientAvatar}
              pressed={this.goToSurvey}
              key={survey.surveyID}
              description={survey.description}
              currencyData={survey.rewardCurrency}
            />
          </Content>
        </Container>
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
  main: {
    width: '100%',
  },

});
