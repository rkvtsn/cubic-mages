const usePanelClickButton = <T extends string>(
  onClick: (buttonName: T) => void
) => {
  const handleClick = (e: React.MouseEvent<HTMLInputElement>) => {
    const button = e.target as HTMLButtonElement;
    if (button) {
      onClick(button.name as T);
    }
  };
  return handleClick;
};

export default usePanelClickButton;
