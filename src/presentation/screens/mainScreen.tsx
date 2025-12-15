import { iconMap } from '@assets/iconMap';
import { useTheme } from '@theme/hooks';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DecorateMainText from "@assets/components/decorate-main-screen-text.svg";
import { useState } from 'react';

const MainScreen = () => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      padding: 20,
      paddingVertical: 48,
      flex: 1,
    }, 
    topRowContainer: {
      alignItems: "center",
      justifyContent: "space-between",
      flexDirection: "row"
    },
    topRowText: {
      zIndex: 1,
      fontFamily: "Raleway",
      fontWeight: "700",
      fontSize: 32,
      textAlign: "center",
      textAlignVertical: "center"
    },
    topRowTextContainer: {
      position: "relative",
      left: 10
    },
    topRowTextBackground: {
      position: "absolute",
      zIndex: 0,
      left: -13,
    },
    shopBagContainer: {
      backgroundColor: colors.block,
      borderRadius: 40,
      padding: 10,
    }
  });
  const SideMenuIcon = iconMap["folder"];
  const ShopBagIcon = iconMap["shopBag"];
  const [countItemsOnShopBag, setCountItemsOnShopBag] = useState<number>(0)
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 51 }}>
        <View style={styles.topRowContainer}>
          <TouchableOpacity>
            <SideMenuIcon />
          </TouchableOpacity>
          <View style={styles.topRowTextContainer}>
            <DecorateMainText style={styles.topRowTextBackground} />
            <Text style={styles.topRowText}>Главная</Text>
          </View>
          <TouchableOpacity style={styles.shopBagContainer}>
              <ShopBagIcon />
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
