import { Dispatch, SetStateAction, useState } from "react";
import { Text, TouchableOpacity, View } from "react-native";

export default function FilterSection({
  setFilter,
}: {
  setFilter: Dispatch<SetStateAction<string>>;
}) {
  const [selectedFilter, setSelectedFilter] = useState<string>("all");

  const handlePress = (filter: string) => {
    setSelectedFilter(filter);
    setFilter(filter);
  };

  const textStyles = "text-2xl text-dark-tabIconSelected";

  return (
    <View className="flex-row justify-center p-4 gap-3">
      <TouchableOpacity onPress={() => handlePress("all")}>
        <Text
          className={`${selectedFilter == "all" && "underline"} ${textStyles} font-semibold`}
        >
          All
        </Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => handlePress("following")}>
        <Text
          className={`${selectedFilter !== "all" && "underline"} ${textStyles} font-semibold`}
        >
          Following
        </Text>
      </TouchableOpacity>
    </View>
  );
}
