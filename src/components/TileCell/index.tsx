import { memo, useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import EffectModel from "types/EffectModel";
import EffectCell from "./EffectCell";
import { TileCellStyled } from "./styles";
import useCellStyle from "./useCellStyle";

export interface TileCellProps {
  onClick: (cell: CellBaseModel, e: React.MouseEvent<HTMLElement>) => void;
  cell: CellBaseModel;
  isSelected?: boolean;
  isStatic?: boolean;
  className?: string;
  effect?: EffectModel;
}

const TileCell = ({
  onClick,
  cell,
  isSelected = false,
  isStatic = false,
  className,
  effect,
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
      {isSelected ? "x" : ""}
    </TileCellStyled>
  );
};

export default memo(TileCell);
