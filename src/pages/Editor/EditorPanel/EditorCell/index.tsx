import { memo, useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import { EditorCellStyled, TileCellStyled } from "./styles";

interface EditorCellProps {
  cellBase: CellBaseModel;
  onClick: (cellName: string) => void;
  isSelected: boolean;
}

const EditorCell = ({ cellBase, onClick, isSelected }: EditorCellProps) => {
  const handleOnClick = useCallback(() => {
    onClick(cellBase.name);
  }, [cellBase, onClick]);

  return (
    <EditorCellStyled>
      <TileCellStyled
        cellBase={cellBase}
        onClick={handleOnClick}
        isSelected={isSelected}
        isStatic
      />
      <div>{cellBase.name}</div>
    </EditorCellStyled>
  );
};

export default memo(EditorCell);
