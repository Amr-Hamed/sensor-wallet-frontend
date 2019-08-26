import {
  createStackNavigator,
  createAppContainer,
  createBottomTabNavigator,
} from 'react-navigation';
import React from 'react';
import { Icon } from 'native-base';

import UserLoginTab from '../screens/UserLogin/UserLogin';
import CompanyProfileTab from '../screens/CompanyProfile/CompanyProfile';
import ServiceDetailsTab from '../screens/ServiceDetails/ServiceDetails';
import SurveyIntroTab from '../screens/SurveyIntro/SurveyIntro';
import UserProfile from '../screens/UserProfile/UserProfile';

const AppNavigator = createBottomTabNavigator({
  UserProfile: {
    screen: UserProfile,
    navigationOptions: {
      tabBarLabel: 'Home',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="home" color={tintColor} size={25} />
      ),
      
    },
  },
  CompanyProfileTab: {
    screen: CompanyProfileTab,
    navigationOptions: {
      tabBarLabel: 'Survey',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="today" color={tintColor} size={25} />
      ),
    },
  },
  ServiceDetails: {
    screen: ServiceDetailsTab,
    navigationOptions: {
      tabBarLabel: 'Redeem',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="repeat" color={tintColor} size={25} />
      ),
    },
  },
  SurveyIntro: {
    screen: SurveyIntroTab,
    navigationOptions: {
      tabBarLabel: 'Profile',
      tabBarIcon: ({ tintColor }) => (
        <Icon name="person" color={tintColor} size={25} />
      ),
    },
  },
} ,  {
   swipeEnabled: true,
    animationEnabled: true,
    tabBarOptions: {
      activeTintColor: '#FFFFFF',
      inactiveTintColor: '#F8F8F8',
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
