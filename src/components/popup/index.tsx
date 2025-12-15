import {
  Modal,
  Platform,
  Pressable,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { PopupProps } from './props';
import { ShadowedView } from 'react-native-fast-shadow';
import { BlurView } from '@react-native-community/blur';
import { useTheme } from '@theme/hooks';
import { iconMap } from '@assets/iconMap';
import Button from '@components/button';
import { Children } from 'react';

const Popup = ({ isVisible, onClose, setIsVisible, children }: PopupProps) => {
  const { colors } = useTheme();
  const closeModal = () => {
    setIsVisible(false);
  };
  const styles = StyleSheet.create({
    absolute: {
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      borderRadius: 16,
      backgroundColor: colors.block,
      paddingVertical: 30,
      paddingHorizontal: 10,
      marginHorizontal: 20,
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 4,
    },
  });
  return (
    <Modal
      visible={isVisible}
      transparent={true}
      animationType="fade"
      onRequestClose={() => {
        closeModal();
        onClose && onClose();
      }}
      statusBarTranslucent={true}
    >
      {Platform.OS === 'android' && (
        <StatusBar translucent={true} barStyle="dark-content" />
      )}

      <Pressable
        onPress={() => {
          closeModal();
          onClose && onClose();
        }}
        style={{ flex: 1, backgroundColor: '#00000066' }}
      >
        <BlurView
          style={StyleSheet.absoluteFill}
          blurType="light"
          blurRadius={10}
          blurAmount={20}
        />

        <View
          style={{ alignItems: 'center', justifyContent: 'center', flex: 1 }}
        >
          <Pressable
            onPress={event => event.stopPropagation()}
            onTouchStart={event => event.stopPropagation()}
          >
            <ShadowedView style={styles.container}>{children}</ShadowedView>
          </Pressable>
        </View>
      </Pressable>
    </Modal>
  );
};

export default Popup;
