import { Text, View } from "@/components/Themed";

export default function Map() {
    return (
        <View className="flex-col">
        <View className="flex-row justify-between items-center">
            <Text className="text-2xl font-bold">Karta</Text>
        </View>
        <View className="flex-col mt-2">
            <Text className="text-lg">Här kan du se en karta över alla dina vänner och deras senaste inlägg.</Text>
        </View>
        </View>
    );
}