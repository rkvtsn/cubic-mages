import { ReactNode, useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import ControlPanel from "components/ControlPanel";
import { EditorModeEnum, EditorPanelState } from "../types";
import { CONTROL_BUTTONS } from "../constants";
import PaintPanel from "./PaintPanel";
import {
  ClearButtonStyled,
  EditorPanelTop,
  EditorPanelWrapperStyled,
  TitleStyled,
} from "./styles";

interface EditorPanelProps {
  onClick: (cell: CellBaseModel) => void;
  onClearSelect: () => void;
  editorPanelState: EditorPanelState;
  onChange: (value: Partial<EditorPanelState>) => void;
  editorTopPanel?: ReactNode;
}

const EditorPanel = ({
  onClearSelect,
  onClick,
  editorPanelState,
  onChange,
  editorTopPanel,
}: EditorPanelProps) => {
  const handleOnChange = useCallback(
    (mode: EditorModeEnum) => {
      onClearSelect();
      onChange({ mode, cell: null });
    },
    [onChange, onClearSelect]
  );

  const handleSelect = useCallback(
    (cell: CellBaseModel) => {
      if (editorPanelState.mode !== EditorModeEnum.Select) {
        onChange({ cell });
      } else {
        onClick(cell);
      }
    },
    [onClick, onChange, editorPanelState?.mode]
  );

  return (
    <EditorPanelWrapperStyled>
      <EditorPanelTop>{editorTopPanel}</EditorPanelTop>
      <TitleStyled>
        <h3>Editor Panel</h3>
      </TitleStyled>

      <ControlPanel
        buttons={CONTROL_BUTTONS}
        onChange={handleOnChange}
        selected={editorPanelState.mode}
      />
      {editorPanelState.mode === EditorModeEnum.Select && (
        <ClearButtonStyled onClick={onClearSelect}>
          Clear selection
        </ClearButtonStyled>
      )}
      <PaintPanel onSelect={handleSelect} editorPanelState={editorPanelState} />
    </EditorPanelWrapperStyled>
  );
};

export default EditorPanel;
