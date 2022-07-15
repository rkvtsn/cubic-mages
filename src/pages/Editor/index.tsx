import { useState, useCallback } from "react";
import WorldMap from "components/WorldMap";
import EditorPanel from "./EditorPanel";
import { EditorWrapperStyled } from "./styles";
import CellModel, { CellBaseModel } from "types/CellModel";
import { COLS, ROWS } from "constants/cells";
import generateWorld from "utils/generateWorld";

const realWorld = generateWorld({ rows: ROWS, cols: COLS });

const Editor = () => {
  const [worldMap, setWorldMap] = useState<CellModel[]>(realWorld);

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
