import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define the types for your stack navigator
export type RootStackParamList = {
  "screens/post/[postId]": { postId: number; name: string };
  Search: undefined;
  Home: undefined;
  Account: undefined;
  Settings: undefined;
  Feed: undefined;
  Profile: undefined;
};

export type BottomTabParamList = Omit<
  RootStackParamList,
  "screens/post/[postId]"
>;


export type AppNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;


