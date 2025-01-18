import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";

import SearchField from "@/components/ui/search/searchField";
import NearYou from "./nearYou";
import PopularUsers from "./popularUsers";

const content = () => {
  return (
    <>
      <SearchField editable={true} selectTextOnFocus={false} navigateLoaction="screens/search/index"  />
      <PopularUsers />
      <NearYou />
    </>
  );
};

export default function Discover() {
  return <ContainerTemplate content={content} />;
}
