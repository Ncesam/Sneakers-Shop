import useAppStore from "@data/storage/app";
import { ISneaker } from "@domain/entity/sneaker";
import { useNavigation } from "@react-navigation/native";
import { iconMap } from "@uiKit/iconMap";
import { useTheme } from "@uiKit/index";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";


const ShopBagScreen = () => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      position: "relative",
      padding: 20,
      paddingTop: 48,
    },
    topContainer: {
      alignItems: "center",
      justifyContent: 'space-between',
      flexDirection: "row"
    },
    backIconContainer: {
      backgroundColor: colors.block,
      borderRadius: 40,
      padding: 10
    },
    title: {
      fontFamily: "Raleway-SemiBold",
      fontSize: 16,
      fontWeight: 600,
      alignSelf: "center"
    },
    favoriteIconContainer: {
      padding: 10,
      backgroundColor: colors.block,
      borderRadius: 40,
      opacity: 0
    },
    itemsScrollContainer: {
      marginTop: 20,
      paddingBottom: 100
    },
  });
  const setIsDarkBar = useAppStore(state => state.setIsDarkBar);
  const navigation = useNavigation();
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
    },
    {
      id: 3,
      name: "Jordan Retro 4",
      description: "Классика баскетбольного стиля. Модель 1989 года, ставшая иконой уличной моды благодаря сетчатым вставкам и уникальной системе шнуровки.",
      cost: 24000,
      variants: [
        {
          name: "Military Blue",
          color: "#4B92DB",
          imageURI: "https://images.asics.com/is/image/asics/1201A019_400_00127202_RT_BT_AL?$zoom$"
        }
      ]
    }
  ];
  useEffect(() => {
    setIsDarkBar(true);
    const fetchItems = async () => {
    }
    setSneakers(TestSneakers);
    fetchItems()
  }, [])
  const BackIcon = iconMap["back"];
  const FavoriteIcon = iconMap['favorite'];
  function getPlural(n: number) {
    let forms = ['товар', 'товара', 'товаров'];
    let x = Math.abs(n) % 100;
    let y = x % 10;

    if (x > 10 && x < 20) return forms[2];
    if (y > 1 && y < 5) return forms[1];
    if (y == 1) return forms[0];
    return forms[2];
  }
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity hitSlop={{ bottom: 12, left: 12, right: 12, top: 12 }} style={styles.backIconContainer} onPress={() => navigation.goBack()} >
          <BackIcon color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Корзина</Text>
        <TouchableOpacity style={styles.favoriteIconContainer}>
          <FavoriteIcon color={colors.text} />
        </TouchableOpacity>
      </View>
      <View>
        {sneakers?.length > 0 ? (
          <Text>{sneakers?.length} {getPlural(sneakers?.length)}</Text>
          
        ) : <Text>Товаров нету</Text>}

      </View>
    </View>
  )
}

export default ShopBagScreen;
