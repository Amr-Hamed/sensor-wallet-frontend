import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';

// You can import from local files
import SurveyIntro from './src/screens/SurveyIntro/SurveyIntro';
import CompanyProfile from './src/screens/CompanyProfile/CompanyProfile';
import ServiceDetails from './src/screens/ServiceDetails/ServiceDetails';
import UserProfile from './src/screens/UserProfile/UserProfile';
import Navbar from './src/components/Navbar/Navbar';
import POSHeader from './src/components/POSHeader';
import SurveyQuestion from './src/screens/SurveyQuestion/SurveyQuestion';
import UserLogin from './src/screens/UserLogin/UserLogin';
import UserWallet from './src/screens/UserWallet/UserWallet';
import ConfirmTransactionPopup from './src/components/ConfirmTransactionPopup/ConfirmTransactionPopUp';
import BrandContactPopup from './src/components/BrandContactPopup/BrandContactPopup';
import WalletCurrency from './src/components/WalletCurrency/WalletCurrency';
import UserTransaction from './src/components/UserTransaction/UserTransaction';

import Featured from './src/components/FeaturedSurveys';
import TabNav from './src/TabBottomNav';
import DrawerNav from './src/DrawerNav';
import VisitEvaluation from './src/screens/VisitEvaluation/VisitEvaluation';
import SubmitVEPopup from './src/components/SubmitVEPopup/SubmitVEPopup'


// or any pure javascript modules available in

export default class App extends React.Component {
  state ={
    question : 'Did you enjoy your visit?!'
  }
  render() {
    return <VisitEvaluation question={this.state.question}/>; 
  }
}