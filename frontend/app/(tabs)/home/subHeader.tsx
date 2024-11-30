import { Text, View } from "react-native";

export function renderSubHeader(main: string, sub: string, showAll: boolean) {
  return (
    <View className="my-4">
      <View className="flex justify-between flex-row items">
        <View>
          <Text className="text-lg font-bold text-gray-800 mr-2">{main}</Text>
          {sub && <Text className="text-sm text-gray-600">{sub}</Text>}
        </View>
        {showAll && (
          <Text className="text-sm">
            Visa alla
          </Text>
        )}
      </View>
    </View>
  );
}
