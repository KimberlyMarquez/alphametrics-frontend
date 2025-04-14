import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <aside
        className="col-12 d-flex col-lg-2 flex-lg-column justify-content-sm-between"
        style={{ backgroundColor: "#4e5284" }}
      >
        <div id="logo" className="d-flex mx-2 justify-content-lg-center ms-3">
          <a href="#" className="">
            <img src="/img/logo.png" alt="#" id="log-img" />
          </a>
        </div>
        <nav className="d-flex flex-lg-column" style={{ gap: "6rem" }}>
          <div id="dashboard" className="d-flex justify-content-lg-center">
            <Link to={"/"}>
              <img src="/img/dashboard_icon.png" alt="#" id="img-dash" />
            </Link>
          </div>
          <div id="zone" className="d-flex justify-content-lg-center">
            <Link to={"/people"}>
              <img src="/img/element_icon.png" alt="#" id="icon-zona" />
            </Link>
          </div>
        </nav>
        <div
          id="profile"
          className="d-flex justify-content-center mt-lg-auto align-items-center me-3"
          style={{ marginBottom: "3rem" }}
        >
          <a href="#" className="mt-5">
            <img src="/img/user_icon.png" alt="#" id="user-icon" />
          </a>
        </div>
      </aside>
    </>
  );
}
