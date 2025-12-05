import React from "react";
import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { iconMap } from "@assets/iconMap";
import { useTheme } from "@theme/hooks";
import NavigationMenuBackground from "@assets/components/navigation-down-panel.svg";
import CoverScreen from "@screens/cover";

const Tab = createBottomTabNavigator();

const NavigationMenu = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const { colors } = useTheme()
    const styles = StyleSheet.create({
        middleIcon: {
            color: colors.accent
        },
        icon: {
            color: colors.red
        },
        background: {
            zIndex: 0,
            position: 'absolute',
            left: 0,
            bottom: 0,
            backgroundColor: colors.red
        },
        container: {
            position: "static",
        },
        innerContainer: {
            flexDirection: "row",
            alignItems: "center",
        }
    })
    return (
        <View style={styles.container}>
            <View style={styles.innerContainer}>
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
            <NavigationMenuBackground style={styles.background} />
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
        <Tab.Screen name="Favorite" component={CoverScreen} />
    </Tab.Navigator>
)

export default BottomTabsMenu;