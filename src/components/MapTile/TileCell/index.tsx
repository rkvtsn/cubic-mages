import { CELL_COMMON_BG } from "constants/colors";
import { memo, useCallback } from "react";
import CellModel from "types/CellModel";
import { TileCellStyled } from "./styles";

interface TileCellProps {
  onClick: (cellId: number) => void;
  isSelected: boolean;
  cell: CellModel;
}

interface UseCellStyle {
  background: string;
}

const useCellStyle = ({ name, type }: CellModel): UseCellStyle => {
  switch (type) {
    case "Common":
      return { background: CELL_COMMON_BG[name] };
    default:
      return { background: "" };
  }
};

const TileCell = ({ onClick, cell, isSelected }: TileCellProps) => {
  const handleOnClick = useCallback(() => {
    onClick(cell.id);
  }, [cell?.id, onClick]);

  const { background } = useCellStyle(cell);

  return <TileCellStyled background={background} onClick={handleOnClick} />;
};

export default memo(TileCell);
