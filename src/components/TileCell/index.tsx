import { memo, useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import EffectModel from "types/EffectModel";
import { PlayerModel } from "types/PlayerModel";
import EffectCell from "./EffectCell";
import PlayerCell from "./PlayerCell";
import { TileCellStyled } from "./styles";
import useCellStyle from "./useCellStyle";

export interface TileCellProps {
  onClick: (cell: CellBaseModel, e: React.MouseEvent<HTMLElement>) => void;
  cell: CellBaseModel;
  isSelected?: boolean;
  isStatic?: boolean;
  className?: string;
  effect?: EffectModel;
  player?: PlayerModel | null;
}

const TileCell = ({
  onClick,
  cell,
  isSelected = false,
  isStatic = false,
  className,
  effect,
  player,
}: TileCellProps) => {
  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onClick(cell, e);
    },
    [cell, onClick]
  );

  const styles = useCellStyle(cell, isSelected, isStatic);

  return (
    <TileCellStyled className={className} {...styles} onClick={handleOnClick}>
      {effect ? <EffectCell effect={effect} /> : null}
      {player ? <PlayerCell player={player} /> : null}
    </TileCellStyled>
  );
};

export default memo(TileCell);
