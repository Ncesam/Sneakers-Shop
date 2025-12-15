import { useTheme } from "@theme/hooks";
import { useEffect, useState } from "react";
import { ActivityIndicator, StyleSheet, Text, View } from "react-native";
import LinearGradient from "react-native-linear-gradient";


const LoadingScreen = () => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            flex: 1,
            width: "100%",
            height: "100%",
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: colors.accent
        },
        mainText: {
            color: colors.block,
            fontFamily: 'Raleway-Bold',
            fontWeight: 700,
            fontSize: 42,
            letterSpacing: 0,
        }
    });
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["#48B2E7", "#0076B1"]} style={styles.container}>
            <View style={{ flexDirection: "column", gap: 30 }}>
                <ActivityIndicator
                    size="large"
                    color={colors.background}
                />
                <LoadingDots color={colors.subTextLight}/>

            </View>
        </LinearGradient>
    );
};

export default LoadingScreen;

const LoadingDots = ({ baseText = "Загрузка данных", color = "#888", speed = 500 }) => {
    const [dots, setDots] = useState(1);
    const styles = StyleSheet.create({
        text: {
            fontSize: 16,
        },
    });

    useEffect(() => {
        const intervalId = setInterval(() => {
            setDots(prevDots => (prevDots % 3) + 1);
        }, speed);


        return () => {
            clearInterval(intervalId);
        };
    }, [speed]);


    const dotString = '.'.repeat(dots);

    return (
        <Text style={[styles.text, { color }]}>
            {baseText}
            {dotString}
        </Text>
    );
};


