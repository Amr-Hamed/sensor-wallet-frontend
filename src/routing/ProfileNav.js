//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
  SafeAreaView,
  ScrollView,
  Image,
  Text
} from 'react-native';
import {
  Header,
  Left,
  Right,
  Body,
  Title,
  Thumbnail,
  Icon,
  View,
  Content,
  CardItem , 
  Card
} from 'native-base';

const { width: WIDTH, height: Hieght } = Dimensions.get('window');
const imgPathes = {
  senses: require('../../assets/images/sensesLogo.png'),
};



import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
  DrawerItems
} from 'react-navigation';



import CompanyProfile from '../screens/CompanyProfile/CompanyProfile';
import ServiceDetails from '../screens/ServiceDetails/ServiceDetails';
import SurveyIntro from '../screens/SurveyIntro/SurveyIntro';
import SurveyQuestion from '../screens/SurveyQuestion/SurveyQuestion';
import UserLogin from '../screens/UserLogin/UserLogin';
import UserPlaceRedeem from '../screens/UserPlaceRedeem/UserPlaceRedeem';
import UserProfile from '../screens/UserProfile/UserProfile';
import UserSurveyHomePage from '../screens/UserSurveyHomePage/UserSurveyHomePage';
import UserQRCode from '../screens/UserQRCode/UserQRCode';
import UserWallet from '../screens/UserWallet/UserWallet';
import ScanFriendQR from '../screens/ScanFriendQR/ScanFriendQR';
import TransactionConfirm from '../screens/TransactionConfirm/TransactionConfirm';
import Loading from '../screens/Loading/Loading';



class NavigationDrawerStructure extends Component {
  //Structure for the navigatin Drawer
  toggleDrawer = () => {
    //Props to open/close the drawer
    this.props.navigationProps.toggleDrawer();
  };
  render() {
    return (
      <Header
        style={{
          backgroundColor: '#212121',
          height: 0.13 * Hieght,
          paddingTop: 25,
          width: WIDTH
        }}>
        <Left>
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
            <Icon
              name='menu'
              style={{ width: 25, height: 25, marginLeft: 5, color: 'white' }}
            />
          </TouchableOpacity>
        </Left>
        <Body style={{ flexDirection: 'row' }}>
          <Thumbnail source={imgPathes.senses} style={styles.sensesLogo} />
          <Title>Sensor Wallet</Title>
        </Body>
        <Right>
          <Icon name="notifications-outline" style={{ color: 'grey' }} />
        </Right>
      </Header>
    );
  }
}

// const ProfileImage = await AsyncStorage.getItem('userProfileImg');


const MainStack = createStackNavigator({
  Profile: {
    screen: UserProfile,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),
  },
  SurveyIntro: {
    screen: SurveyIntro,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),
  },
  SurveyQuestion: {
    screen: SurveyQuestion,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),
  },
  CompanyProfile: {
    screen: CompanyProfile,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),
  },
  ServiceDetails: {
    screen: ServiceDetails,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),
  },
  UserQRCode: {
    screen: UserQRCode,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),
  },
  UserWallet: {
    screen: UserWallet,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),

  },
  ScanFriendQR: {
    screen: ScanFriendQR,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),

  },
  TransactionConfirm: {
    screen: TransactionConfirm,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),

  },
  Loading: {
    screen: Loading,
    navigationOptions: ({ navigation }) => ({
      header: null
    }),

  },
});

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const MainStack = StackNavigator({

//For React Navigation 3.+
const Screen2_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: ServiceDetails,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),
  },
});



//For React Navigation 3.+
const Screen3_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: SurveyQuestion,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),
  },
});

//For React Navigation 3.+
const Screen4_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: UserLogin,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),
  },
});

//For React Navigation 3.+
const Screen5_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: UserPlaceRedeem,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),
  },
});

//For React Navigation 3.+
const Screen6_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: CompanyProfile,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),
  },
});

//For React Navigation 3.+
const Screen7_StackNavigator = createStackNavigator({
  //All the screen from the Screen2 will be indexed here
  Second: {
    screen: UserSurveyHomePage,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 2',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),
  },
});


