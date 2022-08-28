import { CELLS_MAP } from "constants/cells";
import { useMemo } from "react";
import { CellBaseModel } from "types/CellModel";
import getRandomFromArray from "utils/getRandomFromArray";

export interface UseCellStyle {
  background: string;
  selected: boolean;
}
export const useCellStyle = (
  cellBase: CellBaseModel,
  isSelected: boolean,
  isStatic: boolean
): UseCellStyle => {
  const background = useMemo(() => {
    return !Array.isArray(cellBase?.background)
      ? (cellBase?.background as string)
      : (isStatic && cellBase?.background[0]) ||
          getRandomFromArray<string>(cellBase?.background as []);
  }, [cellBase, isStatic]);

  return {
    background,
    selected: isSelected,
  };
};

export default useCellStyle;
