import { Link, useLocation } from "react-router-dom";

// Here we are using object destructuring assignment to pluck off our variables from the props object
// We assign them to their own variable names
function NavTabs() {
  const currentPage = useLocation().pathname;

  return (
    <div className="navbar">
      <ul className="navbar-menu">
        <li className="navbar-item">
          <Link
            to="/"
            className={currentPage === "/" ? "navbar-link active" : "nav-link"}
          >
            Home
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/Contact"
            className={
              currentPage === "/Contact" ? "navbar-link active" : "nav-link"
            }
          >
            Contact
          </Link>
        </li>
        <li className="navbar-item">
          <Link
            to="/Portfolio"
            className={
              currentPage === "/Porfolio" ? "navbar-link active" : "nav-link"
            }
          >
            Porfolio
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavTabs;
