import { useState, useCallback } from "react";
import WorldMap from "components/WorldMap";
import EditorPanel from "./EditorPanel";
import { EditorWrapperStyled } from "./styles";
import CellModel, { CellBaseModel } from "types/CellModel";
import { COLS, ROWS } from "constants/cells";
import generateWorld from "utils/generateWorld";
import { EditorPanelState } from "./types";
import useStateUpdate from "./useUpdateState";

const realWorld = generateWorld({ rows: ROWS, cols: COLS });

const DEFAULT_EDITOR_PANEL_STATE: EditorPanelState = {
  isBrush: false,
  cell: null,
};

const Editor = () => {
  const [worldMap, setWorldMap] = useState<CellModel[]>(realWorld);

  const [selectedCells, setSelectedCells] = useState<number[]>([]);

  const handleCellClick = useCallback(
    (tileId: number, cellId: number, e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();

      setSelectedCells((selectedCells) => {
        let hasCell = false;
        const selected: number[] = [];
        for (let i = 0; i < selectedCells.length; i++) {
          const selectedCell = selectedCells[i];
          if (selectedCell === cellId) {
            hasCell = true;
          } else {
            selected.push(selectedCell);
          }
        }
        if (!hasCell) {
          selected.push(cellId);
        }
        return selected;
      });
    },
    [setSelectedCells]
  );

  const handleOnClearSelect = useCallback(() => {
    setSelectedCells([]);
  }, [setSelectedCells]);

  const handleOnClickPanel = useCallback(
    (cell: CellBaseModel) => {
      setWorldMap((oldWorld) =>
        oldWorld.map((oldCell) => {
          if (selectedCells.includes(oldCell.id)) {
            return { ...oldCell, ...cell };
          }
          return oldCell;
        })
      );
      handleOnClearSelect();
    },
    [setWorldMap, selectedCells, handleOnClearSelect]
  );

  const [editorPanelState, , updateEditorPanelState] =
    useStateUpdate<EditorPanelState>(DEFAULT_EDITOR_PANEL_STATE);

  return (
    <EditorWrapperStyled>
      <WorldMap
        worldMap={worldMap}
        selectedCells={selectedCells}
        onClick={handleCellClick}
      />
      <EditorPanel
        editorPanelState={editorPanelState}
        onChange={updateEditorPanelState}
        onClearSelect={handleOnClearSelect}
        onClick={handleOnClickPanel}
        selectedCells={selectedCells}
      />
    </EditorWrapperStyled>
  );
};

export default Editor;
