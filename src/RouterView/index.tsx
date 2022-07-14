import { Routes, Route } from "react-router-dom";
import ROUTES from "./routes";

const RouterView = () => {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route {...route} />
      ))}
    </Routes>
  );
};

export default RouterView;
