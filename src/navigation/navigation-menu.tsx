import React from "react";
import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { iconMap } from "@assets/iconMap";
import { useTheme } from "@theme/hooks";
import NavigationMenuBackground from "@assets/components/navigation-down-panel.svg"


const NavigationMenu = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const {colors} = useTheme()
    const styles = StyleSheet.create({
        middleIcon: {},
        icon: {
            color: colors.red
        },
        background: {},
    })
    const HomeIcon = iconMap["home"];
    return (
        <View>
            <NavigationMenuBackground styles={styles.background}/>
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
                        <Icon color={isFocused ? colors.accent : colors.text} style={index === 2 ? styles.navigationMenu.middleIcon : styles.navigationMenu.icon}/>
                    </TouchableOpacity>
                )
            })}
            <Text >Привет</Text>
            <HomeIcon color={colors.text} />

        </View>
    )
}

const BottomTabsMenu = () => (
    <Tab.Navigator
        tabBar={props => <NavigationMenu {...props} />}
        screenOptions={{
            headerShown: false,
        }}
    >
        <Tab.Screen name="Home" component={CoverScreen} />
    </Tab.Navigator>
)

export default BottomTabsMenu;