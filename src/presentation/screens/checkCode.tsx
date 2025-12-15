import { iconMap } from '@assets/iconMap';
import CodeInput from '@uiKit/codeInput';
import { useNavigation } from '@react-navigation/native';
import { useTheme } from '@uiKit/index';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const CheckCodeScreen = () => {
  const { colors } = useTheme();
  const navigation = useNavigation();
  const styles = StyleSheet.create({
    container: {
      backgroundColor: colors.block,
      flex: 1,
      alignItems: 'center',
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
    contentContainer: {
      marginTop: 124,
      gap: 16,
      alignItems: 'center',
    },
    title: {
      fontFamily: 'Raleway-Bold',
      fontWeight: '700',
      fontSize: 34,
      textTransform: 'capitalize',
      color: colors.text,
      textAlign: 'center',
    },
    description: {
      fontFamily: 'Poppins-Regular',
      fontWeight: '400',
      fontSize: 16,
      lineHeight: 24,
      color: colors.subTextDark,
      textAlign: 'center',
    },
    titleCode: {
      fontFamily: 'Raleway-SemiBold',
      fontWeight: 600,
      fontSize: 21,
      color: colors.text,
      textAlign: 'left',
      textTransform: 'capitalize',
    },
    sendCodeContainer: {
      flexDirection: 'row',
      justifyContent: 'space-between',
    },
    sendCodeText: {
      fontFamily: 'Poppins-SemiBold',
      fontWeight: '600',
      fontSize: 16,
      color: colors.text,
      textAlign: 'center',
    },
    sendCodeTimer: {
      marginLeft: 12,
      fontFamily: 'Poppins-Regular',
      fontWeight: '400',
      fontSize: 16,
      color: colors.subTextDark,
      textAlign: 'center',
    },
  });
  const BackIcon = iconMap['back'];
  const [secondsLeft, setSecondsLeft] = useState<number>(30);
  useEffect(() => {
    const interval = setInterval(() => {
      setSecondsLeft(prev => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(interval);
  });
  return (
    <View style={styles.container}>
      <View style={styles.backButtonContainer}>
        <TouchableOpacity
          style={styles.backButton}
          onPress={() => navigation.goBack()}
        >
          <BackIcon color={colors.text} />
        </TouchableOpacity>
      </View>
      <View style={styles.contentContainer}>
        <View
          style={{ gap: 8, alignItems: 'center', justifyContent: 'center' }}
        >
          <Text style={styles.title}>OTP проверка</Text>
          <Text style={styles.description}>
            Пожалуйста, проверьте свою электронную почту, чтобы увидеть код
            подтверждения
          </Text>
        </View>
        <View style={{ width: '100%', gap: 20 }}>
          <Text style={styles.titleCode}>OTP код</Text>
          <CodeInput length={6} />
          <View style={styles.sendCodeContainer}>
            <TouchableOpacity disabled={true} style={{ alignItems: 'center' }}>
              <Text style={styles.sendCodeText}>Отправить еще</Text>
            </TouchableOpacity>
            <Text style={styles.sendCodeTimer}>{`00:${
              secondsLeft < 10 ? '0' : ''
            }${secondsLeft}`}</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default CheckCodeScreen;
