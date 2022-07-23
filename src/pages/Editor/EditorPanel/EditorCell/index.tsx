import { memo, useCallback } from "react";
import { EditorCellStyled, TileCellStyled } from "./styles";

interface EditorCellProps {
  cellName: string;
  onClick: (cellName: string) => void;
  isSelected: boolean;
}

const EditorCell = ({ cellName, onClick, isSelected }: EditorCellProps) => {
  const handleOnClick = useCallback(() => {
    onClick(cellName);
  }, [cellName, onClick]);

  return (
    <EditorCellStyled>
      <TileCellStyled
        cellName={cellName}
        onClick={handleOnClick}
        isSelected={isSelected}
        isStatic
      />
      <div>{cellName}</div>
    </EditorCellStyled>
  );
};

export default memo(EditorCell);
