import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import { createStackNavigator, createAppContainer } from 'react-navigation';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { AppLoading , Platform } from 'expo';


// You can import from local files
import UserLogin from './src/screens/UserLogin/UserLogin';

import DrawerNav from './src/routing/DrawerNav';




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

    if (Platform.OS === 'android') {
      Expo.Notifications.createChannelAndroidAsync('recievePoints', {
        name: 'Recieve Points',
        sound: true,
      });
    }

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
