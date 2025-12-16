import { FC } from "react";
import { SearchProps } from "./props";
import { StyleSheet, TextInput, TouchableOpacity, View } from "react-native";
import { ShadowedView } from "react-native-fast-shadow";
import { iconMap } from "@uiKit/iconMap";
import { useTheme } from "@uiKit/index";


const Search: FC<SearchProps> = ({ onChangeText, onComplete, withFilter, withVoice }) => {
  const { colors } = useTheme();
  const styles = StyleSheet.create({
    searchContainer: {
      marginTop: 19,
      flexDirection: "row",
      gap: 14,
      alignItems: 'center',
      justifyContent: "space-between",
      width: "100%"
    },
    searchInputContainer: {
      width: withFilter ? null : "100%",
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "flex-start",
      paddingHorizontal: 26,
      paddingVertical: 14,
      backgroundColor: colors.block,
      borderRadius: 14,
      shadowColor: "#0000000A",
      shadowOpacity: 100,
      shadowRadius: 4,
      shadowOffset: { width: 0, height: 4 }
    },
    searchInput: {
      color: colors.hint,
      marginRight: 12,
      width: withVoice ? "80%" : "60%",
      textAlign: "left"
    },
    filtersIconContainer: {
      backgroundColor: colors.accent,
      padding: 14,
      borderRadius: 90,
      shadowColor: "#0000000F",
      shadowOffset: { width: 0, height: 4 },
      shadowRadius: 4,
      shadowOpacity: 1
    },
    separeter: {
      backgroundColor: colors.subTextDark,
      width: 1,
      opacity: 20,
      height: 24,
    },
    voiceContainer: {
      alignItems: "center",
      flexDirection: "row",
      gap: 12,
    }
  });
  const FiltersIcon = iconMap["sliders"];
  const SearchIcon = iconMap['zoom'];
  const MicrophoneIcon = iconMap['microphone'];
  return (
    <View style={styles.searchContainer}>
      <ShadowedView style={styles.searchInputContainer}>
        <SearchIcon color={colors.hint} />
        <TextInput placeholderTextColor={colors.hint} placeholder='Поиск' style={styles.searchInput} />
        {withVoice ? (
          <View style={styles.voiceContainer}>
            <View style={styles.separeter}>
            </View>
            <MicrophoneIcon color={colors.subTextDark} />
          </View>
        ) : null}
      </ShadowedView>
      {withFilter ? (
        <TouchableOpacity>
          <ShadowedView style={styles.filtersIconContainer}>
            <FiltersIcon color={colors.block} width={24} height={24} />
          </ShadowedView>
        </TouchableOpacity>
      ) : null}
    </View>
  );
}


export default Search;
