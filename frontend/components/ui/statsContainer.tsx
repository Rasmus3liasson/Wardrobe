import { Text, View } from "react-native";

interface RenderStatsContainerProps {
  title: string;
  value: string;
  subText: string;
}

export default function StatsContainer({
  title,
  value,
  subText,
}: RenderStatsContainerProps) {
  return (
    <View className="flex-1 bg-blue-200 p-3 rounded-lg mx-2">
      <Text className="text-lg font-bold text-gray-800 whitespace-nowrap">
        {title}
      </Text>
      <Text className="text-2xl font-bold text-gray-800">{value}</Text>
      <Text className="text-sm text-gray-600">{subText}</Text>
    </View>
  );
}
