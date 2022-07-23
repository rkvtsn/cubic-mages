import { memo, useCallback } from "react";
import ControlPanel from "components/ControlPanel";
import { EditorModeEnum, EditorPanelState } from "../types";
import { CONTROL_BUTTONS } from "../constants";
import PaintPanel from "./PaintPanel";
import {
  ClearButtonStyled,
  EditorPanelWrapperStyled,
  TitleStyled,
} from "./styles";

interface EditorPanelProps {
  onClick: (cellName: string) => void;
  onClearSelect: () => void;
  editorPanelState: EditorPanelState;
  onChange: (value: Partial<EditorPanelState>) => void;
}

const EditorPanel = ({
  onClearSelect,
  onClick,
  editorPanelState,
  onChange,
}: EditorPanelProps) => {
  const handleOnChange = useCallback(
    (mode: EditorModeEnum) => {
      onClearSelect();
      onChange({ mode, brush: null });
    },
    [onChange, onClearSelect]
  );

  const handleSelect = useCallback(
    (cellName: string) => {
      if (editorPanelState.mode !== EditorModeEnum.Select) {
        onChange({ brush: cellName });
      } else {
        onClick(cellName);
      }
    },
    [onClick, onChange, editorPanelState?.mode]
  );

  return (
    <EditorPanelWrapperStyled>
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

export default memo(EditorPanel);
