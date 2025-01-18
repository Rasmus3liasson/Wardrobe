import BackArrowNavigation from "@/components/ui/navigation/backArrowNavigation";
import { Image, ScrollView, View } from "react-native";
import CommentSection from "./commentSection";
import LikesProfile from "./like";
import Save from "./save";
import Share from "./share";

interface PictureProps {
  postId: number;
  user: string;
  userImage: string;
  image: string;
  caption: string;
  likes: number;
  comments: number;
}

import { useScrollNoTop } from "@/components/ui/utils/handleScrollTop";

export default function Post({
  postId,
  user,
  userImage,
  image,
  caption,
  likes,
  comments,
}: PictureProps) {
  const { scrollViewRef, handleScroll } = useScrollNoTop();

  return (
    <ScrollView
      ref={scrollViewRef}
      showsVerticalScrollIndicator={false}
      onScroll={handleScroll}
      scrollEventThrottle={16}
    >
      <View>
        <View className="bg-blue-200 rounded-b-md h-3/4 max-h-96">
          <BackArrowNavigation />

          <View className="flex-row items-center gap-4">
            <Image
              className="w-20 h-20 rounded-xl"
              source={{ uri: userImage }}
            />
          </View>
        </View>

        <View className="flex flex-row justify-between items-center mx-5 mt-4 space-x-4">
          <LikesProfile />

          <View className="flex-row items-center">
            <Save />
            <Share />
            
          </View>
        </View>
        <View className="border-b-2 border-gray-200 mx-5 my-4"></View>
        <View className="mx-5 mt-4">
          <CommentSection />
        </View>
      </View>
    </ScrollView>
  );
}
