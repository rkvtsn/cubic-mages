import { PlayerModel } from "types/PlayerModel";

export interface PlayBoardState {
  players: PlayerModel[];
  currentPlayerIndex: number;
}
