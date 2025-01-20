import { AppNavigationProp } from "@/types/navigation";
import { useNavigation as useReactNavigation } from "@react-navigation/native";

export const useNavigation = () => {
  const navigation = useReactNavigation<AppNavigationProp>();

  return navigation;
};
