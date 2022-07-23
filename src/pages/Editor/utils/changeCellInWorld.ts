import CellModel, { CellBaseModel } from "types/CellModel";
import WorldModel from "types/WorldModel";

export const changeCellInWorld = (
  cell: CellBaseModel,
  setWorldMap: (value: React.SetStateAction<WorldModel>) => void,
  conditionFn: (oldCell: CellModel) => boolean
) => {
  setWorldMap((oldWorld) => ({
    id: oldWorld.id,
    name: oldWorld.name,
    world: oldWorld.world.map((oldCell) => {
      if (conditionFn(oldCell)) {
        return { ...oldCell, cell: { ...cell } };
      }
      return oldCell;
    }),
  }));
};

export default changeCellInWorld;
