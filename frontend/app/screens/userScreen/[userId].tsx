import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";
import Likes from "@/components/ui/boilerPlate/likes";
import { AppNavigationProp } from "@/types/navigation";
import { FontAwesome } from "@expo/vector-icons";
import { useLocalSearchParams, useNavigation } from "expo-router";
import { useState } from "react";
import {
  FlatList,
  Image,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ResortDetailScreen() {
  const { orgId, name } = useLocalSearchParams();

  const services = ["Swimming pool", "Parking area", "4 Rooms", "Bars"];

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [likes, setLikes] = useState(false);

  const navigator = useNavigation<AppNavigationProp>();

  const images = [
    "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=500",
    "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    "./images/favicon.png",
  ];

  const scrollContent = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
      >
        <Text className="text-2xl font-bold">{name}</Text>
        <Text className="text-gray-600">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
          consequuntur ullam aliquid commodi dolore dicta culpa consequatur
          excepturi, sunt debitis assumenda. Veniam, iste consectetur adipisci
          dolorum cum reiciendis assumenda dicta!
        </Text>

        <View className="mt-4">
          <Text className="text-lg font-bold">About Us</Text>
          <Text className="text-gray-600 mt-2">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod iure
            a, fugiat natus tenetur veritatis necessitatibus consectetur magnam?
            Accusantium, commodi laborum recusandae consectetur beatae hic atque
            quidem voluptatibus totam dolore. Obcaecati molestiae dicta dolore
            nulla cumque tempora quibusdam ipsam dolorum voluptatibus
            necessitatibus porro reiciendis consectetur veniam, repellat aliquid
            tempore iusto cupiditate nisi nihil! Quod numquam recusandae quam
            atque veniam fugit. Ipsum, recusandae voluptatibus nemo at sunt
            suscipit tempora. Quasi repellat eligendi voluptatum, commodi
            obcaecati beatae harum molestiae quisquam, quam, praesentium
            corporis magni vel laboriosam ab? Dolorem, quis veritatis! Odio,
            debitis.
          </Text>
        </View>

        <View className="mt-4">
          <Text className="text-lg font-bold">Hej</Text>
          <View className="flex flex-wrap flex-row mt-2">
            {services.map((service, index) => (
              <View key={index} className="flex-1 flex-row items-center mt-2">
                <FontAwesome name="check-circle" size={16} color="blue" />
                <Text className="ml-2 text-gray-800">{service}</Text>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    );
  };

  return (
    <View className="flex-1 bg-white">
      <View className="relative">
        <Image
          source={{
            uri: images[currentImageIndex],
          }}
          className="w-full h-64 rounded-b-2xl"
          resizeMode="cover"
        />
        <View className="absolute top-4 right-4 bg-white p-2 rounded-full">
          <Likes />
        </View>

        <FlatList
          className="absolute bottom-4 right-4"
          data={images}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => setCurrentImageIndex(index)}
              key={index}
            >
              <Image
                source={{
                  uri: item,
                }}
                className="w-6 h-6 rounded-full"
                resizeMode="cover"
              />
            </TouchableOpacity>
          )}
        ></FlatList>
      </View>
      <ContainerTemplate content={scrollContent} />

      <View className="flex-row items-center justify-end bg-red-300 pb-9 pt-4 pr-4 border border-t-2 border-green-400 rounded-2xl">
        <TouchableOpacity
          onPress={() => {
            navigator.navigate("Home");
          }}
          className="bg-blue-500 p-4 rounded-lg"
        >
          <Text className="text-white font-bold">Lägg till</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
