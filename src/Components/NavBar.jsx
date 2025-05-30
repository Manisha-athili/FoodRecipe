import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light shadow-lg fixed-top p-2 rounded ">
      <div className="container-fluid">
        <Link className="navbar-brand fw-bold fs-3 text-primary" to="/">
          🍽️ MyRecipee
        </Link> 
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active fs-5" aria-current="page" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/recipes">
                Recipes
              </Link>
            </li>
            <li className="nav-item dropdown">
              <a
                className="nav-link fs-5 dropdown-toggle"
                href="#"
                role="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                Categories
              </a>
              <ul className="dropdown-menu">
                <li>
                  <Link className="dropdown-item fs-6" to="/Soups">
                    Soups
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item fs-6" to="/Salads">
                    Salads
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item fs-6" to="/Italian">
                    Italian
                  </Link>
                </li>
                <li>
                  <Link className="dropdown-item fs-6" to="/Desserts">
                    Desserts
                  </Link>
                </li>
              </ul>
            </li>
            <li className="nav-item">
              <Link className="nav-link fs-5" to="/about">
                About
              </Link>
            </li>
          </ul>
          <form className="d-flex" role="search">
            <input
              className="form-control me-2 fs-5 "
              type="search"
              placeholder="Search recipes..."
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
        </div>
      </div>
    </nav>
  );
};

export default NavBar;
