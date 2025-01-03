import { BottomTabNavigationProp } from "@react-navigation/bottom-tabs";
import { CompositeNavigationProp } from "@react-navigation/native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";

// Define the types for your stack navigator
export type RootStackParamList = {
  "screens/userScreen/[userId]": { orgId: string; name: string };
  "screens/picture/[pictureId]": { pictureId: number, name: string };
  Search: undefined;
  Home: undefined;
  Account: undefined;
  Settings: undefined;
};

// Types for tab navigator
export type BottomTabParamList = {
  Home: undefined;
  Feed: undefined;
  Search: undefined;
  Settings: undefined;
};

// Composite navigation prop for combining stack and tab navigation types
export type AppNavigationProp = CompositeNavigationProp<
  BottomTabNavigationProp<BottomTabParamList>,
  NativeStackNavigationProp<RootStackParamList>
>;
