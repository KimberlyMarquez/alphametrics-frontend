import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../components/Error";

import Dashboard from "../pages/Dashboard";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: <Dashboard />
      },
    ],
  },
]);

export default router;
