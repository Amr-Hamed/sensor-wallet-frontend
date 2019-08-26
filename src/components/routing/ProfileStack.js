import {
  createDrawerNavigator,
  createStackNavigator,
  createAppContainer,
} from 'react-navigation';

import UserProfile from '../screens/UserProfile/UserProfile'; 
import SurveyIntro from '../screens/SurveyIntro/SurveyIntro'; 

const stackRoute =createStackNavigator(
  { 
    Profile: { screen: UserProfile },
    SurveyIntro: { screen: SurveyIntro },
  },
  {
    headerMode: 'none', 
    navigationOptions: {
      headerVisible: false,
    }
  }
);

const App = createAppContainer(stackRoute);
export default App ; 
