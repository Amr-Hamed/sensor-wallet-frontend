//This is an example code for NavigationDrawer//
import React, { Component } from 'react';
//import react in our code.
import {
  StyleSheet,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {
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
  senses: require('../../assets/images/sensesLogo.png'),
};



import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';




import UserSurveyHomePage from '../screens/UserSurveyHomePage/UserSurveyHomePage';
import WebContent from '../screens/WebContetnView/WebContetntView' ; 

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



const FirstActivity_StackNavigator = createStackNavigator({
  UserSurveyHomePage: {
    screen: UserSurveyHomePage,
    navigationOptions: ({ navigation }) => ({
      title: 'Demo Screen 1',
      headerLeft: <NavigationDrawerStructure navigationProps={navigation} />,
      headerStyle: {
        backgroundColor: '#212121',
      },
      headerTintColor: '#fff',
    }),
  },
  WebContent: {
    screen: WebContent,
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



//For React Navigation 2.+ need to use DrawerNavigator instead createDrawerNavigator
//const DrawerNavigatorExample = DrawerNavigator({

//For React Navigation 3.+
const DrawerNavigatorExample = createDrawerNavigator({
  //Drawer Optons and indexing
  Screen1: {
    //Title
    screen: FirstActivity_StackNavigator,
    navigationOptions: {
      drawerLabel: 'Surveys',
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
