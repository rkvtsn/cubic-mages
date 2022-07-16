import { memo, useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import { TileCellStyled } from "./styles";
import useCellStyle from "./useCellStyle";

export interface TileCellProps {
  onClick: (cell: CellBaseModel, e: React.MouseEvent<HTMLElement>) => void;
  cell: CellBaseModel;
  isSelected?: boolean;
  // will it change color or took only first
  isStatic?: boolean;
  className?: string;
}

const TileCell = ({
  onClick,
  cell,
  isSelected = false,
  isStatic = false,
  className,
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
      {isSelected ? "x" : ""}
    </TileCellStyled>
  );
};

export default memo(TileCell);
