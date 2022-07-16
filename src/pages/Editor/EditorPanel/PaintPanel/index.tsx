import React from "react";
import { CELLS_BY_GROUPS, CELL_TYPES } from "constants/cells";
import { EditorPanelState } from "pages/Editor/types";
import { CellBaseModel } from "types/CellModel";
import EditorCell from "../EditorCell";
import { PStyled } from "../styled";
import { CellEditOptionsRowStyled, CellEditOptionsStyled } from "./styles";
import { useState } from "react";

interface PaintPanelProps {
  onSelect: (cell: CellBaseModel) => void;
  editorPanelState: EditorPanelState;
}

const PaintPanel = ({ onSelect, editorPanelState }: PaintPanelProps) => {
  return (
    <CellEditOptionsStyled>
      {Object.keys(CELLS_BY_GROUPS).map((cellKey) => (
        <React.Fragment key={cellKey}>
          <PStyled>{cellKey}</PStyled>
          <CellEditOptionsRowStyled>
            {CELLS_BY_GROUPS[cellKey].map((cell) => (
              <EditorCell
                key={cell.name}
                isSelected={editorPanelState.cell?.name === cell.name}
                onClick={onSelect}
                cell={cell}
              />
            ))}
          </CellEditOptionsRowStyled>
        </React.Fragment>
      ))}
    </CellEditOptionsStyled>
  );
};

export default PaintPanel;
