import * as React from 'react';
import { Text, View, StyleSheet } from 'react-native';
import Constants from 'expo-constants';
import * as Font from 'expo-font';
import { Asset } from 'expo-asset';
import { AppLoading, Platform } from 'expo';


// Import Context Provider

import Provider from './src/myContext/Provider';
import Consumer from './src/myContext/MyConsumer';


import StartApp from './src/routes/Main';


// or any pure javascript modules available inhttps://snack.expo.io/@khaledamr/pos-routing   

// stack navigator with login and all application 


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
        LexendDeca: require('./assets/fonts/LexendDeca.ttf'),
        'Indie Flower': require('./assets/fonts/IndieFlower-Regular.ttf')
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
      return (
        <Provider>
          <Consumer />
        </Provider>);
    else {
      return (
        <AppLoading
          startAsync={this.loadResourcesAsync}
          onError={() => console.log("loading Resources Error")}
          onFinish={this.handleFinishLoading}
        />
      )
    }
  }
}
