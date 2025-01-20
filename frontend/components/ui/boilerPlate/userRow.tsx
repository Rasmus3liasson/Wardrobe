import { Text, View } from "@/components/Themed";
import { AppNavigationProp } from "@/types/navigation";
import { useNavigation } from "expo-router";
import { Image, TouchableOpacity } from "react-native";


interface UserDataI {
  id: number;
  title: string;
  image: string;
}

export default function UserRow({
  arrUser,
  slice,
}: {
  arrUser: UserDataI[];
  slice?: number;
}) {
  const splitData = slice ? arrUser.slice(0, slice) : arrUser;
  const navigation = useNavigation<AppNavigationProp>();
  const navigateTo = () => {
    navigation.navigate("Profile");
  };

  return (
    <View className="flex-row flex-wrap justify-start gap-5">
      {splitData.map((item: UserDataI) => (
        <TouchableOpacity key={item.id} onPress={() => navigateTo()}>
          <View className="flex items-center">
            <Image
              source={{ uri: item.image }}
              className="w-20 h-20 rounded-full"
            />
          </View>
          <Text className="text-center">{item.title}</Text>
        </TouchableOpacity>
      ))}
    </View>
  );
}
