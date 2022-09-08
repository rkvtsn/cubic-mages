import { PlayerModel } from "./PlayerModel";

export enum ActionType {
  Move,
  Attack,
  Town,
  Event,
}

export default interface ActionModel {
  types: ActionType[];
  action: (player: PlayerModel) => PlayerModel;
}
