import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";
import NearYou from "./nearYou";
import PopularUsers from "./popularUsers";
import StatsDonation from "./statsDonation";
import WelcomeHeader from "./welcomeHeader";

const content = () => {
  return (
    <>
      <WelcomeHeader />
      <PopularUsers />
      <StatsDonation />
      <NearYou />
    </>
  );
};

export default function App() {
  return <ContainerTemplate content={content} />;
}
