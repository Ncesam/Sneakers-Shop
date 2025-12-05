import { useTheme } from "@theme/hooks";
import { ButtonProps } from "./buttonProps";
import { ActivityIndicator, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { getResizedIcon, iconMap } from "@assets/iconMap";
import ImageResizer from "react-native-image-resizer";
import { useEffect, useState } from "react";



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
    const [resizedIconURI, setResizedIconURI] = useState<string | null>(null);
    const [isLoadingIcon, setIsLoadingIcon] = useState(false);
    const sleep = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

    useEffect(() => {
        if (isShopBag) {
            const loadIcon = async () => {
                setIsLoadingIcon(true);
                try {
                    await sleep(3600)
                    const uri = await getResizedIcon("shopBag", 32, 32);
                    setResizedIconURI(uri);
                } catch (error) {
                    console.error("Failed to load resized icon:", error);
                } finally {
                    setIsLoadingIcon(false);
                }
            };

            loadIcon();
        }
    }, [isShopBag]);
    return (
        <TouchableOpacity style={styles.mainContainer}>
            {isShopBag ? (
                <View style={styles.shopBagContainer}>
                    {isLoadingIcon ? (
                        <ActivityIndicator color={isAccent ? colors.background : colors.text} size="small" />
                    ) : (
                        resizedIconURI && (
                            <Image 
                                source={{ uri: resizedIconURI }} 
                                style={{ width: 24, height: 24 }} />
                        )
                    )}
                </View>
            ) : null}
            <Text style={styles.title}>{title}</Text>
        </TouchableOpacity>
    )
}

export default Button;