//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const MainStack = StackNavigator({

//For React Navigation 3.+
const Screen8_StackNavigator = createStackNavigator({
  //All the screen from the Screen3 will be indexed here
  Third: {
    screen: SurveyIntro,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 3',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),
  },
});



// Cutomize Top of Drawer Navigator ( Side bar )
const CustomDrawerComponent = (props) => (
  <SafeAreaView style={{ flex: 1 }}>
    <Header style={{ backgroundColor: '#333' }} />
    <Content style={{ flexDirection: 'row' , borderWidth: 0 }}>
          <CardItem style = {{borderWidth : 0, backgroundColor:'#333'}}>
            <Left>
              <Thumbnail
                style={{ borderRadius: 0.125*WIDTH, width:0.25 * WIDTH , height : 0.25 * WIDTH }}
                source={{
                  uri: 'http://tawsah.com/uploads/2aeefea22dd585016711ecc1c381b9cd.jpg',
                }}
              />
              <Body>
                <Text style={styles.menuHead}> Mohamed Khaled </Text>
                <Text style={styles.country}> Egypt </Text>
              </Body>
            </Left>
            <Right>
              <TouchableOpacity onPress={this.handleWalletClicked}>
                <View style={styles.walletBtn}>
                  <Thumbnail source={imgPathes.wallet} style={{ borderRadius: 10 }} />
                </View>
              </TouchableOpacity>
            </Right>
          </CardItem >
          </Content>
    <ScrollView>
      <DrawerItems {...props} />
    </ScrollView>
  </SafeAreaView>

)




//For React Navigation 3.+
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: MainStack,
    navigationOptions: {
      drawerLabel: 'User Profile',
      drawerIcon: ({ tintColor }) => (<Icon name="home" style={{ fontSize: 24, color: tintColor }} />)
    },
  },

  // Screen2: {
  //   //Title
  //   screen: Screen2_StackNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'Service Details',
  //   },
  // },

  // Screen3: {
  //   //Title
  //   screen: Screen3_StackNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'Survey Question',
  //   },
  // },

  // Screen4: {
  //   //Title
  //   screen: Screen4_StackNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'User Login',
  //   },
  // },

  // Screen5: {
  //   //Title
  //   screen: Screen5_StackNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'Places For Redeem',
  //   },
  // },

  // Screen6: {
  //   //Title
  //   screen: Screen6_StackNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'Company Profile',
  //   },
  // },

  // Screen7: {
  //   //Title
  //   screen: Screen7_StackNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'Search Survey',
  //   },
  // },

  // Screen8: {
  //   //Title
  //   screen: Screen8_StackNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'Survey Intro',
  //   },
  // },

  // Screen9: {
  //   screen : UserWallet , 
  //   navigationOptions: {
  //     drawerLabel : 'Wallet'
  //   } , 
  // Screen10:{
  //   screen : Test , 
  //   navigationOptions: {
  //     drawerLabel : 'Test'
  //   }
  // }
  // }




}, {
    drawerPosition: 'left',
    contentComponent: CustomDrawerComponent,
    contentOptions: {
      activeTintColor: '#45b3b5',
      backgroundColor: '#333',
      inactiveTintColor: 'white'
    },
    style: {
      backgroundColor: '#333'
    }

  });

//For React Navigation 2.+ need to export App only
//export default DrawerNavigatorExample;
//For React Navigation 3.+
export default createAppContainer(DrawerNavigatorExample);

const styles = StyleSheet.create({
  sensesLogo: { width: 30, height: 30, marginHorizontal: 20 },
  menuHead: {
    color:'#eee' , 
    fontWeight : 'bold' , 
    fontSize : 16
  } , 
  country: {
    color : '#aedffe' , 

  }
});
// <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
//           <Icon
//           name='menu'
//             style={{ width: 25, height: 25, marginLeft: 5 , color:'white' }}
//           />
//         </TouchableOpacity>
//       </View>
