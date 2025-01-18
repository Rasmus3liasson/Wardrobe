import { Text } from "@/components/Themed";
import Likes from "@/components/ui/boilerPlate/likes";
import { View } from "react-native";

export default function LikesProfile() {
  return (
    <View className=" flex flex-row justify-between border-2 border-gray-300 rounded-md p-2 w-20">
      <Likes />
      <Text className="text-sm font-medium">10K</Text>
    </View>
  );
}
