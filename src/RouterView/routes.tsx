import WelcomeBoard from "pages/WelcomeBoard";
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
];

export default ROUTES;
