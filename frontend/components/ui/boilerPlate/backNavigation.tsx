import { AppNavigationProp } from "@/types/navigation";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { useNavigation } from "expo-router";
import { TouchableOpacity } from "react-native";

export default function BackNavigation() {
  const navigation = useNavigation<AppNavigationProp>();
  return (
    <TouchableOpacity onPress={() => navigation.goBack()}>
      <Ionicons name="arrow-back" size={24} color={"black"} />
    </TouchableOpacity>
  );
}
