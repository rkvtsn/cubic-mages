import { CellBaseModel } from "types/CellModel";
import { COLOR_PALETTE } from "./colors";

export const CELL_TYPES = ["Common", "StartLocation", "City", "Ruin"] as const;

const CELLS: CellBaseModel[] = [
  // "road", "forest", "water", "rock"
  {
    name: "road",
    type: "Common",
    background: [
      COLOR_PALETTE.YellowField,
      COLOR_PALETTE.YellowField1,
      COLOR_PALETTE.YellowField2,
    ],
  },
  {
    name: "forest",
    type: "Common",
    background: [
      COLOR_PALETTE.GreenAndroid,
      COLOR_PALETTE.GreenAndroid1,
      COLOR_PALETTE.GreenAndroid2,
    ],
  },
  {
    name: "water",
    type: "Common",
    background: [
      COLOR_PALETTE.BlueNavy,
      COLOR_PALETTE.BlueNavy1,
      COLOR_PALETTE.BlueNavy2,
    ],
  },
  {
    name: "rock",
    type: "Common",
    background: [
      COLOR_PALETTE.GrayGranit,
      COLOR_PALETTE.GrayGranit1,
      COLOR_PALETTE.GrayGranit2,
    ],
  },
  // "Jail", "Chirch", "Stronghold"
  {
    name: "Jail",
    type: "StartLocation",
    background: COLOR_PALETTE.BlackCetacean,
    count: 1,
  },
  {
    name: "Chirch",
    type: "StartLocation",
    background: COLOR_PALETTE.BlackBlue,
    count: 1,
  },
  {
    name: "Stronghold",
    type: "StartLocation",
    background: COLOR_PALETTE.BlackChinese,
    count: 1,
  },
  // "Garnot", "Roderik", "Tildior", "Porlien", "Karoth", "Peltn"
  {
    name: "Garnot",
    type: "City",
    background: COLOR_PALETTE.BrownAuborn,
    count: 1,
  },
  {
    name: "Roderik",
    type: "City",
    background: COLOR_PALETTE.BrownBean,
    count: 1,
  },
  {
    name: "Tildior",
    type: "City",
    background: COLOR_PALETTE.BrownChocolate,
    count: 1,
  },
  {
    name: "Porlien",
    type: "City",
    background: COLOR_PALETTE.BrownCoffee,
    count: 1,
  },
  {
    name: "Karoth",
    type: "City",
    background: COLOR_PALETTE.BrownRusset,
    count: 1,
  },
  {
    name: "Peltn",
    type: "City",
    background: COLOR_PALETTE.BrownSpicy,
    count: 1,
  },
  // "fire", "camp", "cave", "temple"
  {
    name: "fire",
    type: "Ruin",
    background: COLOR_PALETTE.PinkLittle,
    count: 1,
  },
  {
    name: "camp",
    type: "Ruin",
    background: COLOR_PALETTE.PinkMulbery,
    count: 1,
  },
  {
    name: "cave",
    type: "Ruin",
    background: COLOR_PALETTE.PinkRasberry,
    count: 1,
  },
  {
    name: "temple",
    type: "Ruin",
    background: COLOR_PALETTE.WhitePlatinum,
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
