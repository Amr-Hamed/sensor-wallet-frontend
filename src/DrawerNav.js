//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import {
  Image,
  StyleSheet,
  Text,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
  Content,
  Header,
  Left,
  Right,
  Body, 
  Title,
  Thumbnail,
  Icon,
} from 'native-base';

const { width: WIDTH, height: Hieght } = Dimensions.get('window');
const imgPathes = {
  senses: require('../assets/images/sensesLogo.png'),
};


//For React Navigation 2.+ import following
//import {DrawerNavigator, StackNavigator} from 'react-navigation';

//For React Navigation 3.+ import following
import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';


import POSHeader from './components/POSHeader';

import CompanyProfile from './screens/CompanyProfile/CompanyProfile';
import ServiceDetails from './screens/ServiceDetails/ServiceDetails';
import SurveyIntro from './screens/SurveyIntro/SurveyIntro';
import SurveyQuestion from './screens/SurveyQuestion/SurveyQuestion';
// import UserLogin from './screens/UserLogin/UserLogin';
import UserPlaceRedeem from './screens/UserPlaceRedeem/UserPlaceRedeem';
import UserProfile from './screens/UserProfile/UserProfile';
import UserSurveyHomePage from './screens/UserSurveyHomePage/UserSurveyHomePage';


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
          width:WIDTH
        }}>
        <Left> 
          <TouchableOpacity onPress={this.toggleDrawer.bind(this)} >
          <Icon
          name='menu'
            style={{ width: 25, height: 25, marginLeft: 5 , color:'white' }}
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

const FirstActivity_StackNavigator = createStackNavigator({
  First: {
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
});

//For React Navigation 2.+ need to use StackNavigator instead createStackNavigator
//const FirstActivity_StackNavigator = StackNavigator({

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
// const Screen4_StackNavigator = createStackNavigator({
//   //All the screen from the Screen2 will be indexed here
//   Second: {
//     screen: UserLogin,
//     navigationOptions: ({ navigation }) => ({
//       title: 'Demo Screen 2',
//       headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,

//       headerStyle: {
//         backgroundColor: '#212121',
//       },
//       headerTintColor: '#fff',
//     }),
//   },
// });
 
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
    screen: UserProfile,
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
//const FirstActivity_StackNavigator = StackNavigator({

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

//For React Navigation 2.+ need to use DrawerNavigator instead createDrawerNavigator
//const DrawerNavigatorExample = DrawerNavigator({

//For React Navigation 3.+
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Company Profile',
    },
  },
 
  Screen2: {
    //Title
    screen: Screen2_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Service Details',
    },
  },

  Screen3: {
    //Title
    screen: Screen3_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Survey Question',
    },
  },

  // Screen4: {
  //   //Title
  //   screen: Screen4_StackNavigator,
  //   navigationOptions: {
  //     drawerLabel: 'User Login',
  //   }, 
  // },

  Screen5: {
    //Title
    screen: Screen5_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Places For Redeem',
    },
  },

  Screen6: {
    //Title
    screen: Screen6_StackNavigator,
    navigationOptions: {
      drawerLabel: 'User Profile',
    },
  },

  Screen7: {
    //Title
    screen: Screen7_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Survey Home Page',
    },
  },

  Screen8: {
    //Title
    screen: Screen8_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Survey Intro',
    },
  },

  


});

//For React Navigation 2.+ need to export App only
//export default DrawerNavigatorExample;
//For React Navigation 3.+
export default createAppContainer(DrawerNavigatorExample);

const styles = StyleSheet.create({
  sensesLogo: { width: 30, height: 30, marginHorizontal: 20 },
});
// <View style={{ flexDirection: 'row' }}>
//         <TouchableOpacity onPress={this.toggleDrawer.bind(this)}>
//           <Icon
//           name='menu'
//             style={{ width: 25, height: 25, marginLeft: 5 , color:'white' }}
//           />
//         </TouchableOpacity>
//       </View>  