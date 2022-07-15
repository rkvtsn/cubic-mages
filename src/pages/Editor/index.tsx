import WorldMap from "components/WorldMap";
import generateMap from "components/WorldMap/generateMap";
import { useState } from "react";
import { useCallback } from "react";
import { TileModel } from "types/TileModel";

const Editor = () => {
  const handleCellClick = useCallback((cellId: number) => {
    console.log(cellId);
  }, []);

  const [worldMap, setWorldMap] = useState<TileModel[][]>(generateMap(4, 6));

  return <WorldMap worldMap={worldMap} onClick={handleCellClick} />;
};

export default Editor;
