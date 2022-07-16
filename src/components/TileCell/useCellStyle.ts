import { CELLS_MAP } from "constants/cells";
import { CellBaseModel } from "types/CellModel";

export interface UseCellStyle {
  background: string;
  selected: boolean;
}

const getRandomFromArray = <T>(array: T[]): T => {
  return array[Math.floor(Math.random() * array.length)];
};

export const useCellStyle = (
  { name, type }: CellBaseModel,
  isSelected: boolean
): UseCellStyle => {
  const background = Array.isArray(CELLS_MAP[name]?.background)
    ? getRandomFromArray<string>(CELLS_MAP[name]?.background as [])
    : (CELLS_MAP[name]?.background as string);
  const style = {
    background,
    selected: isSelected,
  };
  return style;
};

export default useCellStyle;
