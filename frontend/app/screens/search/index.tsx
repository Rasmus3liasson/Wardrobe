import { View } from "@/components/Themed";
import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";
import SearchDropdown from "@/components/ui/search/searchDropdown";
import SearchField from "@/components/ui/search/searchField";
import { useState } from "react";

export default function SearchScreen() {
  const content = () => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
      <>
        <View className="">
          <View className="mt-6">
            <SearchField
              editable={true}
              selectTextOnFocus={true}
              searchQuery={searchQuery}
              setSearchQuery={setSearchQuery}
            />
            <SearchDropdown searchQuery={searchQuery} />
          </View>
        </View>
      </>
    );
  };

  return (
    <>
      <ContainerTemplate content={content} />
    </>
  );
}
