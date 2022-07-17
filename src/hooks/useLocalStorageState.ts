import { useEffect, useState } from "react";
import { loadFromLocalStorage, saveToLocalStorage } from "utils/localStorage";

interface UseLocalStorageStateProps<T> {
  value: T;
  setValue: React.Dispatch<React.SetStateAction<T>>;
}

export const useLocalStorageState = <T>(
  name: string,
  defaultValue: T
): UseLocalStorageStateProps<T> => {
  const [value, setValue] = useState<T>(() =>
    loadFromLocalStorage<T>(name, defaultValue)
  );

  useEffect(() => {
    saveToLocalStorage<T>(name, value);
  }, [value, name]);

  return {
    value,
    setValue,
  };
};

export default useLocalStorageState;
