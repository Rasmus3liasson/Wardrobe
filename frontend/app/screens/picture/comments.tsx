import { View } from "@/components/Themed";
import Colors from "@/constants/Colors";
import { FontAwesome } from "@expo/vector-icons";

export default function CommentIcon() {
  return (
    <View className="flex-row items-center gap-1">
      <FontAwesome name="comment" size={20} color={Colors.light.tint} />
    </View>
  );
}
