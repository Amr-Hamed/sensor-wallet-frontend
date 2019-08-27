import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, View, ScrollView, TouchableOpacity, RefreshControl, AsyncStorage } from 'react-native';
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
import Modal from 'react-native-modal';

import POSHeader from '../../components/POSHeader';
import POSButton from '../../components/POSButton';
import UserProfileCard from '../../components/UserProfileCard';
import SurveySlideItem from '../../components/SurveySlideItem';
import SurveyItem from '../../components/SurveyItem';
import Loading from '../Loading/Loading';
import TransactionConfirm from '../../components/TransactionConfirm';

const imgPathes = {
  senses: require('../../../assets/images/sensesLogo.png'),
  qrCode: require('../../../assets/images/qr-code.png'),
  profileAvatar: require('../../../assets/images/user.png')
};

const { width: WIDTH, height: Hieght } = Dimensions.get('window');

// Define Some Constants for default Values  
const baseUrl = "http://demo9744643.mockable.io/";
const userID = 5;
const surveyCover = "https://www.helpscout.com/images/blog/2018/feb/customer-survey.png";
const clientAvatar = "https://sherkatdaran.com/wp-content/uploads/2018/04/teamwork-and-brainstorming-concept_1325-637.jpg"

export default class UserProfile extends Component {

  constructor(props) {
    super(props);
    this.state = {

      loading: true,
      userID,
      refreshing: false,
      userName: '',
      profileAvatar: "https://image.flaticon.com/icons/svg/149/149071.png",
      userRate: '',
      numberOfTakenSurveys: '',
      durationOfTakenSurveys: '',
      walletID: '',
      senses: '',
      latestSurveys: [],
      recommendedSurveys: [],
      showTransConfirmDialog: false,
      transactionInfo: {},
    }
    this.props.navigation.addListener('didFocus', async () =>

      await this.fetchData()
        .then(() =>
          this.setState({
            showTransConfirmDialog: this.props.navigation.getParam('showTransConfirmDialog') || false,
            transactionInfo: this.props.navigation.getParam('transactionInfo') || {},
          })
        )
    )
  }

  fetchData = async () => {
    await fetch(baseUrl + `endUser/${userID}`)
      .then(res => res.json())
      .then(res => {

        this.setState({
          userName: res.data.userName,
          profileAvatar: res.data.imageURL,
          userRate: res.data.rate,
          numberOfTakenSurveys: res.data.numberOfTakenSurveys,
          durationOfTakenSurveys: res.data.durationOfTakenSurveys,
          walletID: res.data.walletID,
          senses: res.data.senses,
          latestSurveys: res.data.latestSurveys,
          recommendedSurveys: res.data.recommendedSurveys
        });

        AsyncStorage.setItem('UserID', res.data.userID)

      })
      .then(() => this.setState({ loading: false }))
  }
  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  }



  goToSurvey = (surveyTitle, brandName, brandLogo, brandID, surveyCover, surveyPoints, surveyDuration) => {
    this.props.navigation.navigate('SurveyIntro', { surveyTitle, brandName, surveyCover, surveyPoints, surveyDuration, brandLogo, brandID });
  }

  goToQRCode = () => {
    this.props.navigation.navigate('UserQRCode', { userID, userName: this.state.userName, walletID: this.state.walletID });
  }

  goToWallet = () => {
    this.props.navigation.navigate('UserWallet');
  }

  goToScanFriendQR = () => {
    this.props.navigation.navigate('ScanFriendQR', {
      userID,
      userName: this.state.userName,
      senses: this.state.senses
    });
  }

  hidePopup = () => {
    this.setState({
      showTransConfirmDialog: false
    })
  }


  render() {

    if (this.state.loading)
      return (<Loading />);
    else
      return (
        <Container>

          <ScrollView
            // apply Swip Refresh
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            } >
            {/* Show Basic user Profile Data */}
            <UserProfileCard
              id={userID}
              name={this.state.userName}
              rating={this.state.userRate}
              numberOfSurveys={this.state.numberOfTakenSurveys}
              hours={this.state.durationOfTakenSurveys}
              score={this.state.senses}
              profileImg={this.state.profileAvatar}
              walletClcked={this.goToWallet}
            />
            {/* Transactions Sectoin */}
            <Content padder >
              <View style={{ flexDirection: 'row' }} >
                {/* click button to open camera for scan friend QR Code  */}
                <Left>
                  <POSButton
                    title="NEW SCAN"
                    style={styles.newScanBtn}
                    height={0.15 * WIDTH}
                    pressed={this.goToScanFriendQR}
                  />
                </Left>
                <Body></Body>
                {/* Show User QR Code  */}
                <Right>
                  <TouchableOpacity onPress={this.goToQRCode} ><Image source={imgPathes.qrCode} style={styles.QRCodeBtn} /></TouchableOpacity>
                </Right>
              </View>
            </Content>

            <Content padder>
              <Text style={styles.sideTitle}>Latest Surveys :  </Text>
              {/* Show Latest Recommended survays ... max 5 */}
              <ScrollView horizontal={true}>

                {this.state.latestSurveys.map((survey) =>
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
            {/* View All Recommended Surveys */}
            {this.state.recommendedSurveys.map((survey) =>

              <SurveyItem
                surveyID={survey.surveyID}
                brandName={survey.surveyCreatorName}
                title={survey.surveyTitle}
                time={survey.surveyDuration}
                points={survey.surveyReward}
                brandCover={survey.surveyImageURL || survey.surveyCreatorImageURL || clientAvatar}
                brandLogo={survey.surveyCreatorImageURL || clientAvatar}
                pressed={this.goToSurvey}
                cover={survey.surveyImageURL || survey.surveyCreatorImageURL || surveyCover}
                brandID={survey.surveyCreatorID}
                key={survey.surveyID}
              />
            )}
            <Text>{this.state.showTransConfirmDialog}</Text>
          </ScrollView>
          <CardItem style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>


            <Modal
              isVisible={this.state.showTransConfirmDialog}
              style={styles.popUpContainer}>

              <TransactionConfirm
                showModal={this.state.showTransConfirmDialog}
                hidePopup={this.hidePopup}
                transactionInfo={this.state.transactionInfo}
              />
            </Modal>

          </CardItem>
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
  },
  popUpContainer: {
    justifyContent: 'center',
    alignItems: 'center',

  },
});
