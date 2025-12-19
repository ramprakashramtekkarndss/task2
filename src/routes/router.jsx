import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Task2 from "../pages/Task2";
import Task1 from "../pages/Task1";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Task2 /> },
      { path: "task1", element: <Task1 /> },
    ],
  },
]);

export default router;
