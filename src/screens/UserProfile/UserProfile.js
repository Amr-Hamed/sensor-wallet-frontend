import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, View, ScrollView, TouchableOpacity, RefreshControl, AsyncStorage, Modal } from 'react-native';
import {
  Container,
  Content,
  Text,
  Left,
  Body,
  Right,
} from 'native-base';

import { Notifications } from 'expo';
import * as Permissions from 'expo-permissions';


// import Modal from 'react-native-modal';


import POSButton from '../../components/POSButton';
import UserProfileCard from '../../components/UserProfileCard';
import SurveySlideItem from '../../components/SurveySlideItem';
import SurveyItem from '../../components/SurveyItem';
import RectBG from '../../components/RectBG';

import Loading from '../Loading/Loading';

const imgPathes = {
  senses: require('../../../assets/images/sensesLogo.png'),
  qrCode: require('../../../assets/images/qr-code.png'),
  profileAvatar: require('../../../assets/images/user.png')
};

const { width: WIDTH, height: Hieght } = Dimensions.get('window');

// Define Some Constants for default Values  
// const baseUrl = "http://demo9744643.mockable.io/";
const baseUrl = "https://bondnbeyond-apigateway.herokuapp.com/";



const surveyCover = "https://www.helpscout.com/images/blog/2018/feb/customer-survey.png";
const clientAvatar = "https://sherkatdaran.com/wp-content/uploads/2018/04/teamwork-and-brainstorming-concept_1325-637.jpg";
const userAvatar = "http://avatars.design/wp-content/uploads/2016/09/avatar1b.jpg";


export default class UserProfile extends Component {



  constructor(props) {
    super(props);
    this.state = {

      loading: true,
      userID: this.props.navigation.getParam('userID')|| '',
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
      afterScanLoad: false,
      showSuccessTrans: false,
      token: ''

    }
    this.props.navigation.addListener('didFocus', async () =>
      
      await this.fetchData()
        .then(() =>
          this.setState({
            afterScanLoad: this.props.navigation.getParam('afterScanLoad') || false,
            showSuccessTrans: this.props.navigation.getParam('showSuccessTrans') || false
          })
        )
    )
  }

  componentDidMount() {
    this.regForPushNotefication();
  }


  // Get Token for notification
  regForPushNotefication = async () => {

    const { status } = await Permissions.getAsync(Permissions.NOTIFICATIONS);
    let filnalStatus = status;

    if (status !== 'granted') {
      const { status } = await Permissions.askAsync(Permissions.NOTIFICATIONS);
      filnalStatus = status;
    }
    if (filnalStatus !== 'granted') {
      console.log("No");
      return;
    }

    let token = await Notifications.getExpoPushTokenAsync();
    console.log("Token : ", token);
    this.setState({ token })
  }



  // fetching user profile data  
  fetchData = async () => {
    await fetch(baseUrl + `enduser/${this.state.userID}/profile`)
      .then(res => res.json())
      .then(async (res) => {

        this.setState({
          userName: res.data.userName,
          profileAvatar: res.data.imageURL,
          userRate: res.data.userRate,
          numberOfTakenSurveys: res.data.numberOfTakenSurveys,
          durationOfTakenSurveys: res.data.durationOfTakenSurveys,
          walletID: res.data.walletID,
          senses: res.data.senses,
          latestSurveys: res.data.latestSurveys,
          recommendedSurveys: res.data.recommendedSurveys,
        });
      })
      .then(async () => {

        await AsyncStorage.setItem('UserID', JSON.stringify(this.state.userID));
        await AsyncStorage.setItem('userName', JSON.stringify(this.state.userName));
      })
      .then(() => {

        this.setState({ loading: false })
      })
      .catch(error => {
        console.error(`e: ${error}`);
        this.setState({ loading: false })
      });
  }

