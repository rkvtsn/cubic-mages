import WelcomeBoard from "pages/WelcomeBoard";
import { RouterKeys } from "./routeKeys";
import Editor from "pages/Editor";
import PlayBoard from "pages/PlayBoard";

interface RouterViewItem {
  path: RouterKeys;
  element: React.ReactNode;
  exact?: boolean;
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
  {
    path: RouterKeys.PlayBoard,
    element: <PlayBoard />,
  },
];

export default ROUTES;
