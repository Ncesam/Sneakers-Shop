import { FC, useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { useTheme } from "@uiKit/index";
import { iconMap } from "@uiKit/iconMap";
import useAppStore from "@data/storage/app";
import { ISneaker } from "@domain/entity/sneaker";
import Card from "@presentation/components/card";
import { useNavigation } from "@react-navigation/native";
import { SneakerClient } from "@data/api";




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
  useEffect(() => {
    setIsDarkBar(true);
    const fetchItems = async () => {
      const sneakers = await SneakerClient.fetchCategory("Popular")
      setSneakers(sneakers.items);
    }
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
              <Card id={item.id} cost={item.cost} name={item.name} />
            </View>
          )
        }
      } keyExtractor={(item, _) => item.id.toString()} numColumns={2} style={styles.itemsScrollContainer}>
      </FlatList>
    </View>
  )
}

export default PopularScreen;
