import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import BottomTabsMenu from './navigation-menu';
import NavigationMenu from './navigation-menu';
import CoverScreen from '@screens/cover';
import MainScreen from '@screens/mainScreen';
import StoreStack from './StoreStack';

const Tab = createBottomTabNavigator();

const MainNavigation = () => {
  return (
    <Tab.Navigator
      tabBar={props => <NavigationMenu {...props} />}
      screenOptions={{
        headerShown: false,
        tabBarStyle: {
          position: 'absolute',
          left: 0,
          right: 0,
          bottom: 0,
        },
      }}
    >
      <Tab.Screen name="home" component={MainScreen} />
      <Tab.Screen name="favorite" component={CoverScreen} />
      <Tab.Screen name="shopBag" component={CoverScreen} />
      <Tab.Screen name="notification" component={CoverScreen} />
      <Tab.Screen name="profile" component={CoverScreen} />
    </Tab.Navigator>
  );
};

export default MainNavigation;
