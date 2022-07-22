/**
 * Panel of buttons clickhandler
 * @param {(buttonName: HTMLButtonElement) => void} onClick - handler button onClick
 * @returns handler panelClick
 */
const usePanelClickButton = (
  onClick: (buttonName: HTMLButtonElement) => void
): ((e: React.MouseEvent<HTMLInputElement>) => void) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const button = e.target as HTMLButtonElement;
    if (button) {
      onClick(button);
    }
  };
  return handleClick;
};

export default usePanelClickButton;
