import { CubicModel, CubicType } from "types/CubicModel";

const values = Object.values(CubicType).splice(
  0,
  Math.ceil(Object.values(CubicType).length / 2)
);

export const DEFAULT_BAG: CubicModel[] = [...values, ...values].map((type) => ({
  type,
}));
