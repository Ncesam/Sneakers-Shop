import { useTheme } from '@theme/hooks';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const MainScreen = () => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      padding: 20,
      paddingVertical: 48,
      flex: 1,
    },
  });
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 70 }}>
        <View>
          <TouchableOpacity>
            <SideMenu />
          </TouchableOpacity>
          <View>
            <DecorateMainText />
            <Text></Text>
          </View>
          <TouchableOpacity>
            <View>
              <ShopBagIcon />
            </View>
          </TouchableOpacity>
        </View>
        <View></View>
        <View>
          <View>
            <Text></Text>
            <TouchableOpacity>
              <Text></Text>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
        <View>
          <View>
            <Text></Text>
            <TouchableOpacity>
              <Text></Text>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
        <View>
          <View>
            <Text></Text>
            <TouchableOpacity>
              <Text></Text>
            </TouchableOpacity>
          </View>
          <View></View>
        </View>
      </ScrollView>
    </View>
  );
};
export default MainScreen;
