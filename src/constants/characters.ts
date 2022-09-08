import CharacterDruid from "services/CharacterDruid";
import { ICharacterService } from "services/CharacterService";
import CellModel from "types/CellModel";
import { CharacterType } from "types/CharacterModel";
import { PlayerModel } from "types/PlayerModel";

export const CharactersContainer: Record<
  string,
  (player: PlayerModel, worldCells: CellModel[]) => ICharacterService
> = {
  [CharacterType.Druid]: (player, cells) => new CharacterDruid(player, cells),
};

export default CharactersContainer;
