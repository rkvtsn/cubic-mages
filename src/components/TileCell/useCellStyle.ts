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
  isSelected: boolean,
  isStatic: boolean
): UseCellStyle => {
  const background = !Array.isArray(CELLS_MAP[name]?.background)
    ? (CELLS_MAP[name]?.background as string)
    : (isStatic && CELLS_MAP[name]?.background[0]) ||
      getRandomFromArray<string>(CELLS_MAP[name]?.background as []);
  const style = {
    background,
    selected: isSelected,
  };
  return style;
};

export default useCellStyle;
