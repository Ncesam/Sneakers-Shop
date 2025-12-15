import { useEffect, useEffectEvent, useMemo, useState } from 'react';
import { InputProps } from './props';
import { iconMap } from '@assets/iconMap';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import { useTheme } from '@theme/hooks';

const Input: React.FC<InputProps> = ({
  helperText,
  type,
  value,
  onChange,
  errorText,
}) => {
  const { colors } = useTheme();
  const isPasswordField = type === 'password';
  const [isPasswordVisible, setIsPasswordVisible] = useState<boolean>(true);
  const Icon = isPasswordVisible ? iconMap['eyeClose'] : iconMap['eyeOpen'];

  const togglePasswordVisibility = () => {
    setIsPasswordVisible(prev => !prev);
  };

  const styles = StyleSheet.create({
    container: {
      gap: 12,
    },
    helperText: {
      color: colors.text,
      fontFamily: 'Raleway-Medium',
      fontWeight: 500,
      fontSize: 16,
      lineHeight: 20,
    },
    backgroundInput: {
      backgroundColor: colors.background,
      borderRadius: 14,
      paddingVertical: 4,
      paddingLeft: 4,
      position: 'relative',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'space-between',
    },
    input: {
      fontFamily: 'Poppins-Medium',
      fontWeight: 500,
      fontSize: 14,
      width: '80%',
      color: colors.text,
    },
    iconContainer: {
      width: 24,
      height: 24,
      right: 14,
    },
    errorText: {
      color: colors.red,
      fontFamily: 'Raleway-Medium',
      fontWeight: 500,
      fontSize: 12,
      lineHeight: 16,
    },
  });
  var placeholderText;
  if (isPasswordField) {
    placeholderText = '•••••••';
  } else if (type === 'email') {
    placeholderText = 'xyz@gmail.com';
  } else {
    placeholderText = 'xxxxxxxx';
  }
  return (
    <View style={styles.container}>
      {helperText && <Text style={styles.helperText}>{helperText}</Text>}
      <View style={styles.backgroundInput}>
        <TextInput
          placeholder={placeholderText}
          placeholderTextColor={colors.hint}
          style={styles.input}
          value={value?.toString()}
          onChange={onChange}
          secureTextEntry={isPasswordField ? isPasswordVisible : false}
        />
        {isPasswordField ? (
          <TouchableOpacity
            style={styles.iconContainer}
            onPress={togglePasswordVisibility}
          >
            <Icon color={colors.hint} />
          </TouchableOpacity>
        ) : null}
      </View>
      {errorText && <Text style={styles.errorText}>{errorText}</Text>}
    </View>
  );
};

export default Input;
