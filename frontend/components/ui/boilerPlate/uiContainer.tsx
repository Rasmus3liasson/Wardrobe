import { Image, Text, View } from "react-native";

interface OrgContainerProps {
  title: string;
  city: string;
  distanceInKm: number;
  companyImg: string;
}

export default function UiContainer({
  title,
  city,
  distanceInKm,
  companyImg,
}: OrgContainerProps) {
  return (
    <View className="flex flex-row items-center gap-4">
      <Image className="w-20 h-20 rounded-lg" source={{ uri: companyImg }} />
      <View className="flex-col items-end gap-2">
        <Text className="text-gray-800 font-bold">{title}</Text>
        <Text className="text-sm text-gray-600">{city}</Text>
        <Text className="text-sm text-gray-600">{`${distanceInKm} km`}</Text>
      </View>
    </View>
  );
}
