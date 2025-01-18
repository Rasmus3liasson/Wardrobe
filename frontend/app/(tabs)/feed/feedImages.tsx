import { Text, View } from "@/components/Themed";
import { AppNavigationProp } from "@/types/navigation";
import { useNavigation } from "expo-router";
import { Dimensions, FlatList, Image, TouchableOpacity } from "react-native";

interface FeedImageItem {
  id: number;
  image: string;
}

interface FeedImagesProps {
  data: FeedImageItem[];
}

export default function FeedImages({ data }: FeedImagesProps) {
    const { height } = Dimensions.get("window");
    const navigation = useNavigation<AppNavigationProp>();

    return (
        <FlatList
            data={data}
            keyExtractor={(item) => item.id.toString()}
            horizontal={false}
            pagingEnabled
            showsVerticalScrollIndicator={false}
            snapToAlignment="start"
            snapToInterval={height}
            decelerationRate="fast"
            renderItem={({ item }) => (
                <View style={{ height }}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("screens/post/[postId]", {
                                postId: item.id,
                                name: "Post",
                            });
                        }}
                    >
                        <Text>{item.id}</Text>
                        <Image
                            className="w-full h-full rounded-l"
                            source={{ uri: item.image }}
                            resizeMode="cover"
                        />
                    </TouchableOpacity>
                </View>
            )}
        />
    );
}
