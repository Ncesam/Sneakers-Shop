import { iconMap } from '@uiKit/iconMap';
import Button from '@uiKit/button';
import Input from '@uiKit/input';
import Popup from '@uiKit/popup';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@uiKit/index';
import { useState } from 'react';
import {
  KeyboardAvoidingView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';

const RecoveryScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const [isVisiblePopup, setIsVisiblePopup] = useState<boolean>(false);
  const [email, setEmail] = useState<string | undefined>();
  const toggleIsVisiblePopup = () => setIsVisiblePopup(prev => !prev);
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.block,
      flex: 1,
      alignItems: 'center',
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
      gap: 30,
      flexDirection: 'column',
    },
    recoveryButtonContainer: {
      marginTop: 12,
      flexDirection: 'column',
      gap: 24,
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
    popupIconContainer: {
      alignItems: 'center',
      justifyContent: 'center',
      width: 44,
      height: 44,
      borderRadius: 22,
      backgroundColor: colors.accent,
    },
    popupTextContainer: {
      alignItems: 'center',
      gap: 8,
    },
    popupDescription: {
      fontFamily: 'Poppins-Regular',
      fontSize: 16,
      lineHeight: 20,
      textAlign: 'center',
      color: colors.text,
      fontWeight: '400',
      textTransform: 'capitalize',
    },
    popupTitle: {
      fontFamily: 'Raleway-Bold',
      fontSize: 16,
      lineHeight: 20,
      textAlign: 'center',
      color: colors.text,
      fontWeight: '700',
      textTransform: 'capitalize',
    },
  });
  const BackIcon = iconMap['back'];
  const [errorsMap, setErrorsMap] = useState<Record<string, string>>({});
  const handlerSend = () => {
    if (!email) {
      setErrorsMap({ ...errorsMap, email: 'Введите email' });
      return;
    }
    const newEmail = email.trim();
    setEmail(newEmail);
    if (
      newEmail &&
      !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(newEmail)
    ) {
      setErrorsMap({ ...errorsMap, email: 'Неправильный формат email' });
      return;
    }
    setErrorsMap({});
    toggleIsVisiblePopup();
  };
  const EmailOtpIcon = iconMap['emailOtp'];
  return (
    <KeyboardAvoidingView style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <BackIcon color={colors.text} />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Забыл Пароль</Text>
      <Text style={styles.description}>
        Введите Cвою Учетную Запись Для Сброса
      </Text>
      <View style={styles.inputContainer}>
        <Input
          type="email"
          errorText={errorsMap['email']}
          onChange={event => setEmail(event.nativeEvent.text)}
        />
      </View>
      <View style={styles.recoveryButtonContainer}>
        <Button title="Отправить" isAccent onPress={handlerSend} />
      </View>
      <Popup
        isVisible={isVisiblePopup}
        setIsVisible={setIsVisiblePopup}
        onClose={() => navigation.navigate('OTP Input')}
      >
        <View style={{ alignItems: 'center', gap: 8 }}>
          <View style={styles.popupIconContainer}>
            <EmailOtpIcon color={colors.block} />
          </View>
          <View style={styles.popupTextContainer}>
            <Text style={styles.popupTitle}>Проверьте ваш Email</Text>
            <Text style={styles.popupDescription}>
              Мы отправили код восстановления пароля на вашу электронную почту.
            </Text>
          </View>
        </View>
      </Popup>
    </KeyboardAvoidingView>
  );
};

export default RecoveryScreen;
