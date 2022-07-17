import { useCallback, useState } from "react";

type UseStateUpdate<T extends Object> = [
  T,
  React.Dispatch<React.SetStateAction<T>>,
  (value: Partial<T>) => void
];

export default function useStateUpdate<T extends Object>(
  defaultValue: T
): UseStateUpdate<T> {
  const [value, setValue] = useState<T>(defaultValue);

  const updateValue = useCallback(
    (newValue: Partial<T>) => {
      setValue((oldValue) => {
        return { ...oldValue, ...newValue };
      });
    },
    [setValue]
  );

  return [value, setValue, updateValue];
}
