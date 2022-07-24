import { PlayerModel } from "types/PlayerModel";
import WorldModel from "types/WorldModel";

export interface WorldMapProps {
  onClick?: (
    tileId: number,
    cellId: number,
    e: React.MouseEvent<HTMLElement>
  ) => void;
  worldMap: WorldModel;
  selectedCells?: number[];
  currentPlayer?: PlayerModel;
}
