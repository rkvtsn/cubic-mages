import { useState, useCallback } from "react";
import { generatePath, useNavigate } from "react-router-dom";
import WorldMap from "components/WorldMap";
import { COLS, ROWS } from "constants/cells";
import generateWorldCells from "utils/generateWorldCells";
import useStateUpdate from "hooks/useUpdateState";
import EditorPanel from "./EditorPanel";
import SaveLoadMenu from "./SaveLoadMenu";
import { EditorModeEnum, EditorPanelState } from "./types";
import { DEFAULT_EDITOR_PANEL_STATE, REAL_WORLD } from "./constants";
import { HeaderRightSideStyled, WorldNameStyled } from "./styles";
import { RouterKeys } from "constants/routeKeys";
import changeCellInWorld from "./utils/changeCellInWorld";
import { SavedMap } from "./SaveLoadMenu/types";
import WorldModel from "types/WorldModel";
import MainLayout from "components/MainLayout";

const Editor = () => {
  const [worldMap, setWorldMap] = useState<WorldModel>(REAL_WORLD);

  const [selectedCells, setSelectedCells] = useState<number[]>([]);

  const [editorPanelState, , updateEditorPanelState] =
    useStateUpdate<EditorPanelState>(DEFAULT_EDITOR_PANEL_STATE);

  const changeWorldCell = useCallback(
    (cellName: string) => {
      changeCellInWorld(cellName, setWorldMap, (oldCell) =>
        selectedCells.includes(oldCell.id)
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
        editorPanelState.brush
      ) {
        changeCellInWorld(
          editorPanelState.brush,
          setWorldMap,
          (oldCell) => cellId === oldCell.id
        );
      } else if (
        editorPanelState.mode === EditorModeEnum.Tile &&
        editorPanelState.brush
      ) {
        changeCellInWorld(
          editorPanelState.brush,
          setWorldMap,
          (oldCell) => tileId === oldCell.tile.id
        );
      }
    },
    [editorPanelState]
  );

  const handleOnClearSelect = useCallback(() => {
    setSelectedCells([]);
  }, []);

  const handleOnClickPanel = useCallback(
    (cellName: string) => {
      changeWorldCell(cellName);
      handleOnClearSelect();
    },
    [changeWorldCell, handleOnClearSelect]
  );

  const handleResetMap = useCallback(() => {
    setWorldMap((oldWorld) => ({
      id: oldWorld.id,
      name: oldWorld.name,
      cells: generateWorldCells({ rows: ROWS, cols: COLS }),
    }));
  }, []);

  const handleOnSave = useCallback((world: SavedMap) => {
    setWorldMap((oldWorld) => ({
      id: world.id,
      name: world.name,
      cells: oldWorld.cells,
    }));
  }, []);

  const handleOnLoad = useCallback((world: WorldModel) => {
    setWorldMap(world);
  }, []);

  const navigate = useNavigate();
  const handleGoToPlayBoard = useCallback(() => {
    if (worldMap?.id) {
      navigate(generatePath(RouterKeys.PlayBoard, { id: worldMap.id }));
    }
  }, [navigate, worldMap?.id]);

  return (
    <MainLayout
      rightbar={
        <EditorPanel
          editorPanelState={editorPanelState}
          onChange={updateEditorPanelState}
          onClearSelect={handleOnClearSelect}
          onClick={handleOnClickPanel}
        />
      }
      header={
        <>
          <p>
            Current world: <WorldNameStyled>{worldMap.name}</WorldNameStyled>
          </p>

          <HeaderRightSideStyled>
            <>
              <button onClick={handleResetMap}>Clear map</button>
              <button onClick={handleGoToPlayBoard}>Go to PlayBoard</button>
              <SaveLoadMenu
                onLoad={handleOnLoad}
                onSave={handleOnSave}
                world={worldMap}
              />
            </>
          </HeaderRightSideStyled>
        </>
      }
    >
      <WorldMap
        worldMap={worldMap}
        selectedCells={selectedCells}
        onClick={handleCellClick}
      />
    </MainLayout>
  );
};

export default Editor;
