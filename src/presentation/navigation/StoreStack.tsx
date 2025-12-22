import { ICategory } from '@domain/entity/category';
import CategoryScreen from '@presentation/screens/categoryScreen';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainScreen from '@screens/mainScreen';
import MainNavigation from './MainNavigation';
import PopularScreen from '@presentation/screens/popularScreen';
import { ISneaker } from '@domain/entity/sneaker';
import SneakerDetailsScreen from '@presentation/screens/sneakerDetailsScreen';
import ShopBagScreen from '@presentation/screens/shopBagScreen';

export type StoreStackProps = {
  Main: undefined,
  Category: ICategory,
  Popular: undefined,
  SneakerDetails: { id: number },
  ShopBag: undefined
}

const Stack = createNativeStackNavigator<StoreStackProps>();

const StoreStack = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Main" component={MainNavigation} />
      <Stack.Screen name="Category" component={CategoryScreen} />
      <Stack.Screen name="Popular" component={PopularScreen} />
      <Stack.Screen name="SneakerDetails" component={SneakerDetailsScreen} />
    </Stack.Navigator>
  );
};

export default StoreStack;
