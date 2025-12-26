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
import { SneakerClient } from "@data/api";


type Props = NativeStackScreenProps<StoreStackProps, "Category">;

const CategoryScreen: FC<Props> = ({ navigation, route }) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.background,
      flex: 1,
      position: "relative",
      padding: 20,
      paddingTop: 48,
    },
    backIconContainer: {
      position: "absolute",
      left: 20,
      top: 48
    },
    title: {
      fontFamily: "Raleway-SemiBold",
      fontSize: 16,
      fontWeight: 600,
      alignSelf: "center"
    },
    categoryContainer: {
      marginTop: 34,
      flexDirection: "column",
      alignItems: "flex-start",
      gap: 16,
      height: "10%"
    },
    categoryTitle: {
      fontFamily: "Raleway-Bold",
      fontWeight: 600,
      fontSize: 16,
      color: colors.text
    },
    categoriesScrollContainer: {
      flex: 1,
      backgroundColor: colors.background
    },
    categoriesContainer: {
      flexDirection: "row",
      gap: 16
    },
    itemsScrollContainer: {
      marginTop: 20,
      paddingBottom: 50
    },
    itemsContainer: {

    },
  })
  const setIsDarkBar = useAppStore(state => state.setIsDarkBar);
  const [sneakers, setSneakers] = useState<ISneaker[]>();
  const TestCategories: ICategory[] = [{ name: "Basketball", id: 1, countItems: 10 }, { name: "OutDoor", id: 2, countItems: 10 }, { name: "Football", id: 3, countItems: 10 }, { name: "Voleyball", id: 4, countItems: 10 }, { name: "Все", id: 5, countItems: 10 }]
  const [categories, setCategories] = useState<ICategory[]>();
  useEffect(() => {
    setIsDarkBar(true);
    const fetchItems = async () => {
      const sneakers = await SneakerClient.fetchCategory(route.params.name);
      setSneakers(sneakers.items);
    }
    setCategories(TestCategories);
    fetchItems()
  }, [])

  const BackIcon = iconMap["back"];
  return (
    <View style={styles.container}>
      <TouchableOpacity hitSlop={{ bottom: 12, left: 12, right: 12, top: 12 }} style={styles.backIconContainer} onPress={() => navigation.goBack()} >
        <BackIcon color={colors.text} />
      </TouchableOpacity>
      <Text style={styles.title}>{route.params.name}</Text>
      <View style={styles.categoryContainer}>
        <Text style={styles.categoryTitle}>Категории</Text>
        <ScrollView horizontal style={styles.categoriesScrollContainer} contentContainerStyle={styles.categoriesContainer} showsHorizontalScrollIndicator={false} >
          {categories ? categories.map((category, index) =>
            <Category id={category.id} name={category.name} isFocused={route.params.id === category.id} key={index} />
          ) : <Text>Категорий нету</Text>}
        </ScrollView>
      </View>
      <FlatList data={sneakers} renderItem={
        ({ item }) => {
          return (
            <View style={{ marginBottom: 15, marginRight: 15 }}>
              <Card id={item.id} cost={item.cost} name={item.name} isBestSeller={item.id === 1 ? true : false} />
            </View>
          )
        }
      } keyExtractor={(item, _) => item.id.toString()} numColumns={2} style={styles.itemsScrollContainer} contentContainerStyle={styles.itemsContainer}>
      </FlatList>
    </View>
  )
}

export default CategoryScreen;
