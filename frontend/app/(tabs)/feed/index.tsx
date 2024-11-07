import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";
import { useState } from "react";
import { View } from "react-native";
import FeedImages from "./feedImages";
import FilterSection from "./filterSection";

// Example data (replace with real data or fetch from API)
const mockData = [
  {
    id: 1,
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    isFollowing: true,
    user: "User A",
  },
  {
    id: 2,
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    isFollowing: false,
    user: "User B",
  },
  {
    id: 3,
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    isFollowing: true,
    user: "User C",
  },
  {
    id: 4,
    image:
      "https://www.gravatar.com/avatar/2c7d99fe281ecd3bcd65ab915bac6dd5?s=250",
    isFollowing: false,
    user: "User D",
  },
];

export default function FeedScreen() {
  const [filter, setFilter] = useState("all");

  const filteredData = mockData.filter(
    (item) => filter === "all" || (filter === "following" && item.isFollowing)
  );

  const content = () => {
    return (
      <View style={{ flex: 1 }}>
        <FilterSection setFilter={setFilter} />
        <FeedImages data={filteredData} />
      </View>
    );
  };

  return <ContainerTemplate content={content} />;
}
