import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";
import SearchField from "@/components/ui/search/searchField";
import NearYou from "./nearYou";
import PopularOrg from "./popularOrg";
import StatsDonation from "./statsDonation";
import WelcomeHeader from "./welcomeHeader";

const content = () => {
  return (
    <>
      <WelcomeHeader />
      <SearchField
        editable={false}
        selectTextOnFocus={false}
        navigateLoaction="Search"
      />
      <StatsDonation />
      <NearYou />
      <PopularOrg />
    </>
  );
};

export default function App() {
  return <ContainerTemplate content={content} />;
}
