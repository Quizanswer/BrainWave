import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import NotFound from "../pages/NotFound";
import Registration from "../pages/Registration";
import Home from "../pages/Home";
import Quiz from "../pages/Quiz";
import Question from "../pages/Question";
import MCQ from "../pages/MCQ";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        path: "/",
        element: <Home />,
      },
      {
        path: "/quiz",
        element: <Quiz />,
      },
      {
        path: "/mcq",
        element: <MCQ />,
      },
      {
        path: "/question",
        element: <Question />,
      },
      {
        index: true,
        path: "/registration",
        element: <Registration />,
      },
    ],
  },

  {
    path: "*",
    element: <NotFound />,
  },
]);

export default routes;
