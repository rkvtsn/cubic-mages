import { useState, useCallback } from "react";
import WorldMap from "components/WorldMap";
import generateMap from "components/WorldMap/generateMap";
import { TileModel } from "types/TileModel";
import EditorPanel from "./EditorPanel";
import { EditorWrapperStyled } from "./styles";
import { CellBaseModel } from "types/CellModel";

const Editor = () => {
  const [worldMap, setWorldMap] = useState<TileModel[][]>(generateMap(4, 6));

  const [currentCellId, setCurrentCellId] = useState<number | null>(null);

  const handleCellClick = useCallback(
    (tileId: number, cellId: number) => {
      setCurrentCellId(cellId);
    },
    [setCurrentCellId]
  );
  const handleOnClickPanel = useCallback((cell: CellBaseModel) => {}, []);

  return (
    <EditorWrapperStyled>
      <EditorPanel onClick={handleOnClickPanel} currentCellId={currentCellId} />
      <WorldMap
        worldMap={worldMap}
        currentCellId={currentCellId}
        onClick={handleCellClick}
      />
    </EditorWrapperStyled>
  );
};

export default Editor;
