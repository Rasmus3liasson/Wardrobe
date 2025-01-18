import { useRef } from "react";
import { NativeScrollEvent, NativeSyntheticEvent, ScrollView } from "react-native";

export const useScrollNoTop = () => {
  const scrollViewRef = useRef<ScrollView>(null);

  const handleScroll = (event: NativeSyntheticEvent<NativeScrollEvent>) => {
    if (event.nativeEvent.contentOffset.y < 0) {
      scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    }
  };

  return { scrollViewRef, handleScroll };
};