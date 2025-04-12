import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/Error";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
      },
    ],
    errorElement: <Error />,
  },
]);

export default router;
