import PreviousSearch from "@/app/screens/search/previousSearch";
import { View } from "@/components/Themed";
import BackNavigation from "@/components/ui/boilerPlate/backNavigation";
import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";
import SearchDropdown from "@/components/ui/search/searchDropdown";
import SearchField from "@/components/ui/search/searchField";
import { useState } from "react";
import NewlyWatchUsers from "./newlyWatchUsers";

export default function SearchScreen() {
  const content = () => {
    const [searchQuery, setSearchQuery] = useState("");

    return (
      <>
        <View>
          <View className="mt-12">
            <View className="flex-row items-center justify-evenly gap-1">
              <View className="mr-5">
                <BackNavigation />
              </View>
              <SearchField
                editable={true}
                selectTextOnFocus={true}
                searchQuery={searchQuery}
                setSearchQuery={setSearchQuery}
              />
            </View>

            {searchQuery && searchQuery.length >= 2 ? (
              <SearchDropdown searchQuery={searchQuery} />
            ) : (
              <>
                <PreviousSearch setSearchQuery={setSearchQuery} />
                <NewlyWatchUsers searchQuery={searchQuery} />
              </>
            )}
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
