/**
cells: "forest", "water", "rock", "road"
default cell: "road"
13 tiles - common locations with only common cells, 
6 tiles - cities: Garnot, Roderik, Tildior, Porlien, Karoth, Peltn
3 tiles - start locations: "Jail", "Chirch", "Stronghold"
4 tiles - Ruins: 'fire', 'camp', 'cave', 'temple'
*/

import { CellBaseModel, CellType } from "types/CellModel";

const COMMON_CELLS = ["road", "forest", "water", "rock"] as const;

const START_LOCATIONS_CELLS = ["Jail", "Chirch", "Stronghold"] as const;

const CITY_CELLS = [
  "Garnot",
  "Roderik",
  "Tildior",
  "Porlien",
  "Karoth",
  "Peltn",
] as const;

const RUIN_CELLS = ["fire", "camp", "cave", "temple"] as const;

export const CELL_TYPES = ["Common", "StartLocation", "City", "Ruin"] as const;

const getCellsBase = (
  cells: readonly string[],
  type: CellType
): CellBaseModel[] => {
  return cells.map((cellKey, index) => {
    return {
      id: index,
      name: cellKey,
      type,
    };
  });
};

const RUIN = getCellsBase(RUIN_CELLS, "Ruin");
const COMMON = getCellsBase(COMMON_CELLS, "Common");
const CITY = getCellsBase(CITY_CELLS, "City");
const START_LOCATION = getCellsBase(START_LOCATIONS_CELLS, "StartLocation");

export const CELLS_LIBRARY_BASE: Record<CellType, CellBaseModel[]> = {
  Ruin: RUIN,
  Common: COMMON,
  City: CITY,
  StartLocation: START_LOCATION,
};

export const CELLS_LIBRARY_BASE_ALL: CellBaseModel[] = CELL_TYPES.reduce(
  (array: CellBaseModel[], type) => {
    return [...array, ...CELLS_LIBRARY_BASE[type]];
  },
  []
);

export const DEFAULT_CELL_KEY = "road";
/**
 * 4 x 6 tiles
 * 3 x 3 each tile
 * 24 tiles with 9 cells
 */

export default CELLS_LIBRARY_BASE_ALL;
