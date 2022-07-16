/**
cells: "forest", "water", "rock", "road"
default cell: "road"
13 tiles - common locations with only common cells, 
6 tiles - cities: Garnot, Roderik, Tildior, Porlien, Karoth, Peltn
3 tiles - start locations: "Jail", "Chirch", "Stronghold"
4 tiles - Ruins: 'fire', 'camp', 'cave', 'temple'
*/

// const COMMON_CELLS = ["road", "forest", "water", "rock"] as const;

// const START_LOCATIONS_CELLS = ["Jail", "Chirch", "Stronghold"] as const;

// const CITY_CELLS = [
//   "Garnot",
//   "Roderik",
//   "Tildior",
//   "Porlien",
//   "Karoth",
//   "Peltn",
// ] as const;

// const RUIN_CELLS = ["fire", "camp", "cave", "temple"] as const;

// const getCellsBase = (
//   cells: readonly string[],
//   type: CellType,
//   background: string
// ): CellBaseModel[] => {
//   return cells.map((cellKey, index) => {
//     return {
//       id: index,
//       name: cellKey,
//       type,
//       background,
//     };
//   });
// };

// const RUIN = getCellsBase(RUIN_CELLS, "Ruin");
// const COMMON = getCellsBase(COMMON_CELLS, "Common");
// const CITY = getCellsBase(CITY_CELLS, "City");
// const START_LOCATION = getCellsBase(START_LOCATIONS_CELLS, "StartLocation");

// export const CELLS_LIBRARY_BASE: Record<CellType, CellBaseModel[]> = {
//   Ruin: RUIN,
//   Common: COMMON,
//   City: CITY,
//   StartLocation: START_LOCATION,
// };

// export const CELLS_LIBRARY_BASE_ALL: CellBaseModel[] = CELL_TYPES.reduce(
//   (array: CellBaseModel[], type) => {
//     return [...array, ...CELLS_LIBRARY_BASE[type]];
//   },
//   []
// );
/**
 * 4 x 6 tiles
 * 3 x 3 each tile
 * 24 tiles with 9 cells
 */
import { CellBaseModel } from "types/CellModel";
import { COLOR_PALETTE } from "./colors";

export const CELL_TYPES = ["Common", "StartLocation", "City", "Ruin"] as const;

/**
"road", "forest", "water", "rock"
"Jail", "Chirch", "Stronghold"
"Garnot", "Roderik", "Tildior", "Porlien", "Karoth", "Peltn"
"fire", "camp", "cave", "temple"
"Common", "StartLocation", "City", "Ruin"
 */
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
  },
  {
    name: "Chirch",
    type: "StartLocation",
    background: COLOR_PALETTE.BlackBlue,
  },
  {
    name: "Stronghold",
    type: "StartLocation",
    background: COLOR_PALETTE.BlackChinese,
  },
  // "Garnot", "Roderik", "Tildior", "Porlien", "Karoth", "Peltn"
  {
    name: "Garnot",
    type: "City",
    background: COLOR_PALETTE.BrownAuborn,
  },
  {
    name: "Roderik",
    type: "City",
    background: COLOR_PALETTE.BrownBean,
  },
  {
    name: "Tildior",
    type: "City",
    background: COLOR_PALETTE.BrownChocolate,
  },
  {
    name: "Porlien",
    type: "City",
    background: COLOR_PALETTE.BrownCoffee,
  },
  {
    name: "Karoth",
    type: "City",
    background: COLOR_PALETTE.BrownRusset,
  },
  {
    name: "Peltn",
    type: "City",
    background: COLOR_PALETTE.BrownSpicy,
  },
  // "fire", "camp", "cave", "temple"
  {
    name: "fire",
    type: "Ruin",
    background: COLOR_PALETTE.PinkLittle,
  },
  {
    name: "camp",
    type: "Ruin",
    background: COLOR_PALETTE.PinkMulbery,
  },
  {
    name: "cave",
    type: "Ruin",
    background: COLOR_PALETTE.PinkRasberry,
  },
  {
    name: "temple",
    type: "Ruin",
    background: COLOR_PALETTE.WhitePlatinum,
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
