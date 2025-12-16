import { FC } from "react";
import { CategoryProps } from "./props";
import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { ShadowedView } from "react-native-fast-shadow";
import { useTheme } from "@uiKit/index";

const Category: FC<CategoryProps> = ({ id, name }) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      shadowColor: "#0000000A",
      shadowOffset: { width: 0, height: 2 },
      shadowRadius: 15,
      shadowOpacity: 1,
      backgroundColor: colors.block,
      borderRadius: 8,
      flex: 1,
      width: 108,
      height: 40,
      alignItems: "center",
      textAlignVertical: "center",
      justifyContent: "center"
    }
  })
  return (
    <TouchableOpacity>
      <ShadowedView style={styles.container}>
        <Text>{name}</Text>
      </ShadowedView>
    </TouchableOpacity>

  )
}


export default Category;
