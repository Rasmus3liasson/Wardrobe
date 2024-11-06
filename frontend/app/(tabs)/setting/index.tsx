import { Text, View } from "@/components/Themed";
import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";

export default function SettingScreen() {
  const content = () => {
    return (
      <View>
        <Text>Setting Screen</Text>
      </View>
    );
  };

  return <ContainerTemplate content={content} />;
}
