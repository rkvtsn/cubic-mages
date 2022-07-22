import WelcomeBoard from "pages/WelcomeBoard";
import { RouterKeys } from "./routeKeys";
import Editor from "pages/Editor";

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
    path: RouterKeys.Editor,
    element: <Editor />,
  },
];

export default ROUTES;
