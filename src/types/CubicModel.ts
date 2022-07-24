export enum CubicType {
  Red, // fails
  Green, // nature
  Blue, // shadow
  Yellow, // light
  Gray, // common
}

export interface CubicModel {
  type: CubicType;
}
