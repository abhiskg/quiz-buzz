import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../components/ErrorPage";
import Root from "../layout/Root";
import Home from "../screens/Home";
import Statistics from "../screens/Statistics";
import Blog from "../screens/Blog";
import QuizDetails from "../screens/QuizDetails";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <Home />,
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "quiz/:id",
        element: <QuizDetails />,
        loader: async ({ params }) =>
          fetch(`https://openapi.programming-hero.com/api/quiz/${params.id}`),
      },
      {
        path: "statistics",
        element: <Statistics />,
        loader: async () =>
          fetch("https://openapi.programming-hero.com/api/quiz"),
      },
      {
        path: "blog",
        element: <Blog />,
      },
    ],
  },
]);

export default router;
