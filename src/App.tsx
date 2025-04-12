import Navbar from "./components/Navbar";
import { Outlet } from "react-router";

function App() {
  return (
    <div className="container-fluid vh-100 gx-0">
      <div className="row">
        <Navbar />
        <Outlet />
      </div>
    </div>
  );
}

export default App;
