import { FC, useEffect, useState } from "react";
import { FlatList, ScrollView, StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { StoreStackProps } from "@presentation/navigation/StoreStack";
import { useTheme } from "@uiKit/index";
import { iconMap } from "@uiKit/iconMap";
import useAppStore from "@data/storage/app";
import { ISneaker } from "@domain/entity/sneaker";
import Category from "@presentation/components/category";
import { ICategory } from "@domain/entity/category";
import Card from "@presentation/components/card";
import { useNavigation } from "@react-navigation/native";




const PopularScreen: FC = () => {
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
      borderRadius: 40
    },
    itemsScrollContainer: {
      marginTop: 20,
      paddingBottom: 50
    },
  })
  const navigation = useNavigation();
  const setIsDarkBar = useAppStore(state => state.setIsDarkBar);
  const [sneakers, setSneakers] = useState<ISneaker[]>();
  const TestCategories: ICategory[] = [{ name: "Basketball", id: 1, countItems: 10 }, { name: "OutDoor", id: 2, countItems: 10 }, { name: "Football", id: 3, countItems: 10 }, { name: "Voleyball", id: 4, countItems: 10 }, { name: "Все", id: 5, countItems: 10 }]
  const [categories, setCategories] = useState<ICategory[]>();
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
    },
    {
      id: 4,
      name: "Puma RS-X3",
      description: "Массивный силуэт в стиле ретро-футуризма. Смелые цветовые решения и многослойные материалы верха.",
      cost: 9900,
      variants: [
        {
          name: "Multi-color",
          color: "#FFD700",
          imageURI: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/373308/02/sv01/fnd/PNA/fmt/png/RS-X%C2%B3-Puzzle-Sneakers"
        }
      ]
    },
    {
      id: 5,
      name: "Asics Gel-Lyte III",
      description: "Знаменитая модель с раздвоенным язычком. Технология Gel обеспечивает отличную амортизацию и комфорт при длительной ходьбе.",
      cost: 11000,
      variants: [
        {
          name: "Sage Green",
          color: "#87A96B",
          imageURI: "https://images.asics.com/is/image/asics/1201A019_300_00127202_RT_BT_AL?$zoom$"
        }
      ]
    }, {
      id: 6,
      name: "New Balance 550",
      description: "Возвращение легенды баскетбольных площадок 80-х. Низкий силуэт и премиальная кожа делают их идеальными для повседневной носки.",
      cost: 18200,
      variants: [
        {
          name: "White/Green",
          color: "#1B4D3E",
          imageURI: "https://images.asics.com/is/image/asics/1201A019_100_00127202_RT_BT_AL?$zoom$"
        }
      ]
    },
    {
      id: 7,
      name: "Reebok Club C 85",
      description: "Минималистичные теннисные кроссовки из мягкой кожи. Чистый дизайн, который подходит под любой образ.",
      cost: 8500,
      variants: [
        {
          name: "Vintage Chalk",
          color: "#F5F5DC",
          imageURI: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/374915/01/sv01/fnd/PNA/fmt/png/RS-Z-College-Sneakers"
        }
      ]
    },
    {
      id: 8,
      name: "Nike Dunk Low",
      description: "Изначально созданные для баскетбола, Данки стали иконой скейтбординга и уличной моды. Невероятное количество расцветок на любой вкус.",
      cost: 14900,
      variants: [
        {
          name: "Panda",
          color: "#000000",
          imageURI: "https://images.asics.com/is/image/asics/1201A019_001_00127202_RT_BT_AL?$zoom$"
        }
      ]
    },
    {
      id: 9,
      name: "Converse Chuck 70",
      description: "Классические высокие кеды с улучшенной амортизацией и более плотной парусиной. Нестареющая классика.",
      cost: 7200,
      variants: [
        {
          name: "Classic Black",
          color: "#000000",
          imageURI: "https://images.puma.com/image/upload/f_auto,q_auto,b_rgb:fafafa,w_2000,h_2000/global/194449/01/sv01/fnd/PNA/fmt/png/Fuse-Training-Shoes"
        }
      ]
    },
    {
      id: 10,
      name: "Vans Old Skool",
      description: "Первые кроссовки для скейтбординга с фирменной боковой полоской. Прочный верх из замши и канваса с вафельной подошвой.",
      cost: 6800,
      variants: [
        {
          name: "Navy Blue",
          color: "#000080",
          imageURI: "https://images.asics.com/is/image/asics/1201A019_400_00127202_RT_BT_AL?$zoom$"
        }
      ]
    }
  ];
  useEffect(() => {
    setIsDarkBar(true);
    const fetchItems = async () => {
    }
    setCategories(TestCategories);
    setSneakers(TestSneakers);
    fetchItems()
  }, [])

  const BackIcon = iconMap["back"];
  const FavoriteIcon = iconMap['favorite'];
  return (
    <View style={styles.container}>
      <View style={styles.topContainer}>
        <TouchableOpacity hitSlop={{ bottom: 12, left: 12, right: 12, top: 12 }} style={styles.backIconContainer} onPress={() => navigation.goBack()} >
          <BackIcon color={colors.text} />
        </TouchableOpacity>
        <Text style={styles.title}>Популярное</Text>
        <TouchableOpacity style={styles.favoriteIconContainer} hitSlop={{ bottom: 12, left: 12, right: 12, top: 12 }} onPress={() => navigation.navigate("favorite")}>
          <FavoriteIcon color={colors.text} />
        </TouchableOpacity>
      </View>

      <FlatList data={sneakers} renderItem={
        ({ item }) => {
          return (
            <View style={{ marginBottom: 15, marginRight: 15 }}>
              <Card price={item.cost} title={item.name} />
            </View>
          )
        }
      } keyExtractor={(item, _) => item.id.toString()} numColumns={2} style={styles.itemsScrollContainer}>
      </FlatList>
    </View>
  )
}

export default PopularScreen;
