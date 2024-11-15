import { Link, useLocation } from "react-router-dom";

function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <li className="press-start-2p-regular">
          <Link
            to="/"
            className={currentPage === "/" ? "subtitle navbar-link active" : "subtitle navbar-link"}
          >
            Home
          </Link>
        </li>
        <li className="press-start-2p-regular">
          <Link
            to="/Contact"
            className={currentPage === "/Contact" ? "subtitle navbar-link active" : "subtitle navbar-link"}
          >
            Contact
          </Link>
        </li>
        <li className="press-start-2p-regular">
          <Link
            to="/Porfolio"
            className={currentPage === "/Porfolio" ? "subtitle navbar-link active" : "subtitle navbar-link"}
          >
            Portfolio
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
