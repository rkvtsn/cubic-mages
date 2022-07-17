const usePanelClickButton = (
  onClick: (buttonName: HTMLButtonElement) => void
) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const button = e.target as HTMLButtonElement;
    if (button) {
      onClick(button);
    }
  };
  return handleClick;
};

export default usePanelClickButton;
