import Likes from "@/components/ui/boilerPlate/likes";
import BackArrowNavigation from "@/components/ui/navigation/backArrowNavigation";
import { Image, Text, View } from "react-native";

interface PictureProps {
  pictureId: number;
  user: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
}

export default function PictureId({
  pictureId,
  user,
  userImage,
  image,
  caption,
  likes,
  comments,
}: PictureProps) {
  return (
    <View>
      <View className="bg-blue-200 rounded-b-md h-4/6">
      <BackArrowNavigation />

        <View className="flex-row items-center gap-4">
          <Image className="w-20 h-20 rounded-lg" source={{ uri: userImage }} />
          <View className="flex-col items-end gap-2">
            <Text className="text-gray-800 font-bold">{user}</Text>
            <Text className="text-sm text-gray-600">{caption}</Text>
            <Text className="text-sm text-gray-600">{`${likes} likes`}</Text>
            <Text className="text-sm text-gray-600">{`${comments} comments`}</Text>
          </View>
        </View>
      </View>
      <Likes />
    </View>
  );
}
