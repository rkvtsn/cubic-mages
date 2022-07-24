import { PlayerModel } from "types/PlayerModel";
import { PlayerTableWrapperStyled } from "./styles";

interface PlayerTableProps {
  player: PlayerModel;
}

const PlayerTable = ({ player }: PlayerTableProps) => {
  return (
    <PlayerTableWrapperStyled>
      <h3>{player.name}</h3>
      <div></div>
    </PlayerTableWrapperStyled>
  );
};

export default PlayerTable;
