import OrgContainer from "@/components/ui/boilerPlate/orgContainer";
import { mockedOrganisations } from "@/mockedData/organisations";
import { AppNavigationProp } from "@/types/navigation";
import { useNavigation } from "expo-router";
import { ScrollView, TouchableOpacity, View } from "react-native";
import { renderSubHeader } from "./subHeader";

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
      {renderSubHeader("Near you", "Organisationer nära dig")}

      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        className="mt-4 flex"
      >
        {sortedOrganisations.map((org) => (
          <TouchableOpacity
            key={org.id}
            onPress={() =>
              navigation.navigate("screens/orgScreen/[orgId]", {
                orgId: org.id,
                name: org.title,
              })
            }
            className="flex flex-row items-center bg-white rounded-lg shadow p-2 mr-4"
          >
            <OrgContainer
              title={org.title}
              city={org.city}
              distanceInKm={org.distanceInKm}
              companyImg={org.companyImg}
            />
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
}
