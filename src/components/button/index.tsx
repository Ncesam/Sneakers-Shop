import { useTheme } from "@theme/hooks";
import { ButtonProps } from "./buttonProps";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { iconMap } from "@assets/iconMap";



const Button = ({ onPress, title, isAccent, isShopBag, paddingHorizontal}: ButtonProps) => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        mainContainer: {
            borderRadius: 14,
            backgroundColor: isAccent ? colors.accent : colors.block,
            position: "relative",
            paddingHorizontal: paddingHorizontal ? paddingHorizontal : 121.5,
            paddingVertical: 14
        },
        shopBagContainer: {
            position: "absolute",
            left: 12,
            bottom: 12,
            width: 24,
            height: 24,
            alignItems: "center",
            justifyContent: "center"
        },
        title: {
            fontFamily: "New Peninim MT-Inclined",
            fontSize: 14,
            lineHeight: 22,
            letterSpacing: 0,
            color: isAccent ? colors.background : colors.text,
        },
    })
    const Icon = isShopBag ? iconMap["shopBag"] : null

    return (
        <TouchableOpacity style={styles.mainContainer}>
            {Icon ? (
                <View style={styles.shopBagContainer}>
                    <Icon color={colors.background}/>
                </View>
            ) : null}
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;