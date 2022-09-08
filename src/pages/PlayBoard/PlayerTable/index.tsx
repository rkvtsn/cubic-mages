import { ICharacterService } from "services/CharacterService";
import Cubic from "./Cubic";
import { PlayerTableWrapperStyled } from "./styles";

interface PlayerTableProps {
  character: ICharacterService | undefined;
  onShowAvailableLocations: () => void;
}

const PlayerTable = ({
  character,
  onShowAvailableLocations,
}: PlayerTableProps) => {
  const player = character?.getPlayer();
  return (
    <PlayerTableWrapperStyled>
      <h3>{player?.name}</h3>
      <div>Bag:</div>
      <div>
        {player?.bag?.map((cubic, index) => (
          <Cubic cubic={cubic} key={index} />
        ))}
      </div>
      <div>Actions:</div>
      <div>
        <button onClick={onShowAvailableLocations}>Show available moves</button>
      </div>
    </PlayerTableWrapperStyled>
  );
};

export default PlayerTable;
