import { memo, useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import { TileCellStyled } from "./styles";
import useCellStyle from "./useCellStyle";

interface TileCellProps {
  onClick: (cell: CellBaseModel, e: React.MouseEvent<HTMLElement>) => void;
  isSelected?: boolean;
  cell: CellBaseModel;
}

const TileCell = ({ onClick, cell, isSelected = false }: TileCellProps) => {
  const handleOnClick = useCallback(
    (e: React.MouseEvent<HTMLElement>) => {
      onClick(cell, e);
    },
    [cell, onClick]
  );

  const styles = useCellStyle(cell, isSelected);

  return (
    <TileCellStyled {...styles} onClick={handleOnClick}>
      {isSelected ? "x" : ""}
    </TileCellStyled>
  );
};

export default memo(TileCell);
