import { CellBaseModel } from "types/CellModel";
import { ColorPalette } from "./colors";

export const CELL_TYPES = ["Common", "StartLocation", "City", "Ruin"] as const;

export const CELL_NAMES = [
  "road",
  "forest",
  "water",
  "rock",
  "Jail",
  "Chirch",
  "Stronghold",
  "Garnot",
  "Roderik",
  "Tildior",
  "Porlien",
  "Karoth",
  "Peltn",
  "fire",
  "camp",
  "cave",
  "temple",
] as const;

const CELLS: CellBaseModel[] = [
  // "road", "forest", "water", "rock"
  {
    name: "road",
    type: "Common",
    background: [
      ColorPalette.YellowField,
      ColorPalette.YellowField1,
      ColorPalette.YellowField2,
    ],
  },
  {
    name: "forest",
    type: "Common",
    background: [
      ColorPalette.GreenAndroid,
      ColorPalette.GreenAndroid1,
      ColorPalette.GreenAndroid2,
    ],
  },
  {
    name: "water",
    type: "Common",
    background: [
      ColorPalette.BlueNavy,
      ColorPalette.BlueNavy1,
      ColorPalette.BlueNavy2,
    ],
  },
  {
    name: "rock",
    type: "Common",
    background: [
      ColorPalette.GrayGranit,
      ColorPalette.GrayGranit1,
      ColorPalette.GrayGranit2,
    ],
  },
  // "Jail", "Chirch", "Stronghold"
  {
    name: "Jail",
    type: "StartLocation",
    background: ColorPalette.BlackCetacean,
    count: 1,
  },
  {
    name: "Chirch",
    type: "StartLocation",
    background: ColorPalette.BlackBlue,
    count: 1,
  },
  {
    name: "Stronghold",
    type: "StartLocation",
    background: ColorPalette.BlackChinese,
    count: 1,
  },
  // "Garnot", "Roderik", "Tildior", "Porlien", "Karoth", "Peltn"
  {
    name: "Garnot",
    type: "City",
    background: ColorPalette.BrownAuborn,
    count: 1,
  },
  {
    name: "Roderik",
    type: "City",
    background: ColorPalette.BrownBean,
    count: 1,
  },
  {
    name: "Tildior",
    type: "City",
    background: ColorPalette.BrownChocolate,
    count: 1,
  },
  {
    name: "Porlien",
    type: "City",
    background: ColorPalette.BrownCoffee,
    count: 1,
  },
  {
    name: "Karoth",
    type: "City",
    background: ColorPalette.BrownRusset,
    count: 1,
  },
  {
    name: "Peltn",
    type: "City",
    background: ColorPalette.BrownSpicy,
    count: 1,
  },
  // "fire", "camp", "cave", "temple"
  {
    name: "fire",
    type: "Ruin",
    background: ColorPalette.PinkLittle,
    count: 1,
  },
  {
    name: "camp",
    type: "Ruin",
    background: ColorPalette.PinkMulbery,
    count: 1,
  },
  {
    name: "cave",
    type: "Ruin",
    background: ColorPalette.PinkRasberry,
    count: 1,
  },
  {
    name: "temple",
    type: "Ruin",
    background: ColorPalette.WhitePlatinum,
    count: 1,
  },
];

export const CELLS_BY_GROUPS: Record<string, CellBaseModel[]> = CELLS.reduce(
  (result, cell) => {
    if (!result[cell.type]) result[cell.type] = [];
    result[cell.type].push(cell);
    return result;
  },
  {} as Record<string, CellBaseModel[]>
);

export const CELLS_MAP: Record<string, CellBaseModel> = CELLS.reduce(
  (cellMap, cell) => {
    cellMap[cell.name] = cell;
    return cellMap;
  },
  {} as Record<string, CellBaseModel>
);
export const DEFAULT_CELL_KEY = "road";
export default CELLS;

export const ROWS = 4;
export const COLS = 6;

export const TILE_ROWS = 3;
export const TILE_COLS = 3;
