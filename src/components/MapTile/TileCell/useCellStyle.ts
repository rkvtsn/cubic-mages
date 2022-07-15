import { CELLS_MAP } from "constants/cells";
import CellModel from "types/CellModel";

interface UseCellStyle {
  background: string;
  selected: boolean;
}

export const useCellStyle = (
  { name, type }: CellModel,
  isSelected: boolean
): UseCellStyle => {
  const style = {
    background: CELLS_MAP[name]?.background,
    selected: isSelected,
  };
  return style;
};

export default useCellStyle;
