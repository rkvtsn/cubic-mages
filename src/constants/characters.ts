import CharacterModel, { CharacterType } from "types/CharacterModel";

export const CHARACTERS: Record<CharacterType, CharacterModel> = {
  [CharacterType.Druid]: {
    name: CharacterType.Druid,
    startLocation: "forest",
  },
  [CharacterType.Paladin]: {
    name: CharacterType.Paladin,
    startLocation: "Chirch",
  },
  [CharacterType.Sorcerer]: {
    name: CharacterType.Sorcerer,
    startLocation: "Roderik",
  },
  [CharacterType.Witch]: {
    name: CharacterType.Witch,
    startLocation: "Jail",
  },
  [CharacterType.Witcher]: {
    name: CharacterType.Witcher,
    startLocation: "Stronghold",
  },
};

export default CHARACTERS;
