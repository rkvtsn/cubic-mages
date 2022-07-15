import WelcomeBoard from "pages/WelcomeBoard";
import WorldMap from "pages/WorldMap";
import { RouterKeys } from "./routeKeys";

interface RouterViewItem {
  path: RouterKeys;
  element: React.ReactNode;
}

export const ROUTES: RouterViewItem[] = [
  {
    path: RouterKeys.WelcomeBoard,
    element: <WelcomeBoard />,
  },
  {
    path: RouterKeys.WorldMap,
    element: <WorldMap />,
  },
];

export default ROUTES;
