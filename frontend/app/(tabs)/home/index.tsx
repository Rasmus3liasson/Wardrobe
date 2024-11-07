import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";
import NearYou from "./nearYou";
import PopularUsers from "./popularUsers";
import Stats from "./stats";
import WelcomeHeader from "./welcomeHeader";

const content = () => {
  return (
    <>
      <WelcomeHeader />
      <PopularUsers />
      <Stats />
      <NearYou />
    </>
  );
};

export default function App() {
  return <ContainerTemplate content={content} />;
}
