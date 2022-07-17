import { useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import ControlPanel from "components/ControlPanel";
import { EditorModeEnum, EditorPanelState } from "../types";
import { CONTROL_BUTTONS } from "../constants";
import PaintPanel from "./PaintPanel";
import {
  ClearButtonStyled,
  EditorPanelWrapperStyled,
  TitleStyled,
} from "./styles";
import SaveLoadMenu from "../SaveLoadMenu";

interface EditorPanelProps {
  onClick: (cell: CellBaseModel) => void;
  onClearSelect: () => void;
  editorPanelState: EditorPanelState;
  onChange: (value: Partial<EditorPanelState>) => void;
  onSave: (id: string) => void;
  onLoad: (id: string) => void;
}

const EditorPanel = ({
  onClearSelect,
  onClick,
  editorPanelState,
  onChange,
  onSave,
  onLoad,
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
      <TitleStyled>
        <h3>Editor Panel</h3>
        <SaveLoadMenu onLoad={onLoad} onSave={onSave} />
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
