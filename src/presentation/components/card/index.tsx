import { useTheme } from "@theme/hooks";
import { CardProps } from "./cardProps";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { iconMap } from "@assets/iconMap";
import React, { useState } from "react";
import FavoriteIconSVG from "@assets/icons/favorite.svg";



const Card = ({ isFavorite, isInShopCart, isBestSeller, price, title, imageURI }: CardProps) => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        outerContainer: {
            backgroundColor: colors.block,
            width: 150,
            borderRadius: 16,
            position: "relative",
        },
        innerContainer: {
            padding: 8,
            paddingTop: 18,
            gap: 12,
            paddingBottom: 4,
            flexDirection: "column",
        },
        bottomContainer: {
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center"
        },
        favoriteCircle: {
            position: "absolute",
            left: 9,
            top: 9,
            width: "24%",
            aspectRatio: 1,
            borderRadius: 9000,
            backgroundColor: colors.background,
            alignItems: "center",
            justifyContent: "center",

        },
        favoriteHeart: {
            width: 15,
            height: 13,
        },
        itemImageContainer: {
            alignItems: "center",
            justifyContent: "center",
        },
        itemImage: {
            width: 118,
            height: 70,
        },
        textContainer: {
            flexDirection: "column",
        },
        textBestSeller: {
            fontFamily: "Poppins-Medium",
            fontSize: 12,
            fontWeight: "500",
            color: colors.accent
        },
        shopCart: {
            width: 15,
            height: 15,
        },
        shopCartContainer: {
            backgroundColor: colors.accent,
            width: 32,
            height: 32,
            borderTopLeftRadius: 16,
            borderBottomRightRadius: 16,
            alignItems: "center",
            justifyContent: "center",
            padding: 4,
        },
        title: {
            fontFamily: "Raleway-SemiBold",
            fontSize: 16,
            fontWeight: "600",
            color: colors.hint
        },
        price: {
            fontFamily: "Poppins-Medium",
            fontWeight: "500",
            fontSize: 14,
            color: colors.text,
            paddingLeft: 8
        }
    })
    const [IsFavorite, setIsFavorite] = useState<boolean>(isFavorite ? true : false);
    const toggleFavorite = () => setIsFavorite((prev) => !prev);


    const favoriteIconName = IsFavorite ? "favoriteFill" : "favorite";
    const shopCartIconName = isInShopCart ? "shopCart" : "add";
    const FavoriteIcon = iconMap[favoriteIconName];
    const ShopCartIcon = iconMap[shopCartIconName];


    return (
        <TouchableOpacity style={styles.outerContainer}>
            <View style={styles.innerContainer}>
                <TouchableOpacity style={styles.favoriteCircle} hitSlop={{top: 30, bottom: 30, left:30, right:30}} onPress={toggleFavorite}>
                    <Image source={FavoriteIcon} style={styles.favoriteHeart} />
                </TouchableOpacity>

                <View style={styles.itemImageContainer}>
                    <Image source={imageURI ? imageURI : require("@assets/components/test-image-item.png")} style={styles.itemImage} />

                </View>
                <View style={styles.textContainer}>
                    {isBestSeller ?
                        <View>
                            <Text style={styles.textBestSeller}>BEST SELLER</Text>
                        </View> :
                        null}
                    <Text style={styles.title}>{title}</Text>
                </View>
            </View>
            <View style={styles.bottomContainer}>
                <Text style={styles.price}>{typeof price === "number" ? `₽${price.toFixed(2)}` : price}</Text>
                <View style={styles.shopCartContainer}>
                    <Image source={ShopCartIcon} style={styles.shopCart} />
                </View>
            </View>

        </TouchableOpacity>
    )
}

export default Card;