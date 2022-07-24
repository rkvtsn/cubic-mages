import { PlayerModel } from "types/PlayerModel";
import Cubic from "./Cubic";
import PlayerAction from "./PlayerAction";
import { PlayerTableWrapperStyled } from "./styles";

interface PlayerTableProps {
  player: PlayerModel;
}

const PlayerTable = ({ player }: PlayerTableProps) => {
  return (
    <PlayerTableWrapperStyled>
      <h3>{player.name}</h3>
      <div>Bag:</div>
      <div>
        {player.bag.map((cubic, index) => (
          <Cubic cubic={cubic} key={index} />
        ))}
      </div>
      <div>Actions:</div>
      <div>
        {player.actions.map((action) => (
          <PlayerAction key={action.id} action={action} />
        ))}
      </div>
    </PlayerTableWrapperStyled>
  );
};

export default PlayerTable;
