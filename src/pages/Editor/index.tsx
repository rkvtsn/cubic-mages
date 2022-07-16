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

  const [selectedCells, setSelectedCells] = useState<number[]>([]);

  const handleCellClick = useCallback(
    (tileId: number, cellId: number, e: React.MouseEvent<HTMLElement>) => {
      e.stopPropagation();
      setSelectedCells((oldSelected) => [...new Set([...oldSelected, cellId])]);
    },
    [setSelectedCells]
  );

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
    },
    [setWorldMap, selectedCells]
  );

  const handleOnClickOuter = useCallback(() => {
    setSelectedCells([]);
  }, [setSelectedCells]);

  return (
    <EditorWrapperStyled onClick={handleOnClickOuter}>
      <WorldMap
        worldMap={worldMap}
        selectedCells={selectedCells}
        onClick={handleCellClick}
      />
      <EditorPanel onClick={handleOnClickPanel} selectedCells={selectedCells} />
    </EditorWrapperStyled>
  );
};

export default Editor;
