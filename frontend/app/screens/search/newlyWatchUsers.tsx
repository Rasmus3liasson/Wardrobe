import { renderSubHeader } from "@/app/(tabs)/discover/components/subHeader";
import UserRow from "@/components/ui/boilerPlate/userRow";
import { View } from "react-native";

export default function NewlyWatchUsers({
  searchQuery,
}: {
  searchQuery: string;
}) {
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
    /*     {
      id: 6,
      title: "Organization 6",
      image: "https://via.placeholder.com/150",
    }, */
  ];

  return (
    <>
      <View className="mt-4">
        {renderSubHeader("Senaste", "Senaste visade profilerna", false)}
        <UserRow arrUser={carouselData} slice={3} />
      </View>
    </>
  );
}
