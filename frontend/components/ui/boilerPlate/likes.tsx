import { FontAwesome } from "@expo/vector-icons";
import { useState } from "react";
import { TouchableOpacity } from "react-native";

export default function Likes() {
  const [likes, setLikes] = useState(false);
  return (
    <TouchableOpacity
      onPress={() => setLikes(!likes)}
     
    >
      <FontAwesome name="heart" size={24} color={`${likes ? "red" : "gray"}`} />
    </TouchableOpacity>
  );
}
