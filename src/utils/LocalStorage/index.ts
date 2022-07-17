import { useEffect, useState } from "react";

export const saveToLocalStorage = <T>(name: string, value: T) => {
  const storageValue = JSON.stringify(value);
  localStorage.setItem(name, storageValue);
};

export const loadFromLocalStorage = <T>(name: string, defaultValue: T): T => {
  const storageValue = localStorage.getItem(name);
  if (storageValue === null) return defaultValue;
  return JSON.parse(storageValue) as T;
};

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
