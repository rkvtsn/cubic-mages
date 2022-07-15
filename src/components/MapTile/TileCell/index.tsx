import { memo, useCallback } from "react";
import CellModel from "types/CellModel";
import { TileCellStyled } from "./styles";
import useCellStyle from "./useCellStyle";

interface TileCellProps {
  onClick: (cellId: number) => void;
  isSelected: boolean;
  cell: CellModel;
}

const TileCell = ({ onClick, cell, isSelected }: TileCellProps) => {
  const handleOnClick = useCallback(() => {
    onClick(cell.id);
  }, [cell?.id, onClick]);

  const styles = useCellStyle(cell, isSelected);

  return <TileCellStyled {...styles} onClick={handleOnClick} />;
};

export default memo(TileCell);
