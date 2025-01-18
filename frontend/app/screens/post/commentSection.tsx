import { renderAvatarIcon } from "@/components/ui/boilerPlate/avatarIcon";
import { Text, TouchableOpacity, View } from "react-native";

const mockedProfileUrl =
  "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250";
const mockComments = [
  {
    id: 1,
    username: "john_doe",
    profilePic: mockedProfileUrl,
    comment: "This is a great post! Thanks for sharing.",
    link: "/profile/john_doe",
    replies: [
      {
        id: 11,
        username: "jane_smith",
        profilePic: mockedProfileUrl,
        comment: "I totally agree!",
        link: "/profile/jane_smith",
      },
      {
        id: 13,
        username: "jane_smith",
        profilePic: mockedProfileUrl,
        comment: "I totally agree!",
        link: "/profile/jane_smith",
      },
    ],
  },
  {
    id: 2,
    username: "alex_99",
    profilePic: mockedProfileUrl,
    comment: "I learned something new today, thank you!",
    link: "/profile/alex_99",
    replies: [],
  },
  {
    id: 3,
    username: "alex_99",
    profilePic: mockedProfileUrl,
    comment: "I learned something new today, thank you!",
    link: "/profile/alex_99",
    replies: [],
  },
  {
    id: 4,
    username: "alex_99",
    profilePic: mockedProfileUrl,
    comment: "I learned something new today, thank you!",
    link: "/profile/alex_99",
    replies: [],
  },
  {
    id: 5,
    username: "alex_99",
    profilePic: mockedProfileUrl,
    comment: "I learned something new today, thank you!",
    link: "/profile/alex_99",
    replies: [],
  },
  {
    id: 6,
    username: "alex_99",
    profilePic: mockedProfileUrl,
    comment: "I learned something new today, thank you!",
    link: "/profile/alex_99",
    replies: [],
  },
];

export default function CommentSection() {
  return (
    <View className="bg-transparent">
      {mockComments.map((comment) => (
        <View key={comment.id} className="mb-6 space-y-2">
          <View className="flex-row items-center mb-2">
            {renderAvatarIcon(comment.profilePic, 8, 8)}

            <View>
              <TouchableOpacity
                onPress={() => console.log(`Go to ${comment.link}`)}
              >
                <Text className="font-bold text-light-tint">
                  {comment.username}
                </Text>
              </TouchableOpacity>
              <Text className="text-gray-500">{comment.comment}</Text>
            </View>
          </View>

          {comment.replies.map((reply) => (
            <View
              key={reply.id}
              className="flex-row items-center ml-12 border-l-2 border-gray-300 pl-3 mb-2"
            >
              {renderAvatarIcon(reply.profilePic, 8, 8)}
              <View>
                <TouchableOpacity
                  onPress={() => console.log(`Go to ${reply.link}`)}
                >
                  <Text className="font-bold text-light-tint">
                    {reply.username}
                  </Text>
                </TouchableOpacity>
                <Text className="text-gray-500">{reply.comment}</Text>
              </View>
            </View>
          ))}

          <View className="h-px bg-gray-300 mt-3" />
        </View>
      ))}
    </View>
  );
}
