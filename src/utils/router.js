import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Root from "../layout/Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
      },
    ],
  },
]);
