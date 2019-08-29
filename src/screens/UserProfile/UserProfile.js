import React, { Component } from 'react';
import { Image, StyleSheet, Dimensions, View, ScrollView, TouchableOpacity, RefreshControl, AsyncStorage , Modal } from 'react-native';
import {
  Container,
  Content,
  Text,
  Left,
  Body,
  Right,
} from 'native-base';
import Swiper from 'react-native-swiper';
// import Modal from 'react-native-modal';


import POSButton from '../../components/POSButton';
import UserProfileCard from '../../components/UserProfileCard';
import SurveySlideItem from '../../components/SurveySlideItem';
import SurveyItem from '../../components/SurveyItem';
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


const userID = 31;
const surveyCover = "https://www.helpscout.com/images/blog/2018/feb/customer-survey.png";
const clientAvatar = "https://sherkatdaran.com/wp-content/uploads/2018/04/teamwork-and-brainstorming-concept_1325-637.jpg" ; 
const userAvatar = "http://avatars.design/wp-content/uploads/2016/09/avatar1b.jpg"; 


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
      afterScanLoad : false , 
      showSuccessTrans : false
     
    }
    this.props.navigation.addListener('didFocus', async () =>

      await this.fetchData()
        .then(() =>
          this.setState({
            // showTransConfirmDialog: this.props.navigation.getParam('showTransConfirmDialog') || false,
            // transactionInfo: this.props.navigation.getParam('transactionInfo') || {},
            afterScanLoad: this.props.navigation.getParam('afterScanLoad') || false ,
            showSuccessTrans : this.props.navigation.getParam('showSuccessTrans') || false

          })
        )
    )
  }

  fetchData = async () => {
    await fetch(baseUrl + `enduser/${userID}/profile`)
      .then(res => res.json())
      .then(res => {

        this.setState({
          userName: res.data.userName,
          profileAvatar: res.data.imageURL,
          userRate: res.data.userRate,
          numberOfTakenSurveys: res.data.numberOfTakenSurveys,
          durationOfTakenSurveys: res.data.durationOfTakenSurveys,
          walletID: res.data.walletID,
          senses: res.data.senses,
          latestSurveys: res.data.latestSurveys,
          recommendedSurveys: res.data.recommendedSurveys
        });

        AsyncStorage.setItem('UserID', res.data.userID)

      })
      .then(() => {
        
        this.setState({ loading: false })})
  }
  _onRefresh = () => {
    this.setState({ refreshing: true });
    this.fetchData().then(() => {
      this.setState({ refreshing: false });
    });
  }



  goToSurvey = (surveyTitle, brandName, brandLogo, brandID, surveyCover, surveyPoints, surveyDuration , surveyDescription) => {
    this.props.navigation.navigate('SurveyIntro', { surveyTitle, brandName, surveyCover, surveyPoints, surveyDuration, brandLogo, brandID , surveyDescription});
  }

  goToQRCode = () => {
    this.props.navigation.navigate('UserQRCode', { userID, userName: this.state.userName, walletID: this.state.walletID });
  }

  goToWallet = () => {
    this.props.navigation.navigate('UserWallet' , {walletID : this.state.walletID});
  }

  goToScanFriendQR = () => {
    this.props.navigation.navigate('ScanFriendQR', {
      userID,
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
        visible = {true}>
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
            <UserProfileCard
              id={userID}
              name={this.state.userName}
              rating={this.state.userRate}
              numberOfSurveys={this.state.numberOfTakenSurveys}
              hours={this.state.durationOfTakenSurveys}
              score={this.state.senses}
              profileImg={this.state.profileAvatar || userAvatar}
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
              <Text style={styles.sideTitle}> Latest Surveys </Text>
              {/* Show Latest Recommended survays ... max 5 */}
              <ScrollView horizontal={true}>

                {this.state.latestSurveys.map((survey) =>
                  <SurveySlideItem
                    surveyID={survey.surveyID}
                    cover={survey.imageURL || survey.surveyCreatorImageURL || surveyCover}
                    brandName={survey.surveyCreatorName}
                    brandID={survey.surveyCreatorID}
                    title={survey.title}
                    time={survey.duration}
                    points={survey.surveyReward}
                    brandLogo={survey.surveyCreatorImageURL || clientAvatar}
                    pressed={this.goToSurvey}
                    key={survey.surveyID}
                    description = {survey.description}
                  />
                )}

              </ScrollView>
            </Content>

            <Text style={styles.sideTitle}> Recommended Surveys </Text>

            {/* View All Recommended Surveys */}
            {this.state.recommendedSurveys.map((survey) =>

              <SurveyItem
                surveyID={survey.surveyID}
                brandName={survey.surveyCreatorName}
                title={survey.title}
                time={survey.duration}
                points={survey.surveyReward}
                brandCover={survey.imageURL || survey.surveyCreatorImageURL || clientAvatar}
                brandLogo={survey.surveyCreatorImageURL || clientAvatar}
                pressed={this.goToSurvey}
                cover={survey.imageURL || survey.surveyCreatorImageURL || surveyCover}
                brandID={survey.surveyCreatorID}
                key={survey.surveyID}
              />
            )}
            <Text>{this.state.showTransConfirmDialog}</Text>
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
    fontSize: 20,
    marginBottom: 20,
    fontFamily: 'Rubik-Regular' , 
    alignSelf : 'center' , 
    
    color : "#333" , 
    borderColor : "#333" ,
    borderTopWidth : 2 , 
    borderBottomWidth : 2 , 
    marginVertical : 20 , 
    paddingVertical : 10 
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
