import { useTheme } from "@uiKit/index";
import { Image, StyleSheet, Text, View } from "react-native";
import MainScreenBoot from "@assets/components/main-screen-boot.png";
import TravelOnboardingBoot from "@assets/components/travel-onboarding-boot.png";
import StrengthOnboardingBoot from "@assets/components/strength-onboarding-boot.png";
import FocusedLineOnboarding from "@assets/components/focused-line-onboarding.svg";
import LineOnboarding from "@assets/components/line-onboarding.svg";
import WelcomeOnboardingBackground from "@assets/components/welcome-onboarding-backgroud.svg";
import TravelOnboardingBackground from "@assets/components/travel-onboarding-background.svg";
import StrengthOnboardingBackground from "@assets/components/strength-onboarding-background.svg";
import LinearGradient from "react-native-linear-gradient";

export const WelcomeOnboardingScreen = () => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.accent,
            width: "100%",
            height: "100%",
            position: "relative",
            alignItems: "center"
        },
        welcomeText: {
            width: 267,
            textAlign: "center",
            textAlignVertical: "bottom",
            fontFamily: "Raleway-Black",
            fontWeight: "900",
            paddingTop: 70,
            marginBottom: 108,
            fontSize: 30,
            color: colors.block,
            letterSpacing: 0
        },
        mainImage: {
            width: "100%",
            height: 302,
            marginBottom: 40
        },
        lineContainer: {
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
        },
        buttonContainer: {
            position: "absolute",
            bottom: 36
        },
        background: {
            position: "absolute",
            zIndex: 0,
            top: 83
        }

    })
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["#48B2E7", "#0076B1"]} style={styles.container}>
            <WelcomeOnboardingBackground style={styles.background} />
            <Text style={styles.welcomeText}>
                ДОБРО ПОЖАЛОВАТЬ
            </Text>
            <Image source={MainScreenBoot} style={styles.mainImage} />
            <View style={styles.lineContainer}>
                <FocusedLineOnboarding color={colors.block} />
                <LineOnboarding color={colors.disable} />
                <LineOnboarding color={colors.disable} />
            </View>
        </LinearGradient>
    )
}

export const TravelOnboardingScreen = () => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        background: {
            position: "absolute",
            zIndex: 0,
            top: 33,
        },
        container: {
            backgroundColor: colors.accent,
            width: "100%",
            height: "100%",
            position: "relative",
            alignItems: "center"
        },
        lineContainer: {
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
        },
        imageContainer: {
            marginTop: 80,
            width: "100%",
            position: "relative"
        },
        mainImage: {
            width: "100%",
            zIndex: 1,
            height: 302,
        },
        buttonContainer: {
            position: "absolute",
            bottom: 36
        },
        title: {
            marginTop: 60,
            marginBottom: 12,
            fontFamily: "Raleway-Bold",
            fontSize: 34,
            lineHeight: 44.2,
            textAlignVertical: "center",
            fontWeight: 700,
            width: 315,
            textAlign: "center",
            color: colors.block
        },
        description: {
            marginBottom: 40,
            fontFamily: "Poppins-Regular",
            fontSize: 16,
            lineHeight: 24,
            textAlignVertical: "center",
            fontWeight: 400,
            width: 315,
            textAlign: "center",
            color: colors.subTextLight
        }

    });
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["#48B2E7", "#0076B1"]} style={styles.container}>
            <View style={styles.imageContainer}>
                <TravelOnboardingBackground style={styles.background} />
                <Image source={TravelOnboardingBoot} style={styles.mainImage}/>
            </View>
            <Text style={styles.title}>
                Начнем путешествие
            </Text>
            <Text style={styles.description}>
                Умная, великолепная и модная коллекция Изучите сейчас
            </Text>
            <View style={styles.lineContainer}>
                <LineOnboarding color={colors.disable} />
                <FocusedLineOnboarding color={colors.block} />
                <LineOnboarding color={colors.disable} />
            </View>
        </LinearGradient>
    )
}

export const StrengthOnboardingScreen = () => {
    const { colors } = useTheme();
    const styles = StyleSheet.create({
        background: {
            position: "absolute",
            zIndex: 0,
            top: 28,
            left: 52,
        },
        container: {
            backgroundColor: colors.accent,
            width: "100%",
            height: "100%",
            position: "relative",
            alignItems: "center"
        },
        lineContainer: {
            flexDirection: "row",
            gap: 12,
            alignItems: "center",
        },
        imageContainer: {
            marginTop: 80,
            width: "100%",
            position: "relative"
        },
        mainImage: {
            width: "100%",
            zIndex: 1,
            height: 302,
        },
        title: {
            marginTop: 60,
            marginBottom: 12,
            fontFamily: "Raleway-Bold",
            fontSize: 34,
            lineHeight: 44.2,
            textAlignVertical: "center",
            fontWeight: 700,
            width: 315,
            textAlign: "center",
            color: colors.block
        },
        description: {
            marginBottom: 40,
            fontFamily: "Poppins-Regular",
            fontSize: 16,
            lineHeight: 24,
            textAlignVertical: "center",
            fontWeight: 400,
            width: 315,
            textAlign: "center",
            color: colors.subTextLight
        }

    });
    return (
        <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["#48B2E7", "#0076B1"]} style={styles.container}>
            <View style={styles.imageContainer}>
                <StrengthOnboardingBackground style={styles.background} />
                <Image source={StrengthOnboardingBoot} style={styles.mainImage}/>
            </View>
            <Text style={styles.title}>
                У Вас Есть Сила, Чтобы
            </Text>
            <Text style={styles.description}>
                В вашей комнате много красивых и привлекательных растений
            </Text>
            <View style={styles.lineContainer}>
                <LineOnboarding color={colors.disable} />
                <LineOnboarding color={colors.disable} />
                <FocusedLineOnboarding color={colors.block} />
            </View>
        </LinearGradient>
    )
}
