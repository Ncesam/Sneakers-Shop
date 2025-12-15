import { createNativeStackNavigator } from '@react-navigation/native-stack';
import LoginScreen from '@screens/login';
import RegistrationScreen from '@screens/registration';
import RecoveryScreen from '@screens/recovery';
import CheckCodeScreen from '@screens/checkCode';

const AuthStack = createNativeStackNavigator();

const AuthNavigator = () => {
  return (
    <AuthStack.Navigator screenOptions={{ headerShown: false }}>
      <AuthStack.Screen name="Login" component={LoginScreen} />
      <AuthStack.Screen name="Register" component={RegistrationScreen} />
      <AuthStack.Screen name="Recovery" component={RecoveryScreen} />
      <AuthStack.Screen name="OTP Input" component={CheckCodeScreen} />
    </AuthStack.Navigator>
  );
};

export default AuthNavigator;
