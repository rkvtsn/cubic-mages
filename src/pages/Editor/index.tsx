import { useState, useCallback } from "react";
import WorldMap from "components/WorldMap";
import CellModel, { CellBaseModel } from "types/CellModel";
import { COLS, ROWS } from "constants/cells";
import generateWorld from "utils/generateWorld";
import useStateUpdate from "hooks/useUpdateState";
import { EditorModeEnum, EditorPanelState } from "./types";
import { DEFAULT_EDITOR_PANEL_STATE } from "./constants";
import { EditorWrapperStyled, HeaderStyled, MainStyled } from "./styles";
import EditorPanel from "./EditorPanel";
import SaveLoadMenu from "./SaveLoadMenu";
import { loadFromLocalStorage, saveToLocalStorage } from "utils/localStorage";
import { useNavigate } from "react-router-dom";
import { RouterKeys } from "constants/routeKeys";

const realWorld = generateWorld({ rows: ROWS, cols: COLS });

const Editor = () => {
  const [worldMap, setWorldMap] = useState<CellModel[]>(realWorld);

  const [selectedCells, setSelectedCells] = useState<number[]>([]);

  const [editorPanelState, , updateEditorPanelState] =
    useStateUpdate<EditorPanelState>(DEFAULT_EDITOR_PANEL_STATE);

  const changeWorldCell = useCallback(
    (cell: CellBaseModel) => {
      setWorldMap((oldWorld) =>
        oldWorld.map((oldCell) => {
          if (selectedCells.includes(oldCell.id)) {
            return { ...oldCell, cell: { ...cell } };
          }
          return oldCell;
        })
      );
    },
    [selectedCells]
  );

  const handleCellClick = useCallback(
    (tileId: number, cellId: number, e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();

      if (editorPanelState.mode === EditorModeEnum.Select) {
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
      } else if (
        editorPanelState.mode === EditorModeEnum.Brush &&
        editorPanelState.cell
      ) {
        setWorldMap((oldWorld) => {
          return oldWorld.map((cell) => {
            if (cellId === cell.id) {
              return { ...cell, ...editorPanelState.cell };
            }
            return cell;
          });
        });
      } else if (
        editorPanelState.mode === EditorModeEnum.Tile &&
        editorPanelState.cell
      ) {
        setWorldMap((oldWorld) => {
          return oldWorld.map((cell) => {
            if (tileId === cell.tileId) {
              return { ...cell, ...editorPanelState.cell };
            }
            return cell;
          });
        });
      }
    },
    [editorPanelState]
  );

  const handleOnClearSelect = useCallback(() => {
    setSelectedCells([]);
  }, []);

  const handleOnClickPanel = useCallback(
    (cell: CellBaseModel) => {
      changeWorldCell(cell);
      handleOnClearSelect();
    },
    [changeWorldCell, handleOnClearSelect]
  );

  const handleResetMap = useCallback(() => {
    setWorldMap(generateWorld({ rows: ROWS, cols: COLS }));
  }, []);

  const handleOnSave = useCallback(
    (id: string) => {
      saveToLocalStorage<CellModel[]>(id, worldMap);
    },
    [worldMap]
  );

  const handleOnLoad = useCallback((id: string) => {
    setWorldMap(loadFromLocalStorage<CellModel[]>(id, realWorld));
  }, []);

  const navigate = useNavigate();
  const handleGoToPlayBoard = useCallback(() => {
    navigate(RouterKeys.PlayBoard);
  }, [navigate]);

  return (
    <EditorWrapperStyled>
      <HeaderStyled>
        <button onClick={handleResetMap}>Reset map</button>
        <button onClick={handleGoToPlayBoard}>Go to PlayBoard</button>
      </HeaderStyled>
      <MainStyled>
        <WorldMap
          worldMap={worldMap}
          selectedCells={selectedCells}
          onClick={handleCellClick}
        />
        <EditorPanel
          editorTopPanel={
            <SaveLoadMenu onLoad={handleOnLoad} onSave={handleOnSave} />
          }
          editorPanelState={editorPanelState}
          onChange={updateEditorPanelState}
          onClearSelect={handleOnClearSelect}
          onClick={handleOnClickPanel}
        />
      </MainStyled>
    </EditorWrapperStyled>
  );
};

export default Editor;
