import { iconMap } from '@uiKit/iconMap';
import { useTheme } from '@uiKit/index';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import DecorateMainText from "@assets/components/decorate-main-screen-text.svg";
import CampaignBanner from "@assets/components/campaign-banner.png";
import { useEffect, useState } from 'react';
import Search from '@uiKit/search';
import Category from '@presentation/components/category';
import { ICategory } from '@domain/entity/category';
import useAppStore from '@data/storage/app';
import Card from '@presentation/components/card';
import { useNavigation } from '@react-navigation/native';
import { ISneaker } from '@domain/entity/sneaker';


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
    categoriesScrollContainer: {
      backgroundColor: colors.background
    },
    categoriesContainer: {
      flexDirection: "row",
      gap: 16
    },
    popularCardContainer: {
      flexDirection: "row",
      gap: 15
    },
    popularTitle: {
      fontFamily: "Raleway-Medium",
      fontSize: 16,
      lineHeight: 24,
      color: colors.text
    },
    popularTitleContainer: {
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      marginVertical: 12
    },
    campaignTitleContainer: {
      justifyContent: "space-between",
      alignItems: "center",
      flexDirection: "row",
      marginVertical: 12
    },
    campaignTitle: {
      fontFamily: "Raleway-SemiBold",
      fontWeight: 600,
      fontSize: 16,
      lineHeight: 24,
      color: colors.text
    },
    campaignBanner: {
      alignSelf: "flex-start",
      flexDirection: "column",
      width: "100%",
      height: "54%",
    }

  });
  const SideMenuIcon = iconMap["folder"];
  const ShopBagIcon = iconMap["shopBag"];
  const setIsDarkBar = useAppStore(state => state.setIsDarkBar);
  const navigation = useNavigation();
  // API
  const TestCategories: ICategory[] = [{ name: "Basketball", id: 1, countItems: 10 }, { name: "OutDoor", id: 2, countItems: 10 }, { name: "Football", id: 3, countItems: 10 }, { name: "Voleyball", id: 4, countItems: 10 }, { name: "Все", id: 5, countItems: 10 }]
  const [categories, setCategories] = useState<ICategory[]>();
  const [sneakers, setSneakers] = useState<ISneaker[]>();
  const TestSneakers: ISneaker[] = [
    {
      id: 1,
      name: "Nike Air Max 270",
      description: "Кроссовки Nike Air Max 270, вдохновленные двумя легендарными моделями Air: Air Max 180 и Air Max 93. Самая большая вставка Air в области пятки обеспечивает мягкость при каждом шаге.",
      cost: 12990,
      variants: [
        {
          name: "Black/White",
          color: "#000000",
          imageURI: "https://images.asics.com/is/image/asics/1201A019_001_00127202_RT_BT_AL?$zoom$"
        },
        {
          name: "Triple White",
          color: "#FFFFFF",
          imageURI: "https://images.asics.com/is/image/asics/1201A019_100_00127202_RT_BT_AL?$zoom$"
        }
      ]
    },
    {
      id: 2,
      name: "Adidas Ultraboost 22",
      description: "Беговые кроссовки с технологией BOOST, которая возвращает энергию каждого шага. Верх из материала Primeknit для идеальной посадки.",
      cost: 15500,
      variants: [
        {
          name: "Solar Red",
          color: "#FF4500",
          imageURI: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/376043/01/sv01/fnd/PNA/fmt/png/RS-Z-Reinven-Sneakers"
        }
      ]
    }
  ];
  const [countItemsOnShopBag, setCountItemsOnShopBag] = useState<number>(0);
  useEffect(() => {
    setCategories(TestCategories);
    setSneakers(TestSneakers);
    setIsDarkBar(true);
  }, []);
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
          <ScrollView horizontal style={styles.categoriesScrollContainer} contentContainerStyle={styles.categoriesContainer} showsHorizontalScrollIndicator={false} >
            {categories ? categories.map((category, index) =>
              <Category id={category.id} name={category.name} key={index} />
            ) : <Text>Категорий нету</Text>}
          </ScrollView>
        </View>
        <View>
          <View style={styles.popularTitleContainer}>
            <Text style={styles.popularTitle}>Популярное</Text>
            <TouchableOpacity onPress={() => navigation.navigate("Popular", {})}>
              <Text style={{ color: colors.accent }}>
                Все
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{ flexDirection: "row", }}>
            <View style={{ marginRight: 15 }}>
              <Card id={2} cost={15000} name={sneakers ? sneakers[0].name : "f"} isBestSeller isInShopCart />
            </View>
            <View style={{ marginRight: 15 }}>
              <Card id={3} cost={15000} name={sneakers ? sneakers[1].name : "f"} isBestSeller isInShopCart />
            </View>
          </View>

        </View>
        <View >
          <View style={styles.campaignTitleContainer}>
            <Text style={styles.campaignTitle}>Акции</Text>
            <TouchableOpacity>
              <Text style={{ color: colors.accent }}>
                Все
              </Text>
            </TouchableOpacity>
          </View>
          <TouchableOpacity>
            <Image source={CampaignBanner} resizeMode='contain' style={styles.campaignBanner} />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};
export default MainScreen;
