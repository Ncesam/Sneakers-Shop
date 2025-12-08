import React from "react";
import { BottomTabBarProps, createBottomTabNavigator } from "@react-navigation/bottom-tabs"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { iconMap } from "@assets/iconMap";
import { useTheme } from "@theme/hooks";
import NavigationMenuBackground from "@assets/components/navigation-down-panel.svg";
import CoverScreen from "@screens/cover";
import {ShadowedView} from "react-native-fast-shadow"

const Tab = createBottomTabNavigator();

const NavigationMenu = ({ state, descriptors, navigation }: BottomTabBarProps) => {
    const { colors } = useTheme()
    const styles = StyleSheet.create({
        middleIcon: {
            
        },
        icon: {
        },
        background: {
            zIndex: 0,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: colors.background,
            width: "100%",
            height: '100%'
        },
        container: {
            height: 113 ,
        },
        middleIconContainer: {
            backgroundColor: colors.accent,
            padding: 16,
            borderRadius: 30,
            bottom: 20,
            shadowColor: colors.accent,
            shadowOffset: {height: 8, width: 0},
            shadowRadius: 14,
            shadowOpacity: 0.2
        },
        iconContainer: {},
        innerContainer: {
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-around",
            zIndex: 1,
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
        },
    })
    return (
        <View style={styles.container}>
            <NavigationMenuBackground style={styles.background} color={colors.block} />
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
                    const iconName = route.name.toString();
                    const Icon = iconMap[iconName];
                    if (!Icon) {
                        return null;
                    }
                    return (
                        <TouchableOpacity key={route.key} onPress={onPress}>
                            <ShadowedView style={index === 2 ? styles.middleIconContainer : styles.iconContainer}>
                                <Icon color={isFocused ? index === 2 ? colors.text : colors.accent : colors.text} style={index === 2 ? styles.middleIcon : styles.icon} />
                            </ShadowedView>
                        </TouchableOpacity>
                    )
                })}
            </View>

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
        <Tab.Screen name="home" component={CoverScreen} />
        <Tab.Screen name="favorite" component={CoverScreen} />
        <Tab.Screen name="shopBag" component={CoverScreen} />
        <Tab.Screen name="notification" component={CoverScreen} />
        <Tab.Screen name="profile" component={CoverScreen} />


    </Tab.Navigator>
)

export default BottomTabsMenu;