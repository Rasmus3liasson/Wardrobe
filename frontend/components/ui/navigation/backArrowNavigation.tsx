import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Pressable, View } from "react-native";

export default function BackArrowNavigation() {
  const navigation = useNavigation();

  return (
    <View className="absolute top-12 left-3 z-20">
      <Pressable onPress={() => navigation.goBack()}>
        {({ pressed }) => (
          <FontAwesome
            name="arrow-left"
            size={30}
            color={Colors.light.tint}
            style={{ marginLeft: 20, opacity: pressed ? 0.5 : 1 }}
          />
        )}
      </Pressable>
    </View>
  );
}
