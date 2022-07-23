import { memo, useCallback } from "react";
import EffectModel from "types/EffectModel";
import { PlayerModel } from "types/PlayerModel";
import EffectCell from "./EffectCell";
import PlayerCell from "./PlayerCell";
import { TileCellStyled } from "./styles";
import useCellStyle from "./useCellStyle";

export interface TileCellProps {
  onClick: (cellName: string, e: React.MouseEvent<HTMLElement>) => void;
  cellName: string;
  isSelected?: boolean;
  isStatic?: boolean;
  className?: string;
  effect?: EffectModel;
  player?: PlayerModel | null;
}

const TileCell = ({
  onClick,
  cellName,
  isSelected = false,
  isStatic = false,
  className,
  effect,
  player,
}: TileCellProps) => {
  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onClick(cellName, e);
    },
    [cellName, onClick]
  );

  const styles = useCellStyle(cellName, isSelected, isStatic);

  return (
    <TileCellStyled className={className} {...styles} onClick={handleOnClick}>
      {effect ? <EffectCell effect={effect} /> : null}
      {player ? <PlayerCell player={player} /> : null}
    </TileCellStyled>
  );
};

export default memo(TileCell);
