import StatsContainer from "@/components/ui/statsContainer";
import { View } from "react-native";
import { renderSubHeader } from "./subHeader";

const mockedData = {
  donations: 120,
  following: 5,
  deposit: 2500,
};

export default function StatsDonation() {
  return (
    <View className="flex-col mt-4">
      {renderSubHeader("Stats", "Dina statistik")}
      <View className="flex-row">
        <StatsContainer
          title="Donations"
          value={mockedData.donations}
          subText="Antal donationer"
        />
        <StatsContainer
          title="Following"
          value={mockedData.following}
          subText="Följer"
        />
        <StatsContainer
          title="Deposit"
          value={mockedData.deposit}
          subText="På insättning"
        />
      </View>
    </View>
  );
}
