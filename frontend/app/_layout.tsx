import FontAwesome from "@expo/vector-icons/FontAwesome";
import {
  DarkTheme,
  DefaultTheme,
  ThemeProvider,
} from "@react-navigation/native";
import { useFonts } from "expo-font";
import { Stack } from "expo-router";
import * as SplashScreen from "expo-splash-screen";
import { useCallback, useEffect } from "react";
import "react-native-reanimated";

import { useColorScheme } from "@/components/useColorScheme";

export { ErrorBoundary } from "expo-router";

export const unstable_settings = {
  initialRouteName: "(tabs)",
};

SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    SpaceMono: require("../assets/fonts/SpaceMono-Regular.ttf"),
    ...FontAwesome.font,
  });

  useEffect(() => {
    if (error) throw error;
  }, [error]);

  const hideSplashScreen = useCallback(async () => {
    if (loaded) {
      await SplashScreen.hideAsync();
    }
  }, [loaded]);

  useEffect(() => {
    hideSplashScreen();
  }, [loaded, hideSplashScreen]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const colorScheme = useColorScheme();

  const initailRoute = "screens/home";

  return (
    <ThemeProvider value={colorScheme === "dark" ? DarkTheme : DefaultTheme}>
      <Stack initialRouteName=/* "(tabs)" */ {initailRoute}>
        <Stack.Screen
          name="(tabs)"
          options={{
            headerShown: false,
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="screens/account"
          options={{
            title: "Konto",
            headerBackTitleVisible: false,
          }}
        />
        <Stack.Screen
          name="screens/orgScreen/[orgId]"
          options={({ route }) => {
            const { name }: { name?: string } = route.params || {};
            return {
              title: name ? `${name}` : "Organisation",
              headerBackTitleVisible: false,
            };
          }}
        />
        <Stack.Screen
          name="screens/signOptions"
          options={({ route }) => {
            const { name }: { name?: string } = route.params || {};
            return {
              title: name ? `${name}` : "Organisation",
              headerBackTitleVisible: false,
            };
          }}
        />
      </Stack>
    </ThemeProvider>
  );
}
