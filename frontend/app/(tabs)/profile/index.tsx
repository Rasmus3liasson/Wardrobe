import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";
import { FontAwesome } from "@expo/vector-icons";
import { Link } from "expo-router";
import { Pressable, View } from "react-native";

export default function Profile() {
  const content = () => {
    return (
      <View>
        <Link href="/screens/profile/settings" asChild>
          <Pressable>
            {({ pressed }) => (
              <FontAwesome
                name="cog"
                size={25}
                style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
              />
            )}
          </Pressable>
        </Link>
      </View>
    );
  };

  return <ContainerTemplate content={content} />;
}
