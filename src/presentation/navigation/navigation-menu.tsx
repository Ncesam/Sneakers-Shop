import React from 'react';
import {
  BottomTabBarProps,
} from '@react-navigation/bottom-tabs';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import { iconMap } from '@assets/iconMap';
import { useTheme } from '@uiKit/index';
import NavigationMenuBackground from '@assets/components/navigation-down-panel.svg';
import { ShadowedView } from 'react-native-fast-shadow';

const NavigationMenu = ({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    middleIcon: {
      color: colors.block,
    },
    icon: {},
    background: {
      zIndex: 0,
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      width: '100%',
      height: '100%',
    },
    container: {
      height: 113,
      position: 'absolute',
      left: 0,
      bottom: 0,
      right: 0,
    },
    middleIconContainer: {
      backgroundColor: colors.accent,
      padding: 16,
      borderRadius: 30,
      bottom: 35,
      shadowColor: colors.accent,
      shadowOffset: { height: 8, width: 0 },
      shadowRadius: 14,
      shadowOpacity: 0.2,
    },
    iconContainer: {},
    innerContainer: {
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-around',
      zIndex: 1,
      position: 'absolute',
      left: 0,
      right: 0,
      bottom: 15,
    },
  });
  return (
    <View style={styles.container}>
      <NavigationMenuBackground
        style={styles.background}
        color={colors.block}
      />
      <View style={styles.innerContainer}>
        {state.routes.map((route, index) => {
          const { options } = descriptors[route.key];
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
          };
          const iconName = route.name.toString();
          const Icon = iconMap[iconName];
          if (!Icon) {
            return null;
          }
          return (
            <TouchableOpacity key={route.key} onPress={onPress}>
              <ShadowedView
                style={
                  index === 2
                    ? styles.middleIconContainer
                    : styles.iconContainer
                }
              >
                <Icon
                  color={isFocused ? colors.accent : colors.subTextDark}
                  style={index === 2 ? styles.middleIcon : styles.icon}
                />
              </ShadowedView>
            </TouchableOpacity>
          );
        })}
      </View>
    </View>
  );
};

export default NavigationMenu;
