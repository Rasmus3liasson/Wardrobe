import { Text, View } from "@/components/Themed";
import { Dimensions, Image } from "react-native";
import Carousel from "react-native-reanimated-carousel";
import { renderSubHeader } from "./subHeader";

export default function PopularOrg() {
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
    {
      id: 6,
      title: "Organization 6",
      image: "https://via.placeholder.com/150",
    },
  ];

  interface CarouselItemI {
    id: number;
    title: string;
    image: string;
  }

  const renderCarouselItem = ({ item }: { item: CarouselItemI }) => {
    return (
      <View>
        <Text>{item.title}</Text>
        <Image source={{ uri: item.image }} className="w-30 h-24 rounded-2xl" />
      </View>
    );
  };

  const width = Dimensions.get("window").width;

  return (
    <>
      {renderSubHeader("Popular", "Populära organisationer")}
      <Carousel
        loop
        width={width}
        height={width / 2}
        data={carouselData}
        renderItem={renderCarouselItem}
        mode="parallax"
        modeConfig={{
          parallaxScrollingOffset: 100,
          parallaxScrollingScale: 0.95,
          parallaxAdjacentItemScale: Math.pow(0.8, 2),
        }}
      />
    </>
  );
}
