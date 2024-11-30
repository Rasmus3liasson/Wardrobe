import Likes from "@/components/ui/boilerPlate/likes";
import BackArrowNavigation from "@/components/ui/navigation/backArrowNavigation";
import { Image, View } from "react-native";
import CommentIcon from "./comments";

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
          <Image className="w-20 h-20 rounded-xl" source={{ uri: userImage }} />
          <View className="flex-col items-end gap-2"></View>
        </View>
      </View>

      <View className="flex flex-row justify-start items-center ml-5 mt-4 space-x-4">
        <Likes />
        <CommentIcon />
      </View>
    </View>
  );
}
