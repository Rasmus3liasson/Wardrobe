import { useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function PreviousSearch({
  setSearchQuery,
}: {
  setSearchQuery?: (value: string) => void;
}) {
  // Mock data for previous searches
  const previousBrands = ["Nike", "Adidas", "Puma", "Reebok"];
  const previousProfiles = ["john_doe", "jane_smith", "alex_99"];
  const [brands, setBrands] = useState(previousBrands);

  const removeBrand = (index: number) => {
    const newBrands = [...brands];
    newBrands.splice(index, 1);
    setBrands(newBrands);
  };

  return (
    <View className="mt-4 ">
      <View className="mb-2">
        <Text className="text-lg font-bold text-light-tint mb-2">
          Tidigare sökningar
        </Text>

        <View className="">
          {brands.length > 0 ? (
            brands.map((prevSearch, index) => (
              <View
                key={index}
                className="flex-row items-center justify-between"
              >
                <TouchableOpacity
                  className="p-2 "
                  onPress={() => setSearchQuery && setSearchQuery(prevSearch)}
                >
                  <Text className="text-light-tint font-bold">
                    {prevSearch}
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => removeBrand(index)}
                  className="ml-2"
                >
                  <Text className="text-red-500">Remove</Text>
                </TouchableOpacity>
              </View>
            ))
          ) : (
            <Text className="text-gray-500">No brand searches yet.</Text>
          )}
        </View>
      </View>
    </View>
  );
}
