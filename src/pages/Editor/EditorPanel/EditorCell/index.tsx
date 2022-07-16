import TileCell from "components/TileCell";
import { memo, useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import { EditorCellStyled } from "./styles";

interface EditorCellProps {
  cell: CellBaseModel;
  onClick: (cell: CellBaseModel) => void;
  isSelected: boolean;
}

const EditorCell = ({ cell, onClick, isSelected }: EditorCellProps) => {
  const handleOnClick = useCallback(() => {
    onClick(cell);
  }, [cell, onClick]);

  return (
    <EditorCellStyled>
      <TileCell
        cell={cell}
        onClick={handleOnClick}
        isSelected={isSelected}
        isStatic
      />
      <div>{cell.name}</div>
    </EditorCellStyled>
  );
};

export default memo(EditorCell);
