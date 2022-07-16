import React from "react";
import { CELLS_BY_GROUPS } from "constants/cells";
import { CellBaseModel } from "types/CellModel";
import EditorCell from "./EditorCell";
import {
  CellEditOptionsRowStyled,
  CellEditOptionsStyled,
  EditorPanelWrapperStyled,
  PStyled,
} from "./styled";

interface EditorPanelProps {
  currentCellId: number | null;
  onClick: (cell: CellBaseModel) => void;
}

const EditorPanel = ({ currentCellId, onClick }: EditorPanelProps) => {
  return (
    <EditorPanelWrapperStyled>
      <h3>Editor Panel</h3>
      {currentCellId ? (
        <CellEditOptionsStyled>
          {Object.keys(CELLS_BY_GROUPS).map((cellKey) => (
            <React.Fragment key={cellKey}>
              <PStyled>{cellKey}</PStyled>
              <CellEditOptionsRowStyled>
                {CELLS_BY_GROUPS[cellKey].map((cell) => (
                  <EditorCell key={cell.name} onClick={onClick} cell={cell} />
                ))}
              </CellEditOptionsRowStyled>
            </React.Fragment>
          ))}
        </CellEditOptionsStyled>
      ) : (
        <PStyled>Click on map's cell to change</PStyled>
      )}
    </EditorPanelWrapperStyled>
  );
};

export default EditorPanel;
