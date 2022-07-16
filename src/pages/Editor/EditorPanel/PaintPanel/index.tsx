import { CELLS_BY_GROUPS } from "constants/cells";
import React, { memo } from "react";
import { CellBaseModel } from "types/CellModel";
import EditorCell from "../EditorCell";
import { PStyled } from "../styled";
import { CellEditOptionsRowStyled, CellEditOptionsStyled } from "./styles";

interface PaintPanelProps {
  onSelect: (cell: CellBaseModel) => void;
  selected: string | undefined;
}

const PaintPanel = ({ onSelect, selected }: PaintPanelProps) => {
  return (
    <CellEditOptionsStyled>
      {Object.keys(CELLS_BY_GROUPS).map((cellKey) => (
        <React.Fragment key={cellKey}>
          <PStyled>{cellKey}</PStyled>
          <CellEditOptionsRowStyled>
            {CELLS_BY_GROUPS[cellKey].map((cell) => (
              <EditorCell
                key={cell.name}
                isSelected={selected === cell.name}
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

export default memo(PaintPanel);
