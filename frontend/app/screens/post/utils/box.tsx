import { View } from "@/components/Themed";
import { FontAwesome } from "@expo/vector-icons";

interface renderBoxI {
  iconName: React.ComponentProps<typeof FontAwesome>["name"];
}

export const renderBox = (props: renderBoxI) => {
  const { iconName } = props;
  return (
    <View className="border-2 border-gray-300 rounded-xl p-3 mx-1">
      <FontAwesome name={iconName} size={20} color="gray" />
    </View>
  );
};
