export enum CubicType {
  Red = "Red", // fails
  Green = "Green", // nature
  Blue = "Blue", // shadow
  Yellow = "Yellow", // light
  Gray = "Gray", // common
}

export interface CubicModel {
  type: CubicType;
}
