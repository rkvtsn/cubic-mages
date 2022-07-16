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
import { CellBaseModel, CellType } from "types/CellModel";

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
    background: "yellow",
  },
  {
    name: "forest",
    type: "Common",
    background: "green",
  },
  {
    name: "water",
    type: "Common",
    background: "blue",
  },
  {
    name: "rock",
    type: "Common",
    background: "gray",
  },
  // "Jail", "Chirch", "Stronghold"
  {
    name: "Jail",
    type: "StartLocation",
    background: "black",
  },
  {
    name: "Chirch",
    type: "StartLocation",
    background: "black",
  },
  {
    name: "Stronghold",
    type: "StartLocation",
    background: "black",
  },
  // "Garnot", "Roderik", "Tildior", "Porlien", "Karoth", "Peltn"
  {
    name: "Garnot",
    type: "City",
    background: "brown",
  },
  {
    name: "Roderik",
    type: "City",
    background: "brown",
  },
  {
    name: "Tildior",
    type: "City",
    background: "brown",
  },
  {
    name: "Porlien",
    type: "City",
    background: "brown",
  },
  {
    name: "Karoth",
    type: "City",
    background: "brown",
  },
  {
    name: "Peltn",
    type: "City",
    background: "brown",
  },
  // "fire", "camp", "cave", "temple"
  {
    name: "fire",
    type: "Ruin",
    background: "#FFE6E6FA",
  },
  {
    name: "camp",
    type: "Ruin",
    background: "#FFE6E6FA",
  },
  {
    name: "cave",
    type: "Ruin",
    background: "#FFE6E6FA",
  },
  {
    name: "temple",
    type: "Ruin",
    background: "#FFE6E6FA",
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
