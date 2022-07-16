import { useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import ControlPanel from "components/ControlPanel";
import { EditorModeEnum, EditorPanelState } from "../types";
import { CONTROL_BUTTONS } from "../constants";
import PaintPanel from "./PaintPanel";
import { EditorPanelWrapperStyled } from "./styled";
import { ClearButtonStyled } from "./styles";

interface EditorPanelProps {
  onClick: (cell: CellBaseModel) => void;
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
      onChange({ mode, cell: null });
    },
    [onChange, onClearSelect]
  );

  const handleClick = useCallback(
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
      <h3>Editor Panel</h3>
      <div>
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
      </div>
      <PaintPanel onSelect={handleClick} editorPanelState={editorPanelState} />
    </EditorPanelWrapperStyled>
  );
};

export default EditorPanel;
