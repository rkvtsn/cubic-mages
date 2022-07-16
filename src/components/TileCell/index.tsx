import { memo, useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import { TileCellStyled } from "./styles";
import useCellStyle from "./useCellStyle";

interface TileCellProps {
  onClick: (cell: CellBaseModel, e: React.MouseEvent<HTMLElement>) => void;
  cell: CellBaseModel;
  isSelected?: boolean;
  // will it change color or took only first
  isStatic?: boolean;
}

const TileCell = ({
  onClick,
  cell,
  isSelected = false,
  isStatic = false,
}: TileCellProps) => {
  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onClick(cell, e);
    },
    [cell, onClick]
  );

  const styles = useCellStyle(cell, isSelected, isStatic);

  return (
    <TileCellStyled {...styles} onClick={handleOnClick}>
      {isSelected ? "x" : ""}
    </TileCellStyled>
  );
};

export default memo(TileCell);
