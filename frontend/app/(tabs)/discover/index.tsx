import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";

import { View } from "@/components/Themed";
import SearchField from "@/components/ui/search/searchField";
import NearYou from "./nearYou";
import PopularUsers from "./popularUsers";

const content = () => {
  return (
    <>
      <View className="mt-20">
        <SearchField
          editable={true}
          selectTextOnFocus={false}
          navigateLoaction="screens/search/index"
        />
        <PopularUsers />
        <NearYou />
      </View>
    </>
  );
};

export default function Discover() {
  return <ContainerTemplate content={content} />;
}
