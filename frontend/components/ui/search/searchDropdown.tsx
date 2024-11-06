import { mockedOrganisations } from "@/mockedData/organisations";
import { AppNavigationProp } from "@/types/navigation";
import { useNavigation } from "@react-navigation/native";
import { FlatList, TouchableOpacity, View } from "react-native";
import OrgContainer from "../boilerPlate/orgContainer";

export default function SearchDropdown({
  searchQuery,
}: {
  searchQuery?: string;
}) {
  const navigation = useNavigation<AppNavigationProp>();

  const filteredData =
    searchQuery && searchQuery.length >= 2
      ? mockedOrganisations.filter((item) =>
          item.title.toLowerCase().includes(searchQuery.toLowerCase()),
        )
      : mockedOrganisations;

  const navigateTo = (itemId: string, name: string) => {
    navigation.navigate("screens/orgScreen/[orgId]", { orgId: itemId, name });
  };

  const renderItem = ({ item }: { item: (typeof mockedOrganisations)[0] }) => (
    <TouchableOpacity
      onPress={() => navigateTo(item.id, item.title)}
      className="p-2 border-b border-gray-200"
    >
      <OrgContainer
        title={item.title}
        city={item.city}
        distanceInKm={item.distanceInKm}
        companyImg={item.companyImg}
      />
    </TouchableOpacity>
  );

  return (
    <View className="w-full h-screen rounded-lg mt-2 p-3">
      <FlatList
        data={filteredData}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: "space-between" }}
      />
    </View>
  );
}
