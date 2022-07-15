import { memo, useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import { TileCellStyled } from "./styles";
import useCellStyle from "./useCellStyle";

interface TileCellProps {
  onClick: (cell: CellBaseModel) => void;
  isSelected?: boolean;
  cell: CellBaseModel;
}

const TileCell = ({ onClick, cell, isSelected = false }: TileCellProps) => {
  const handleOnClick = useCallback(() => {
    onClick(cell);
  }, [cell, onClick]);

  const styles = useCellStyle(cell, isSelected);

  return (
    <TileCellStyled {...styles} onClick={handleOnClick}>
      {isSelected ? "1" : ""}
    </TileCellStyled>
  );
};

export default memo(TileCell);
