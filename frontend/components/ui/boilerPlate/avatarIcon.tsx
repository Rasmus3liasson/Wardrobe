import { AppNavigationProp } from "@/types/navigation";
import { useNavigation } from "expo-router";
import { Image, TouchableOpacity } from "react-native";

export const renderAvatarIcon = (
  profilePic: string,
  height: number,
  width: number
) => {
  const navigation = useNavigation<AppNavigationProp>();
  return (
    <TouchableOpacity onPress={() => navigation.navigate("Profile")}>
      <Image
        source={{ uri: profilePic }}
        className={`w-${width.toString()} h-${height.toString()} rounded-full mr-3`}
      />
    </TouchableOpacity>
  );
};
