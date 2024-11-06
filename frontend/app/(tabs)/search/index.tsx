import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";
import SearchDropdown from "@/components/ui/search/searchDropdown";
import SearchField from "@/components/ui/search/searchField";
import { useState } from "react";

export default function SearchScreen() {
  const content = () => {
    const [searchQuery, setSearchQuery] = useState("");
    return (
      <>
        <SearchField
          editable={true}
          selectTextOnFocus={true}
          searchQuery={searchQuery}
          setSearchQuery={setSearchQuery}
        />
        <SearchDropdown searchQuery={searchQuery} />
      </>
    );
  };

  return <ContainerTemplate content={content} />;
}
