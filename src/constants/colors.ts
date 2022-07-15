export const TYPES_OF_TILES = ["forest", "water", "rock", "road"] as const;

export type TileType = typeof TYPES_OF_TILES[number];

export const COLORS_TILES: Record<TileType, string> = Object.freeze({
  forest: "green",
  water: "blue",
  rock: "gray",
  road: "yellow",
});
