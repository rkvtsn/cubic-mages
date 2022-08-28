import CharacterDruid from "services/CharacterDruid";
import { ICharacterService } from "services/CharacterService";
import { CharacterType } from "types/CharacterModel";
import { PlayerModel } from "types/PlayerModel";

export const CharactersContainer: Record<
  string,
  (player: PlayerModel) => ICharacterService
> = {
  [CharacterType.Druid]: (player) => new CharacterDruid(player),
};

export default CharactersContainer;
