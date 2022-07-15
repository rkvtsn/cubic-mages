import TileCell from "components/TileCell";
import CELLS from "constants/cells";
import { CellBaseModel } from "types/CellModel";
import {
  CellLegendStyled,
  CellListStyled,
  EditorPanelWrapperStyled,
} from "./styled";

interface EditorPanelProps {
  currentCellId: number | null;
  onClick: (cell: CellBaseModel) => void;
}

const EditorPanel = ({ currentCellId }: EditorPanelProps) => {
  return (
    <EditorPanelWrapperStyled>
      <h3>EditorPanel</h3>
      {currentCellId ? (
        <CellListStyled>
          {CELLS.map((cell) => (
            <CellLegendStyled key={cell.name}>
              <TileCell onClick={() => {}} cell={cell} />
              <div>- {cell.name}</div>
            </CellLegendStyled>
          ))}
        </CellListStyled>
      ) : null}
    </EditorPanelWrapperStyled>
  );
};

export default EditorPanel;
