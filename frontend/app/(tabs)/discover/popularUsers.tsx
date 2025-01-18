import { Text, View } from "@/components/Themed";
import { AppNavigationProp } from "@/types/navigation";
import { useNavigation } from "expo-router";
import { Image, ScrollView, TouchableOpacity } from "react-native";
import { renderSubHeader } from "./components/subHeader";

export default function PopularUsers() {
  const carouselData = [
    {
      id: 1,
      title: "Organization 1",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 2,
      title: "Organization 2",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 3,
      title: "Organization 3",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 4,
      title: "Organization 4",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 5,
      title: "Organization 5",
      image: "https://via.placeholder.com/150",
    },
    {
      id: 6,
      title: "Organization 6",
      image: "https://via.placeholder.com/150",
    },
  ];

  const navigation = useNavigation<AppNavigationProp>();
  const navigateTo = () => {
    navigation.navigate("Profile");
  };
  return (
    <>
      <View className="mt-4">
        {renderSubHeader("Populära", "Trendande användare", true)}
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {carouselData.map((item) => (
            <TouchableOpacity
              key={item.id}
              onPress={() => navigateTo()}
            >
              <View className="flex items-center space-x-2">
                <Image
                  source={{ uri: item.image }}
                  className="w-20 h-20 rounded-full"
                />
                <Text className="text-md">{item.title}</Text>
              </View>
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
    </>
  );
}
