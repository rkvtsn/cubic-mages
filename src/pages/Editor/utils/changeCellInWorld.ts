import { CELLS_MAP } from "constants/cells";
import CellModel from "types/CellModel";
import WorldModel from "types/WorldModel";

export const changeCellInWorld = (
  cellName: string,
  setWorldMap: (value: React.SetStateAction<WorldModel>) => void,
  conditionFn: (oldCell: CellModel) => boolean
) => {
  setWorldMap((oldWorld) => ({
    id: oldWorld.id,
    name: oldWorld.name,
    cells: oldWorld.cells.map((oldCell) => {
      if (conditionFn(oldCell)) {
        return { ...oldCell, base: CELLS_MAP[cellName] } as CellModel;
      }
      return oldCell;
    }),
  }));
};

export default changeCellInWorld;
