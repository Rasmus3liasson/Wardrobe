import Colors from "@/constants/Colors";
import {
  Text as DefaultText,
  TextProps as DefaultTextProps,
  View as DefaultView,
  ViewProps as DefaultViewProps,
} from "react-native";
import { useColorScheme } from "./useColorScheme";

type ThemeProps = {
  lightColor?: string;
  darkColor?: string;
};

// Use the imported TextProps and ViewProps from 'react-native' directly
export type TextProps = ThemeProps & DefaultTextProps;
export type ViewProps = ThemeProps & DefaultViewProps;

export function useThemeColor(
  props: { light?: string; dark?: string },
  colorName: keyof typeof Colors.light & keyof typeof Colors.dark,
) {
  const theme = useColorScheme() ?? "light";
  const colorFromProps = props[theme];

  return colorFromProps || Colors[theme][colorName];
}

export function Text(props: TextProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const color = useThemeColor({ light: lightColor, dark: darkColor }, "text");

  return <DefaultText style={[{ color }, style]} {...otherProps} />;
}

export function View(props: ViewProps) {
  const { style, lightColor, darkColor, ...otherProps } = props;
  const backgroundColor = useThemeColor(
    { light: lightColor, dark: darkColor },
    "background",
  );

  return <DefaultView style={[{ backgroundColor }, style]} {...otherProps} />;
}
