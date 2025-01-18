import FontAwesome from "@expo/vector-icons/FontAwesome";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import Add from "./add";
import Discover from "./discover";
import FeedScreen from "./feed";
import Map from "./map";
import Profile from "./profile";

const Tab = createBottomTabNavigator();

function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
  return (
    <Tab.Navigator>
      <Tab.Screen
        name="Home"
        component={FeedScreen}
        options={{
          title: "",
          tabBarLabel: "Hem",
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          headerShown: false,
        }}
      />

      <Tab.Screen
        name="Search"
        component={Discover}
        options={{
          title: "",
          tabBarLabel: "Sök",
          tabBarIcon: ({ color }) => <TabBarIcon name="search" color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Add"
        component={Add}
        options={{
          title: "",
          tabBarLabel: "Lägg till",
          tabBarIcon: ({ color }) => <TabBarIcon name="plus" color={color} />,
        }}
      />
      <Tab.Screen
        name="Map"
        component={Map}
        options={{
          title: "",
          tabBarLabel: "Karta",
          tabBarIcon: ({ color }) => <TabBarIcon name="map" color={color} />,
          headerShown: false,
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          title: "",
          tabBarLabel: "Profil",
          tabBarIcon: ({ color }) => <TabBarIcon name="user" color={color} />,
        }}
      />
    </Tab.Navigator>
  );
}
