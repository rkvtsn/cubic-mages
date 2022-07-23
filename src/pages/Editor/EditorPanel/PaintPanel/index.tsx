import React, { memo } from "react";
import { CELLS_BY_GROUPS } from "constants/cells";
import { EditorPanelState } from "pages/Editor/types";
import EditorCell from "../EditorCell";
import { PStyled } from "../styles";
import { CellEditOptionsRowStyled, CellEditOptionsStyled } from "./styles";

interface PaintPanelProps {
  onSelect: (cellName: string) => void;
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
                isSelected={editorPanelState.brush === cell.name}
                onClick={onSelect}
                cellName={cell.name}
              />
            ))}
          </CellEditOptionsRowStyled>
        </React.Fragment>
      ))}
    </CellEditOptionsStyled>
  );
};

export default memo(PaintPanel);
