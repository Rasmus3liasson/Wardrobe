import UiContainer from "@/components/ui/boilerPlate/uiContainer";
import { mockedOrganisations } from "@/mockedData/organisations";
import { AppNavigationProp } from "@/types/navigation";
import { useNavigation } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { renderSubHeader } from "./components/subHeader";

export default function NearYou() {
  const navigation = useNavigation<AppNavigationProp>();

  const sortedOrganisations = [...mockedOrganisations].sort((a, b) => {
    if (a.distanceInKm < b.distanceInKm) {
      return -1;
    } else if (a.distanceInKm > b.distanceInKm) {
      return 1;
    } else {
      return a.title.localeCompare(b.title);
    }
  });

  return (
    <View className="mt-4">
      {renderSubHeader("Nära dig", "Användare nära dig", true)}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-4 flex"
      >
        {sortedOrganisations.map((user) => (
          <TouchableOpacity
            key={user.id}
            onPress={() => navigation.navigate("Profile")}
            className="flex flex-row items-center bg-white rounded-lg shadow p-2 mr-4"
          >
            <UiContainer
              title={user.title}
              city={user.city}
              distanceInKm={user.distanceInKm}
              companyImg={user.companyImg}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
