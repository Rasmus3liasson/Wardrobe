import { Text, View } from "react-native";

export default function WelcomeHeader() {
  return (
    <View className="mb-5 items-center">
      <Text className="text-xl font-bold">Hej name</Text>
      <Text className="text-sm">Välkommen tillbaka</Text>
    </View>
  );
}
