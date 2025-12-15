import { Keyboard, StyleSheet, TextInput, View } from 'react-native';
import { CodeInputProps } from './props';
import { FC, useRef, useState } from 'react';
import { useTheme } from '@theme/hooks';

const CodeInput: FC<CodeInputProps> = ({ length }) => {
  const { colors } = useTheme();
  const [focusedIndex, setFocusedIndex] = useState<number | null>(null);
  const [code, setCode] = useState<Array<string>>(new Array(length).fill(''));
  const refs = useRef<Array<TextInput | null>>(new Array(length).fill(null));
  const setRef = (index: number, ref: TextInput | null) => {
    refs.current[index] = ref;
  };
  const handlerOnKeyPress = (index: number, key: string) => {
    if (key === 'Backspace' && index > 0 && code[index] === '') {
      refs.current[index - 1]?.focus();
      const newCode = [...code];
      newCode[index - 1] = '';
      setCode(newCode);
    }
  };
  const handlerOnChangeText = (index: number, value: string) => {
    const newCode = [...code];
    newCode[index] = value;
    setCode(newCode);

    if (value.length === 1 && index < length - 1) {
      refs.current[index + 1]?.focus();
    }

    if (newCode.join('').length === length) {
      Keyboard.dismiss();
      console.log('Code entered:', newCode.join(''));
    }
  };
  const styles = StyleSheet.create({
    container: {
      flexDirection: 'row',
      gap: 12,
      width: '100%',
      alignItems: 'center',
    },
    inputBlock: {
      fontFamily: 'Poppins-SemiBold',
      fontWeight: '600',
      fontSize: 18,
      color: colors.text,
      backgroundColor: colors.background,
      borderRadius: 12,
      paddingVertical: 34,
      paddingHorizontal: 12,
    },
  });
  return (
    <View style={styles.container}>
      {code.map((value, index) => (
        <TextInput
          value={value}
          key={index}
          style={{
            ...styles.inputBlock,
            borderColor: focusedIndex === index ? colors.accent : 'transparent',
            borderWidth: 1,
          }}
          onChangeText={text => handlerOnChangeText(index, text)}
          ref={ref => setRef(index, ref)}
          onKeyPress={e => handlerOnKeyPress(index, e.nativeEvent.key)}
          maxLength={1}
          onFocus={event => setFocusedIndex(index)}
          onBlur={event => setFocusedIndex(null)}
          selectionColor={'transparent'}
          textAlign="center"
          placeholder="0"
          keyboardType="number-pad"
          placeholderTextColor={colors.text}
        />
      ))}
    </View>
  );
};

export default CodeInput;
