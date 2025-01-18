import StatsContainer from "@/components/ui/statsContainer";
import { View } from "react-native";
import { renderSubHeader } from "./subHeader";

const mockedData = {
  rentedGarments: 120,
  deposit: 5,
  rating: 4.6,
};

export default function Stats() {
  return (
    <View className="flex-col mt-2">
      {renderSubHeader("Stats", "Dina statistik", false)}
      <View className="flex-row">
        <StatsContainer
          title="Uthyrda plagg"
          value={String(mockedData.rentedGarments)}
          subText="Antal uthyrda plagg just nu"
        />
        <StatsContainer
          title="Saldo"
          value={`${String(mockedData.deposit)} kr`}
          subText="På ditt konto"
        />
        <StatsContainer
          title="Betyg"
          value={String(mockedData.rating)}
          subText="Ditt genomsnittliga betyg"
        />
      </View>
    </View>
  );
}
