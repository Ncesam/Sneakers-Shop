import { iconMap } from '@uiKit/iconMap';
import { useTheme } from '@uiKit/index';
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DecorateMainText from "@assets/components/decorate-main-screen-text.svg";
import { useEffect, useState } from 'react';
import Search from '@uiKit/search';
import Category from '@presentation/components/category';
import { ICategory } from '@domain/entity/category';


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
    },
    categoryContainer: {
      marginTop: 24,
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 16
    },
    categoryTitle: {
      fontFamily: "Raleway-Bold",
      fontWeight: 600,
      fontSize: 16,
      color: colors.text
    },
    cateogriesScrollContainer: {
      backgroundColor: colors.background
    },
    categoriesContainer: {
      flexDirection: "row",
      gap: 16
    }
  });
  const SideMenuIcon = iconMap["folder"];
  const ShopBagIcon = iconMap["shopBag"];
  // API
  const TestCategories: ICategory[] = [{ name: "Basketball", id: 1, countItems: 10 }, { name: "OutDoor", id: 2, countItems: 10 }, { name: "Football", id: 3, countItems: 10 }, { name: "Voleyball", id: 4, countItems: 10 }, { name: "Все", id: 5, countItems: 10 }]
  const [categories, setCategories] = useState<ICategory[]>();
  const [countItemsOnShopBag, setCountItemsOnShopBag] = useState<number>(0);

  useEffect(() => {
    setCategories(TestCategories);
  }, [])
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
        <Search withFilter />
        <View style={styles.categoryContainer}>
          <Text style={styles.categoryTitle}>Категории</Text>
          <ScrollView horizontal style={styles.cateogriesScrollContainer} contentContainerStyle={styles.categoriesContainer} showsHorizontalScrollIndicator={false} >
            {categories ? categories.map((category, index) =>
              <Category id={category.id} name={category.name} key={index} />
            ) : <Text>Категорий нету</Text>}
          </ScrollView>
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
