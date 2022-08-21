import CharacterModel, { CharacterType } from "types/CharacterModel";

export const CHARACTERS: Record<CharacterType, CharacterModel> = {
  [CharacterType.Druid]: {
    startLocation: "forest",
  },
  [CharacterType.Paladin]: {
    startLocation: "Chirch",
  },
  [CharacterType.Sorcerer]: {
    startLocation: "Roderik",
  },
  [CharacterType.Witch]: {
    startLocation: "Jail",
  },
  [CharacterType.Witcher]: {
    startLocation: "Stronghold",
  },
};

export default CHARACTERS;
