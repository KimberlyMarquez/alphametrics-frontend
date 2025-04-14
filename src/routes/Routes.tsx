import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import ListPerson from "../components/ListPerson";
import Error from "../components/Error";
import NewElement from "../components/NewElement";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
      },
      {
        path: "/people",
        element: <ListPerson />,
        errorElement: <Error />,
      },
      {
        path: "/new_person",
        element: <NewElement />,
        errorElement: <Error />,
      }
    ],
    errorElement: <Error />,
  },
]);

export default router;
