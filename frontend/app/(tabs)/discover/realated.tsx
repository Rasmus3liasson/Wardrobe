import { View } from "@/components/Themed";
import { TouchableOpacity } from "react-native";

import Likes from "@/components/ui/boilerPlate/likes";
import { AppNavigationProp } from "@/types/navigation";
import { useNavigation } from "expo-router";
import { renderSubHeader } from "./components/subHeader";

export default function Related() {
  const navigation = useNavigation<AppNavigationProp>();
  return (
    <View>
      {renderSubHeader("Relaterade", "", false)}
      <View className="flex-row flex-wrap">
        {[...Array(10)].map((_, index) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("screens/post/[postId]", {
                postId: index,
                name: "Post",
              });
            }}
            key={index}
            className="w-1/2 p-1"
          >
            <View className="bg-gray-400 rounded-md h-60 relative">
              <View className="absolute bottom-0 right-0 rounded-full p-2 m-2 bg-light-tabIconDefault">
                <Likes />
              </View>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
