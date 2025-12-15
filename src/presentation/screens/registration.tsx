import { iconMap } from '@assets/iconMap';
import Button from '@components/button';
import Input from '@components/input';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@theme/hooks';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const RegistrationScreen = () => {
  const [isActivePolicyCheck, setIsActivePolicyCheck] =
    useState<boolean>(false);
  const [email, setEmail] = useState<string | undefined>();
  const [password, setPassword] = useState<string | undefined>();
  const [username, setUsername] = useState<string | undefined>();
  const [errorsMap, setErrorsMap] = useState<Record<string, string>>({});
  const { colors } = useTheme();
  const navigation = useNavigation();
  const handleRegister = () => {
    if (!email || !password || !username || !isActivePolicyCheck) {
      setErrorsMap({
        ...errorsMap,
        email: !email ? 'Email обязателен' : '',
        password: !password ? 'Пароль обязателен' : '',
        username: !username ? 'Имя обязательно' : '',
        policy: !isActivePolicyCheck ? 'Необходимо согласие' : '',
      });
      return;
    }
    setErrorsMap({});
  };
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.block,
    },
    contentContainer: {
      flexGrow: 1,
      alignItems: 'center',
      paddingBottom: 150,
    },
    title: {
      marginTop: 121,
      marginBottom: 12,
      fontFamily: 'Raleway-Bold',
      fontSize: 34,
      lineHeight: 44.2,
      textAlignVertical: 'center',
      fontWeight: 700,
      width: 315,
      textAlign: 'center',
      color: colors.text,
    },
    description: {
      marginBottom: 40,
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      lineHeight: 24,
      textAlignVertical: 'center',
      fontWeight: 400,
      width: 315,
      textAlign: 'center',
      color: colors.subTextDark,
    },
    inputContainer: {
      gap: 10,
      flexDirection: 'column',
      width: 335,
    },
    loginButtonContainer: {
      marginTop: 12,
      flexDirection: 'column',
      gap: 24,
      width: 315,
    },
    loginContainer: {
      position: 'absolute',
      bottom: 47,
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
    },
    loginText: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      fontSize: 16,
      textAlign: 'center',
      color: colors.hint,
    },
    loginButton: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      fontSize: 16,
      textAlign: 'center',
      color: colors.text,
    },
    policyText: {
      fontFamily: 'Raleway',
      fontWeight: 500,
      fontSize: 16,
      textDecorationLine: 'underline',
      textDecorationStyle: 'solid',
      color: colors.hint,
      alignItems: 'center',
      width: '85%',
    },
    policyIconContainer: {
      width: 18,
      height: 18,
      backgroundColor: isActivePolicyCheck ? colors.accent : colors.background,
      borderRadius: 6,
      justifyContent: 'center',
      alignItems: 'center',
    },
    policyContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flexDirection: 'row',
      gap: 12,
      width: '80%',
    },
    backButton: {
      borderRadius: 40,
      backgroundColor: colors.background,
      width: 44,
      height: 44,
      alignItems: 'center',
      justifyContent: 'center',
    },
    backButtonContainer: {
      position: 'absolute',
      left: 20,
      top: 46,
    },
  });
  const Icon = iconMap['policyCheck'];
  const BackIcon = iconMap['back'];
  const togglePolicyCheck = () => {
    setIsActivePolicyCheck(prev => !prev);
  };
  return (
    <KeyboardAvoidingView
      style={styles.container}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
    >
      <ScrollView
        contentContainerStyle={styles.contentContainer}
        keyboardShouldPersistTaps="always"
      >
        <View style={styles.backButtonContainer}>
          <TouchableOpacity
            style={styles.backButton}
            onPress={() => navigation.goBack()}
          >
            <BackIcon color={colors.text} />
          </TouchableOpacity>
        </View>
        <View>
          <Text style={styles.title}>Регистрация</Text>
          <Text style={styles.description}>
            Заполните Свои Данные Или Продолжите Через Социальные Медиа
          </Text>
        </View>
        <View style={styles.inputContainer}>
          <Input
            type="text"
            helperText="Ваше имя"
            onChange={event => setUsername(event.nativeEvent.text)}
          />
          <Input
            type="email"
            helperText="Email"
            onChange={event => setEmail(event.nativeEvent.text)}
          />
          <Input
            type="password"
            helperText="Пароль"
            onChange={event => setPassword(event.nativeEvent.text)}
          />
        </View>
        <View style={styles.policyContainer}>
          <TouchableOpacity
            style={styles.policyIconContainer}
            onPress={togglePolicyCheck}
          >
            <Icon
              color={isActivePolicyCheck ? colors.block : colors.text}
              width={10}
              height={10}
            />
          </TouchableOpacity>
          <Text style={styles.policyText}>
            Даю согласие на обработку персональных данных
          </Text>
        </View>
        <View style={styles.loginButtonContainer}>
          <Button
            title="Зарегистрироваться"
            isAccent
            paddingHorizontal={0.1}
            onPress={handleRegister}
          />
        </View>
        <View style={styles.loginContainer}>
          <Text style={styles.loginText}>Есть аккаунт?</Text>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Text style={styles.loginButton}>Войти</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default RegistrationScreen;
