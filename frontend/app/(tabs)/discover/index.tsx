import { View } from "@/components/Themed";
import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";
import SearchField from "@/components/ui/search/searchField";
import { ScrollView } from "react-native";
import NearYou from "./nearYou";
import PopularUsers from "./popularUsers";
import Related from "./realated";

const content = () => {
  return (
    <View className="mt-20">
      <View className="mb-2">
      <SearchField
        editable={false}
        selectTextOnFocus={false}
        navigateLoaction="screens/search/index"
      />
      </View>
      <ScrollView showsVerticalScrollIndicator={false}>
        <PopularUsers />
        <NearYou />
        <Related />
      </ScrollView>
    </View>
  );
};

export default function Discover() {
  return <ContainerTemplate content={content} />;
}