  // on swip down refreshing 
  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  }



  goToSurvey = (surveyID, surveyTitle, clientName, brandLogo, clientID, surveyCover, surveyReward, surveyDuration, surveyDescription, userID, currencyData) => {
    this.props.navigation.navigate('SurveyIntro', { surveyID, surveyTitle, clientName, surveyCover, surveyReward, surveyDuration, brandLogo, clientID, surveyDescription, userID, currencyData });
  }

  goToQRCode = () => {
    this.props.navigation.navigate('UserQRCode', { userID: this.state.userID, userName: this.state.userName, walletID: this.state.walletID, token: this.state.token });
  }

  goToWallet = () => {
    this.props.navigation.navigate('UserWallet', {
      userID: this.state.userID, walletID: this.state.walletID, userName: this.state.userName,
      userImg: this.state.profileAvatar || userAvatar
    });
  }

  goToScanFriendQR = () => {
    this.props.navigation.navigate('ScanFriendQR', {
      userID: this.state.userID,
      userName: this.state.userName,
      senses: this.state.senses
    });
  }

  // hidePopup = () => {
  //   this.setState({
  //     showTransConfirmDialog: false
  //   })
  //   this.props.navigation.setParams({showTransConfirmDialog: false})
  // }


  render() {

    if (this.state.loading)
      return (
        <Modal
          visible={true}>
          <Loading />
        </Modal>

      );
    else
      return (
        <Container>

          {/* <Modal visible = {this.state.afterScanLoad}>
            <View style={{height:Hieght , width : WIDTH , flex:1 , justifyContent : 'center' , alignItems : 'center' , opacity : 0.5}}>
                <ActivityIndicator size = 'large' color = "red" />
            </View>
          </Modal> */}


          <ScrollView
            // apply Swip Refresh
            refreshControl={
              <RefreshControl
                refreshing={this.state.refreshing}
                onRefresh={this._onRefresh}
              />
            } >
            {/* Show Basic user Profile Data */}
            <RectBG />
            <View style={{ marginTop: 0.1 * Hieght }}>

              <UserProfileCard
                id={this.state.userID}
                name={this.state.userName}
                rating={this.state.userRate}
                numberOfSurveys={this.state.numberOfTakenSurveys}
                hours={this.state.durationOfTakenSurveys}
                score={this.state.senses}
                profileImg={this.state.profileAvatar || userAvatar}
                walletClcked={this.goToWallet}
              />
            </View>
            {/* Transactions Sectoin */}
            <Content padder >
              <View style={{ flexDirection: 'row' }} >
                {/* click button to open camera for scan friend QR Code  */}
                <Left>
                  <POSButton
                    title="Make a Transaction"
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
              <Text style={styles.sideTitle}> Top Surveys For You ({this.state.latestSurveys.length}) </Text>
              {/* Show Latest Recommended survays ... max 5 */}

              {this.state.latestSurveys.length !== 0 ?
                <ScrollView horizontal={true}>

                  {this.state.latestSurveys.map((survey) =>
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
                  )}

                </ScrollView>
                :
                <View>
                  <Text style={{ alignSelf: 'center' }}> Sorry but There is no Surveys For you </Text>
                </View>
              }
            </Content>

            <Text style={styles.sideTitle}> Recommended Surveys ({this.state.recommendedSurveys.length}) </Text>

            {/* View All Recommended Surveys */}
            {this.state.latestSurveys.length !== 0 ?
              this.state.recommendedSurveys.map((survey) =>

                <SurveyItem
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
              )
              :
              <View>
                <Text style={{ alignSelf: 'center' }}> Sorry but There is no Surveys For you </Text>
              </View>
            }
          </ScrollView>

          {/* <CardItem style={{
            justifyContent: 'center',
            alignItems: 'center',
          }}>


            <Modal
              visible={this.state.showTransConfirmDialog}
              style={styles.popUpContainer}>

              <TransactionConfirm
                showModal={this.state.showTransConfirmDialog}
                hidePopup={this.hidePopup}
                transactionInfo={this.state.transactionInfo}
              />
            </Modal>

          </CardItem> */}

        </Container>
      );
  }
}

const styles = StyleSheet.create({
  newScanBtn: { borderRadius: 10, width: 0.7 * WIDTH },
  sideTitle: {
    fontSize: 14,
    marginBottom: 20,
    fontFamily: 'Rubik-Regular',
    fontWeight: 'bold' , 
    color: "#333",
    borderColor: "#333",
    // borderTopWidth: 2,
    // borderBottomWidth: 2,
    marginVertical: 20,
    paddingVertical: 10
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
