import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="container-fluid vh-100 gx-0">
      <div className="row">
        <Navbar />
        <div className="col-lg-9 px-4 mt-5 mt-lg-0">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default App;
