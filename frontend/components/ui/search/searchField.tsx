import { AppNavigationProp } from "@/types/navigation";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { useState } from "react";
import { TextInput, TouchableOpacity, View } from "react-native";

export default function SearchField({
  editable,
  selectTextOnFocus,
  navigateLoaction,
  searchQuery,
  setSearchQuery,
}: {
  editable: boolean;
  selectTextOnFocus: boolean;
  navigateLoaction?: string;
  searchQuery?: string;
  setSearchQuery?: (value: string) => void;
}) {
  const navigation = useNavigation<AppNavigationProp>();

  const [dropdownVisible, setDropdownVisible] = useState(false);

  return (
    <View>
      <TouchableOpacity
        onPress={() => {
          navigateLoaction
            ? navigation.navigate(navigateLoaction as any)
            : setDropdownVisible(!dropdownVisible);
        }}
      >
        <View className="rounded-full shadow-md bg-light-background">
          <View className="flex-row items-center justify-between p-3">
            <TextInput
              className="flex text-base text-light-text w-11/12"
              placeholder="Användare, märke eller klädesplagg"
              placeholderTextColor="#888"
              editable={editable}
              selectTextOnFocus={selectTextOnFocus}
              value={searchQuery}
              onChangeText={(text) => {
                setSearchQuery && setSearchQuery(text);

                setDropdownVisible(true);
              }}
              onFocus={() => {
                if (!navigateLoaction) setDropdownVisible(true);
              }}
            />

            <Ionicons name="search" size={24} color="black" />
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
}
