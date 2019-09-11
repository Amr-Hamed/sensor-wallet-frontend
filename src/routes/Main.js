import { createStackNavigator, createAppContainer } from 'react-navigation';

// You can import from local files
import UserLogin from '../screens/UserLogin/UserLogin';
import TabBottomNav from './TabBottomNav';

const MainNavigator = createStackNavigator(
    {
      Login: { screen: UserLogin },
      Drawer: { screen: TabBottomNav },
    },
    {
      headerMode: 'none',
    }
  );
  
  export default StartApp = createAppContainer(MainNavigator);