import { iconMap } from "@assets/iconMap";
import Button from "@components/button";
import Input from "@components/input";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@theme/hooks";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const RecoveryScreen = () => {
    const { colors } = useTheme();
    const navigation = useNavigation();
    const styles = StyleSheet.create({
        container: {
            backgroundColor: colors.block,
            width: "100%",
            height: "100%",
            position: 'relative',
            alignItems: "center"
        },
        innerContainer: {
            position: "absolute",
            top: 121
        },
        title: {
            marginBottom: 12,
            fontFamily: "Raleway-Bold",
            fontSize: 34,
            lineHeight: 44.2,
            textAlignVertical: "center",
            fontWeight: 700,
            width: 315,
            textAlign: "center",
            color: colors.text
        },
        description: {
            fontFamily: "Poppins-Regular",
            fontSize: 16,
            lineHeight: 24,
            textAlignVertical: "center",
            fontWeight: 400,
            width: 315,
            textAlign: "center",
            color: colors.subTextDark
        },
        inputContainer: {
            gap: 30,
            flexDirection: "column"
        },
        recoveryButtonContainer: {
            marginTop: 12,
            flexDirection: "column",
            gap: 24,
            width: "100%"
        },

        backButton: {
            borderRadius: 40,
            backgroundColor: colors.background,
            width: 44,
            height: 44,
            alignItems: "center",
            justifyContent: "center"
        },
        backButtonContainer: {
            position: "absolute",
            left: 20,
            top: 46
        }
    })
    const BackIcon = iconMap["back"];
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.backButtonContainer}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <BackIcon color={colors.text} />
                </TouchableOpacity>
            </View>
            <View style={styles.innerContainer}>
                <Text style={styles.title}>
                    Забыл Пароль
                </Text>
                <Text style={styles.description}>
                    Введите Cвою Учетную Запись Для Сброса
                </Text>
                <View style={styles.inputContainer}>
                    <Input type="email" />
                </View>
                <View style={styles.recoveryButtonContainer}>
                    <Button title="Отправить" isAccent />
                </View>
            </View>
        </KeyboardAvoidingView>
    )
}

export default RecoveryScreen;