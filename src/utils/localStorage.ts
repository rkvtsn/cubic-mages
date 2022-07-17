export const saveToLocalStorage = <T>(name: string, value: T) => {
  const storageValue = JSON.stringify(value);
  localStorage.setItem(name, storageValue);
};

export const loadFromLocalStorage = <T>(name: string, defaultValue: T): T => {
  const storageValue = localStorage.getItem(name);
  if (storageValue === null) return defaultValue;
  return JSON.parse(storageValue) as T;
};
