import Button from "@components/button";
import Input from "@components/input";
import { useNavigation } from "@react-navigation/native";
import { useTheme } from "@theme/hooks";
import { KeyboardAvoidingView, StyleSheet, Text, TouchableOpacity, View } from "react-native";


const LoginScreen = () => {
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
            marginBottom: 40,
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
        loginButtonContainer: {
            marginTop: 12,
            flexDirection: "column",
            gap: 24,
            width: "100%"
        },
        recoveryButtonContainer: {
            alignItems: "flex-end",
        },
        recoveryButtonText: {
            color: colors.hint
        },


        
        registerContainer: {
            position: "absolute",
            bottom: 47,
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "center",
        },
        registerText: {
            fontFamily: "Raleway",
            fontWeight: 500,
            fontSize: 16,
            textAlign: "center",
            color: colors.hint
        },
        registerButton: {
            fontFamily: "Raleway",
            fontWeight: 500,
            fontSize: 16,
            textAlign: "center",
            color: colors.text,
        }
    })
    return (
        <KeyboardAvoidingView style={styles.container}>
            <View style={styles.innerContainer}>
                <View>
                    <Text style={styles.title}>
                        Привет!
                    </Text>
                    <Text style={styles.description}>
                        Заполните Свои Данные Или Продолжите Через Социальные Медиа
                    </Text>
                </View>
                <View style={styles.inputContainer}>
                    <Input type="email" helperText="Email" />
                    <Input type="password" helperText="Пароль" />
                </View>
                <View style={styles.loginButtonContainer}>
                    <View style={styles.recoveryButtonContainer}>
                        <TouchableOpacity onPress={() => navigation.navigate("Recovery")}>
                            <Text style={styles.recoveryButtonText}>Восстановить</Text>
                        </TouchableOpacity>
                    </View>
                    <Button title="Войти" isAccent />
                </View>
            </View>
            <View style={styles.registerContainer}>
                <Text style={styles.registerText}>Вы впервые?
                </Text>
                <TouchableOpacity onPress={() => navigation.navigate("Register")}>
                    <Text style={styles.registerButton}>
                        Создать пользователя
                    </Text>
                </TouchableOpacity>
            </View>
        </KeyboardAvoidingView>
    )
}

export default LoginScreen;