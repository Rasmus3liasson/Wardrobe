import ContainerTemplate from "@/components/ui/boilerPlate/containerTemplate";
import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";

export default function SignInScreen() {
  const content = () => {
    return (
      <View className=" flex items-center justify-center p-5">
        <Text className="text-black text-3xl font-bold mb-6">Login</Text>

        <TextInput
          className="w-full h-12  rounded-full px-5 text-base text-gray-700 mb-4"
          placeholder="yourmail00@gmail.com"
          placeholderTextColor="#b0b0b0"
        />

        <TextInput
          className="w-full h-12  rounded-full px-5 text-base text-gray-700 mb-6"
          placeholder="Password"
          placeholderTextColor="#b0b0b0"
          secureTextEntry={true}
        />

        <TouchableOpacity className="w-full h-12 bg-light-text rounded-full items-center justify-center mb-4">
          <Text className=" text-lg font-bold">Login</Text>
        </TouchableOpacity>

        <TouchableOpacity>
          <Text className="text-sm mb-6">Forgot your password?</Text>
        </TouchableOpacity>

        <View className="items-center my-4">
          <Text className="text-sm mb-2">Need an account?</Text>
          <View className="flex-row justify-between w-36">
            <Image
              source={{ uri: "https://via.placeholder.com/150" }}
              className="w-10 h-10"
            />
            {/*     <Image
                  source={require("https://via.placeholder.com/150")}
                  className="w-10 h-10"
                />
                <Image
                  source={require("https://via.placeholder.com/150")}
                  className="w-10 h-10"
                /> */}
          </View>
        </View>

        <TouchableOpacity className="w-full h-12 bg-purple-600 rounded-full items-center justify-center">
          <Text className="text-white text-lg font-bold">Sign Up</Text>
        </TouchableOpacity>
      </View>
    );
  };

  return <ContainerTemplate content={content} />;
}
