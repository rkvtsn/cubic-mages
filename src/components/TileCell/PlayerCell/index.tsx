import React from "react";
import { PlayerModel } from "types/PlayerModel";
import { PlayerCellStyled } from "./styles";

export interface PlayerCellProps {
  player: PlayerModel;
}

const PlayerCell = ({ player }: PlayerCellProps) => {
  return <PlayerCellStyled player={player} />;
};

export default PlayerCell;
