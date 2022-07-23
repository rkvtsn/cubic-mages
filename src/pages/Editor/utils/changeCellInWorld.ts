import CellModel, { CellBaseModel } from "types/CellModel";

export const changeCellInWorld = (
  cell: CellBaseModel,
  setWorldMap: (value: React.SetStateAction<CellModel[]>) => void,
  conditionFn: (oldCell: CellModel) => boolean
) => {
  setWorldMap((oldWorld) =>
    oldWorld.map((oldCell) => {
      if (conditionFn(oldCell)) {
        return { ...oldCell, cell: { ...cell } };
      }
      return oldCell;
    })
  );
};

export default changeCellInWorld;
