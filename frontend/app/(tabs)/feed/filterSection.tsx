import { Button, View } from "react-native";

import { Dispatch, SetStateAction } from "react";

export default function FilterSection({
  setFilter,
}: {
  setFilter: Dispatch<SetStateAction<string>>;
}) {
  return (
    <View className="flex-row justify-center p-4">
      <Button title="All" onPress={() => setFilter("all")} />
      <Button title="Following" onPress={() => setFilter("following")} />
    </View>
  );
}
