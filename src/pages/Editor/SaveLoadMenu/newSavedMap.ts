import { DICT_WORLD } from "constants/dicts";
import generateId from "utils/generateId";
import { generateName } from "utils/generateName";
import { SavedMap } from "./types";

export const newSavedMap = (name: string): SavedMap => {
  return {
    id: generateId().toString(),
    name: generateName(DICT_WORLD),
    saved: new Date(),
  };
};

export default newSavedMap;
