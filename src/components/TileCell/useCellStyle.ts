import { CELLS_MAP } from "constants/cells";
import { CellBaseModel } from "types/CellModel";

export interface UseCellStyle {
  background: string;
  selected: boolean;
}

export const useCellStyle = (
  { name, type }: CellBaseModel,
  isSelected: boolean
): UseCellStyle => {
  const style = {
    background: CELLS_MAP[name]?.background,
    selected: isSelected,
  };
  return style;
};

export default useCellStyle;
