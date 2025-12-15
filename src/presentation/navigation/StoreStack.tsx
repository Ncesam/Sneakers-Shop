import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '@screens/mainScreen';

const Stack = createNativeStackNavigator();

const StoreStack = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="Home" component={MainScreen} />
    </Stack.Navigator>
  );
};

export default StoreStack;
