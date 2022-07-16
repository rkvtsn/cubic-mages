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
    (tileId: number, cellId: number, e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      setCurrentCellId(cellId);
    },
    [setCurrentCellId]
  );
  const handleOnClickPanel = useCallback(
    (cell: CellBaseModel) => {
      setWorldMap((oldWorld) =>
        oldWorld.map((oldCell) => {
          if (oldCell.id === currentCellId) {
            return { ...oldCell, ...cell };
          }
          return oldCell;
        })
      );
    },
    [setWorldMap, currentCellId]
  );

  const handleOnClickOuter = useCallback(() => {
    setCurrentCellId(null);
  }, [setCurrentCellId]);

  return (
    <EditorWrapperStyled onClick={handleOnClickOuter}>
      <WorldMap
        worldMap={worldMap}
        currentCellId={currentCellId}
        onClick={handleCellClick}
      />
      <EditorPanel onClick={handleOnClickPanel} currentCellId={currentCellId} />
    </EditorWrapperStyled>
  );
};

export default Editor;
