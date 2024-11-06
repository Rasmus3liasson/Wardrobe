import { Text, View } from "react-native";

export function renderSubHeader(main: string, sub: string) {
  return (
    <View className="my-4">
      <Text className="text-lg font-bold text-gray-800">{main}</Text>
      {sub && <Text className="text-sm text-gray-600">{sub}</Text>}
    </View>
  );
}
