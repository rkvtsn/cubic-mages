import { useCallback } from "react";
import { CellBaseModel } from "types/CellModel";
import ControlPanel from "components/ControlPanel";
import { EditorModeEnum, EditorPanelState } from "../types";
import { CONTROL_BUTTONS } from "../constants";
import PaintPanel from "./PaintPanel";
import { EditorPanelWrapperStyled, PStyled } from "./styled";

interface EditorPanelProps {
  isPaintMode: boolean;
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
  isPaintMode,
}: EditorPanelProps) => {
  const handleOnChange = useCallback(
    (buttonName: EditorModeEnum) => {
      onClearSelect();
      onChange({ mode: buttonName });
    },
    [onChange, onClearSelect]
  );

  const handleClick = useCallback(
    (cell: CellBaseModel) => {
      onClick(cell);
      if (editorPanelState.mode !== EditorModeEnum.Select) {
        onChange({ cell });
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
        <div>
          {editorPanelState.mode === EditorModeEnum.Select && (
            <button onClick={onClearSelect}>Clear selection</button>
          )}
        </div>
      </div>
      {isPaintMode ? (
        <PaintPanel
          onSelect={handleClick}
          selected={editorPanelState?.cell?.name}
        />
      ) : (
        <PStyled>Click on map's cell to edit</PStyled>
      )}
    </EditorPanelWrapperStyled>
  );
};

export default EditorPanel;
