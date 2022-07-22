import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import usePanelClickButton from "hooks/usePanelClickButton";
import { RouterKeys } from "constants/routeKeys";

const WelcomeBoard = () => {
  const navigate = useNavigate();

  const handleNavigation = useCallback(
    (button: HTMLButtonElement) => {
      navigate(button.value);
    },
    [navigate]
  );

  const handleClickPanelNavigate = usePanelClickButton(handleNavigation);

  return (
    <div>
      <h1>WelcomeBoard</h1>
      <div onClick={handleClickPanelNavigate}>
        <button value={RouterKeys.PlayBoard}>PlayBoard</button>
        <button value={RouterKeys.Editor}>Editor mode</button>
      </div>
    </div>
  );
};

export default WelcomeBoard;
