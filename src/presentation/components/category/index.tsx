import { FC } from "react";
import { CategoryProps } from "./props";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ShadowedView } from "react-native-fast-shadow";
import { useTheme } from "@uiKit/index";
import { useNavigation } from "@react-navigation/native";
import { StoreStackProps } from "@presentation/navigation/StoreStack";

const Category: FC<CategoryProps> = ({ id, name, isFocused }) => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      shadowColor: "#0000000A",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 15,
      shadowOpacity: 1,
      backgroundColor: isFocused ? colors.accent : colors.block,
      borderRadius: 8,
      flex: 1,
      width: 108,
      height: 40,
      alignItems: "center",
      textAlignVertical: "center",
      justifyContent: "center"
    },
    text: {
      fontFamily: "Poppins",
      fontWeight: 400,
      fontSize: 12,
      textAlign: "center"
    }
  })
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Category", { id: id, name: name, countItems: 10 })}>
      <ShadowedView style={styles.container}>
        <Text style={styles.text}>{name}</Text>
      </ShadowedView>
    </TouchableOpacity>

  )
}


export default Category;
