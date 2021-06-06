import { useState, useCallback } from "react";
import Animated from "react-native-reanimated";

export const useToggle = (
  initialValue: boolean = false,
  deps: any[] = []
): [boolean, () => void] => {
  const [value, setValue] = useState(initialValue);
  const toggleValue = useCallback(() => setValue((value) => !value), deps);
  return [value, toggleValue];
};
