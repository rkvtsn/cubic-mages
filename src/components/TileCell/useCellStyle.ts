import { CELLS_MAP } from "constants/cells";
import { useMemo } from "react";
import getRandomFromArray from "utils/getRandomFromArray";

export interface UseCellStyle {
  background: string;
  selected: boolean;
}
export const useCellStyle = (
  cellName: string,
  isSelected: boolean,
  isStatic: boolean
): UseCellStyle => {
  const background = useMemo(() => {
    return !Array.isArray(CELLS_MAP[cellName]?.background)
      ? (CELLS_MAP[cellName]?.background as string)
      : (isStatic && CELLS_MAP[cellName]?.background[0]) ||
          getRandomFromArray<string>(CELLS_MAP[cellName]?.background as []);
  }, [cellName, isStatic]);

  return {
    background,
    selected: isSelected,
  };
};

export default useCellStyle;
