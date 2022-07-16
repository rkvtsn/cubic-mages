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
import { EditorPanelState } from "../types";
import Checkbox from "components/Checkbox";

interface EditorPanelProps {
  selectedCells: number[];
  onClick: (cell: CellBaseModel) => void;
  onClearSelect: () => void;
  editorPanelState: EditorPanelState;
  onChange: (value: Partial<EditorPanelState>) => void;
}

const EditorPanel = ({
  selectedCells,
  onClearSelect,
  onClick,
  editorPanelState,
  onChange,
}: EditorPanelProps) => {
  const isPaintMode = selectedCells?.length || editorPanelState.isBrush;

  return (
    <EditorPanelWrapperStyled>
      <h3>Editor Panel</h3>
      {isPaintMode ? (
        <>
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
          <button onClick={onClearSelect}>Clear selection</button>
        </>
      ) : (
        <div>
          <PStyled>Click on map's cell to edit</PStyled>
          <Checkbox<EditorPanelState>
            value={editorPanelState.isBrush}
            name="isBrush"
            onChange={onChange}
          />
        </div>
      )}
    </EditorPanelWrapperStyled>
  );
};

export default EditorPanel;
