import { StyleSheet } from "react-native"
import React from "react";
import NavigationMenuBackgroundSVG from "@assets/components/navigation-down-panel.svg";
import { useTheme } from "@theme/hooks";

const NavigationMenuBackground = () => {
    const styles = StyleSheet.create({
        background: {}
    });
    const { colors } = useTheme();
    return ( 
        <NavigationMenuBackgroundSVG styles={styles.background} color={colors.block}/>
    )
}