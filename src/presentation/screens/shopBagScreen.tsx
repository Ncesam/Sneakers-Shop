import useAppStore from "@data/storage/app";
import useShopBagStore from "@data/storage/shopBag";
import { ISneaker } from "@domain/entity/sneaker";
import ShopCartCard from "@presentation/components/shopCartCard";
import { useNavigation } from "@react-navigation/native";
import { iconMap } from "@uiKit/iconMap";
import { useTheme } from "@uiKit/index";
import { useEffect, useState } from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const TestSneakers: ISneaker[] = [
  {
    "id": "1",
    "name": "Nike Air Max 270",
    "description": "Кроссовки Nike Air Max 270, вдохновленные двумя легендарными моделями Air: Air Max 180 и Air Max 93. Самая большая вставка Air в области пятки обеспечивает мягкость при каждом шаге.",
    "cost": 12990,
    "variants": [
      {
        "id": "0",
        "name": "Black/White",
        "color": "#000000",
        "imageURI": "https://example.com/images/nike-270-black.jpg"
      },
      {
        "id": "1",
        "name": "Triple White",
        "color": "#FFFFFF",
        "imageURI": "https://example.com/images/nike-270-white.jpg"
      }
    ]
  },
  {
    "id": "2",
    "name": "Adidas Ultraboost 22",
    "description": "Беговые кроссовки с промежуточной подошвой BOOST для максимального возврата энергии. Система Linear Energy Push обеспечивает дополнительную устойчивость.",
    "cost": 15500,
    "variants": [
      {
        "id": "10",
        "name": "Solar Yellow",
        "color": "#F9FF33",
        "imageURI": "https://example.com/images/adidas-ub-yellow.jpg"
      },
      {
        "id": "11",
        "name": "Core Black",
        "color": "#1A1A1A",
        "imageURI": "https://example.com/images/adidas-ub-black.jpg"
      },
      {
        "id": "12",
        "name": "Cloud White",
        "color": "#F5F5F5",
        "imageURI": "https://example.com/images/adidas-ub-white.jpg"
      }
    ]
  },
  {
    "id": "3",
    "name": "New Balance 574",
    "description": "Классическая модель, сочетающая в себе комфорт и долговечность. Верх из замши и сетки, технология ENCAP для поддержки стопы.",
    "cost": 10900,
    "variants": [
      {
        "id": "20",
        "name": "Navy Blue",
        "color": "#000080",
        "imageURI": "https://example.com/images/nb-574-navy.jpg"
      },
      {
        "id": "21",
        "name": "Grey Classic",
        "color": "#808080",
        "imageURI": "https://example.com/images/nb-574-grey.jpg"
      },
      {
        "id": "22",
        "name": "Burgundy",
        "color": "#800020",
        "imageURI": "https://example.com/images/nb-574-burgundy.jpg"
      }
    ]
  },
  {
    "id": "4",
    "name": "Puma RS-X3",
    "description": "Массивная форма, яркие цветовые комбинации и превосходная амортизация. Переосмысление ретро-стиля в современном исполнении.",
    "cost": 9490,
    "variants": [
      {
        "id": "30",
        "name": "Puzzle Multi",
        "color": "#FF5733",
        "imageURI": "https://example.com/images/puma-rsx-multi.jpg"
      },
      {
        "id": "31",
        "name": "Limestone",
        "color": "#D3D3D2",
        "imageURI": "https://example.com/images/puma-rsx-grey.jpg"
      }
    ]
  },
  {
    "id": "5",
    "name": "Reebok Classic Leather",
    "description": "Минималистичный дизайн и верх из мягкой натуральной кожи. Неподвластный времени стиль, который подходит к любому образу.",
    "cost": 8990,
    "variants": [
      {
        "id": "40",
        "name": "Pure White",
        "color": "#FFFFFF",
        "imageURI": "https://example.com/images/reebok-classic-white.jpg"
      },
      {
        "id": "41",
        "name": "Deep Black",
        "color": "#000000",
        "imageURI": "https://example.com/images/reebok-classic-black.jpg"
      }
    ]
  },
  {
    "id": "6",
    "name": "Jordan Air Jordan 1 Mid",
    "description": "Легендарные баскетбольные кроссовки. Сочетание стиля площадки и повседневного комфорта с модулем Air-Sole в пятке.",
    "cost": 18200,
    "variants": [
      {
        "id": "50",
        "name": "Chicago",
        "color": "#FF0000",
        "imageURI": "https://example.com/images/jordan-mid-red.jpg"
      },
      {
        "id": "51",
        "name": "Royal Blue",
        "color": "#002366",
        "imageURI": "https://example.com/images/jordan-mid-blue.jpg"
      }
    ]
  }
];
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
  const { setSneakers, sneakers } = useShopBagStore(state => ({ setSneakers: state.setSneakers, sneakers: state.sneakers }))
  const navigation = useNavigation();

  useEffect(() => {
    setIsDarkBar(true);
    if (sneakers.length === 0) {
      const data = TestSneakers.map((value) => ({
        variantId: value.variants ? value.variants[0].id : "0",
        sneakerId: value.id,
        count: 1
      }));
      setSneakers(data);
    }
  }, []);
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
        {sneakers ? sneakers.length > 0 ? (
          <Text>{sneakers?.length} {getPlural(sneakers?.length)}</Text>
        ) : <Text>Товаров нету</Text> : <Text>Товаров нету</Text>}
      </View>
      {sneakers.map((sneaker) => {
        const itemData = TestSneakers.find(s => s.id === sneaker.sneakerId);
        return (
          <ShopCartCard
            cost={itemData?.cost || 0}
            name={itemData?.name || "Unknown"}
            key={sneaker.sneakerId}
          />
        )
      })}
    </View>
  )
}

export default ShopBagScreen;
