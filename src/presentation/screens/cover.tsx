import { useTheme } from "@uiKit/index";
import { StatusBar, StyleSheet, Text } from "react-native";
import LinearGradient from "react-native-linear-gradient";


const CoverScreen = () => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    container: {
      flex: 1,
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
    <LinearGradient start={{ x: 0, y: 0 }} end={{ x: 1, y: 1 }} colors={["#48b2e7", "#0076B1"]} style={styles.container}>
      <Text style={styles.mainText}>MATULEᴹᴱ</Text>
    </LinearGradient>
  );
};

export default CoverScreen;
