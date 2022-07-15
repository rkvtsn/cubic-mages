import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { RouterKeys } from "RouterView/routeKeys";

const WelcomeBoard = () => {
  const navigate = useNavigate();
  const handleOnStartClick = useCallback(() => {
    navigate(RouterKeys.Editor);
  }, [navigate]);
  return (
    <div>
      <h1>WelcomeBoard</h1>
      <button onClick={handleOnStartClick}>Start</button>
    </div>
  );
};

export default WelcomeBoard;
