import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { AppLoading } from 'expo';


// You can import from local files
import SurveyIntro from './src/screens/SurveyIntro/SurveyIntro';
import CompanyProfile from './src/screens/CompanyProfile/CompanyProfile';
import ServiceDetails from './src/screens/ServiceDetails/ServiceDetails';
import UserProfile from './src/screens/UserProfile/UserProfile';
import Navbar from './src/components/Navbar/Navbar';
import POSHeader from './src/components/POSHeader';
import SurveyQuestion from './src/screens/SurveyQuestion/SurveyQuestion';
import UserLogin from './src/screens/UserLogin/UserLogin';

import Featured from './src/components/FeaturedSurveys';
import TabNav from './src/routing/TabBottomNav';
import DrawerNav from './src/routing/DrawerNav';
import { Ionicons } from '@expo/vector-icons';



// or any pure javascript modules available inhttps://snack.expo.io/@khaledamr/pos-routing   

// stack navigator with login and all application 

const MainNavigator = createStackNavigator(
  {
    Login: { screen: UserLogin },
    Drawer: { screen: DrawerNav },
  },
  {
    headerMode: 'none',
  }
);

const StartApp = createAppContainer(MainNavigator);

export default class App extends React.Component {

  state = {
    loadingComplete: false
  }
 

  loadResourcesAsync = async () => {
    await Promise.all([
      Asset.loadAsync([
        // ...
      ]),
      Font.loadAsync({
        // ...
        'Roboto_medium': require('./assets/fonts/Roboto-Medium.ttf'),
        'Rubik-Regular': require('./assets/fonts/Rubik-Regular.ttf'),
        Ionicons: require('./assets/fonts/ionicons.ttf'),
        LexendDeca : require('./assets/fonts/LexendDeca.ttf'),
        'Indie Flower' : require('./assets/fonts/IndieFlower-Regular.ttf')
      })

    ])

  }

  handleFinishLoading = () => {
    this.setState({ loadingComplete: true });
  };

  render() {


    if (this.state.loadingComplete)
      return <StartApp />;
    else {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={()=>console.log("loading Resources Error")}
          onFinish={this.handleFinishLoading}
        />
      )
    }
  }
}
