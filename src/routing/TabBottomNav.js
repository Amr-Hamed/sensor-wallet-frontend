import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import React from 'react';
import { Icon } from 'native-base';

import UserLoginTab from '../screens/UserLogin/UserLogin';
import CompanyProfileTab from '../screens/CompanyProfile/CompanyProfile';
import ServiceDetails from '../screens/ServiceDetails/ServiceDetails';
import UserSurveyHomePage from '../screens/UserSurveyHomePage/UserSurveyHomePage';
import UserPlaceRedeem from '../screens/UserPlaceRedeem/UserPlaceRedeem';
import SurveyIntroTab from '../screens/SurveyIntro/SurveyIntro';
import UserProfile from '../screens/UserProfile/UserProfile';
import ProfileNav from './ProfileNav';
import SurveyNav from './SurveyNav';


const AppNavigator = createBottomTabNavigator({
  Home: {
    screen: ProfileNav,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" style={{color : tintColor}} size={25} />
      ),
      
    },
  },
  UserSurveyHomePage: {
    screen: SurveyNav,
    navigationOptions: {
      tabBarLabel: 'Survey',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="today" style={{color : tintColor}} size={25} />
      ),
    },
  },
  UserPlaceRedeem: {
    screen: UserPlaceRedeem,
    navigationOptions: {
      tabBarLabel: 'Redeem',
      tabBarIcon: ({ tintColor }) => 
        <Icon name="repeat" style={{color : tintColor}} size={25} />
      
    },
  },
  Service: {
    screen: ServiceDetails,
    navigationOptions: {
      tabBarLabel: 'Service',
      tabBarIcon: ({ tintColor }) => 
        <Icon name="shirt" style={{color : tintColor}} size={25} />
    },
  },
} ,  {
    swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#339193',
      inactiveTintColor: '#eee',
      style: {
        backgroundColor: '#333',
      },
      labelStyle: {
        textAlign: 'center',
      },
      indicatorStyle: {
        borderBottomColor: '#87B56A',
        borderBottomWidth: 2,
      }
}
}
);

export default createAppContainer(AppNavigator);
