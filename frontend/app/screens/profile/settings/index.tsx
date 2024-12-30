import { Text, View } from "@/components/Themed";
import { AppNavigationProp } from "@/types/navigation";
import { FontAwesome } from "@expo/vector-icons";
import { useNavigation } from "expo-router";
import { Image, TouchableOpacity } from "react-native";

export default function SettingScreen() {
  const navigation = useNavigation<AppNavigationProp>();

  const options = [
    {
      title: "Hantera organisationer",
      icon: "shopping-cart",
      navigation: "manageOrganisation",
    },
    { title: "Byt lösenord", icon: "lock" },
    { title: "Hjälp", icon: "question-circle" },
    { title: "Logga ut", icon: "sign-out" },
  ];

  return (
    <View className="flex-1 bg-white p-4">
      <View className="items-center mb-6">
        <Image
          source={{ uri: "https://via.placeholder.com/100" }}
          className="w-24 h-24 rounded-full mb-2"
        />
        <Text className="text-xl font-semibold">Rasmus Eliasson</Text>
        <TouchableOpacity className="mt-2 px-4 py-2 bg-blue-500 rounded-full">
          <Text className="text-white">Hantera Profil</Text>
        </TouchableOpacity>
      </View>
      <View className="space-y-4">
        {options.map((item, index) => (
          <TouchableOpacity
            onPress={() =>
              item.navigation && navigation.navigate(item.navigation as any)
            }
            key={index}
            className="flex-row items-center justify-between p-4 bg-gray-100 rounded-lg"
          >
            <View className="flex-row items-center">
              <FontAwesome name={item.icon as any} size={26} />
              <Text className="text-lg ml-4">{item.title}</Text>
            </View>
            <FontAwesome name="chevron-right" size={24} />
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
}
