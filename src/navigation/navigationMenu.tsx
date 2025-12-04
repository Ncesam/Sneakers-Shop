import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs"
import { StyleSheet, TouchableOpacity, View } from "react-native";
import { iconMap } from "@assets/iconMap";
import { useTheme } from "@theme/hooks";



const NavigationMenu = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const { colors } = useTheme()
    const styles = StyleSheet.create({
        middleIcon: {},
        icon: {},
        background: {},
    })
    return (
        <View>
            {state.routes.map((route, index) => {
                const { options } = descriptors[route.key];
                const label =
                    options.tabBarLabel !== undefined
                        ? options.tabBarLabel
                        : options.title !== undefined
                            ? options.title
                            : route.name;
                const isFocused = state.index === index;
                const onPress = () => {
                    const event = navigation.emit({
                        type: 'tabPress',
                        target: route.key,
                        canPreventDefault: true,
                    });
                    if (!isFocused && !event.defaultPrevented) {
                        navigation.navigate(route.name);
                    }
                }
                const iconName = route.name.toString().toLowerCase();
                const Icon = iconMap[iconName];
                if (!Icon) {
                    return null;
                }
                return (
                    <TouchableOpacity key={route.key} onPress={onPress}>
                        <Icon color={isFocused ? colors.accent : colors.text} style={index === 2 ? styles.middleIcon : styles.icon} />
                    </TouchableOpacity>
                )
            })}
        </View>
    )
}