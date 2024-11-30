import { useColorScheme } from "@/components/useColorScheme";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { Pressable, View } from "react-native";
import { Colors } from "react-native/Libraries/NewAppScreen";
import ProfileScreen from "../screens/profile";
import FeedScreen from "./feed";
import Home from "./home";
import SearchScreen from "./search";

const Tab = createBottomTabNavigator();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tab.Navigator
    /* screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
        headerRight: () => (
          <View className="flex flex-row">
            <Link href="/screens/profile/settings" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="plus"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
            <Link href="/screens/profile" asChild>
              <Pressable>
                {({ pressed }) => (
                  <FontAwesome
                    name="user"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
            </Link>
          </View>
        ),
      }} */
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          title: "",
          tabBarLabel: "Hem",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,

          /* headerRight: () => (
              <View className="flex flex-row">
                  <Pressable>
              
                    {({ pressed }) => (
                      <FontAwesome
                        name="envelope"
                        size={25}
                        color={Colors[colorScheme ?? "light"].text}
                        style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
                      />
                    )}
                  </Pressable>
                
                
              </View>
            ), */
        }}
      />

      <Tab.Screen
        name="Search"
        component={SearchScreen}
        options={{
          title: "",
          tabBarLabel: "Sök",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerRight: () => (
            <View className="flex flex-row">
              <Pressable>
                {/* <Link href="/screens/message" asChild> */}
                {({ pressed }) => (
                  <FontAwesome
                    name="envelope"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
              {/* </Link> */}
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="Add"
        component={FeedScreen}
        options={{
          title: "",
          tabBarLabel: "Lägg till",
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <Tab.Screen
        name="Messages"
        component={Home}
        options={{
          title: "",
          tabBarLabel: "Lägg till",
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="envelope" color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={ProfileScreen}
        options={{
          title: "",
          tabBarLabel: "Profil",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
          headerRight: () => (
            <View className="flex flex-row">
              <Pressable>
                {/* <Link href="/screens/message" asChild> */}
                {({ pressed }) => (
                  <FontAwesome
                    name="cog"
                    size={25}
                    color={Colors[colorScheme ?? "light"].text}
                    style={{ marginRight: 20, opacity: pressed ? 0.5 : 1 }}
                  />
                )}
              </Pressable>
              {/* </Link> */}
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
}
