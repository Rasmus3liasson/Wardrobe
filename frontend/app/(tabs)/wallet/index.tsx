import { Text, View } from "@/components/Themed";
import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";

export default function WalletScreen() {
  const content = () => {
    return (
      <View className="flex-1 justify-center items-center p-4">
        <Text className="mt-4 text-blue-500">Wallet</Text>
      </View>
    );
  };

  return <ContainerTemplate content={content} />;
}
