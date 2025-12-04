import { useTheme } from "@theme/hooks";
import { CardProps } from "./cardProps";
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { iconMap } from "@assets/iconMap";
import React from "react";
import FavoriteIconSVG from "@assets/icons/favorite.svg";



const Card = ({ isFavorite, isInShopCart, isBestSeller, price, title, imageURI }: CardProps) => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.background,
            padding: 9
        },
        favoriteCircle: {},
        favoriteHeart: {},
        image: {},
        title: {
            fontFamily: "Raleway",
            fontSize: 16,
            fontWeight: "500",
            color: colors.hint
        },
        price: {
            fontFamily: "Poppins",
            fontStyle: "normal",
            fontWeight: "500",
            fontSize: 14,
            color: colors.text
        }
    })
    const favoriteIconName = isFavorite ? "favoriteFill" : "favorite";
    const shopCartIconName = isInShopCart ? "shopCart" : "add";
    const FavoriteIcon = iconMap[favoriteIconName];
    const ShopCartIcon = iconMap[shopCartIconName];

    return (
        <TouchableOpacity style={styles.container}>
            <View>
                <View style={styles.favoriteCircle}>
                    <Image source={FavoriteIcon}  />
                </View>
            </View>
            <View>
                {isBestSeller ?
                    <View>
                        <Text>BEST SELLER</Text>
                    </View> :
                    null}
                <Text style={styles.title}>{title}</Text>
                <View>
                    <Text style={styles.price}>{price}</Text>
                    <View>
                        <Image source={ShopCartIcon} />
                    </View>
                </View>
            </View>


        </TouchableOpacity>
    )
}

export default Card;