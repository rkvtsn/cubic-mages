import TileCell from "components/TileCell";
import { memo, useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import { EditorCellStyled } from "./styles";

interface EditorCellProps {
  cell: CellBaseModel;
  onClick: (cell: CellBaseModel) => void;
}

const EditorCell = ({ cell, onClick }: EditorCellProps) => {
  const handleOnClick = useCallback(() => {
    onClick(cell);
  }, [cell, onClick]);

  return (
    <EditorCellStyled>
      <TileCell onClick={handleOnClick} cell={cell} />
      <div>{cell.name}</div>
    </EditorCellStyled>
  );
};

export default memo(EditorCell);
