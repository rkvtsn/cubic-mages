import ROUTES from "constants/routes";
import { Routes, Route } from "react-router-dom";

const RouterView = () => {
  return (
    <Routes>
      {ROUTES.map((route) => (
        <Route path={route.path} element={route.element} key={route.path} />
      ))}
    </Routes>
  );
};

export default RouterView;
