import Link from "next/link";
import { useRouter } from "next/router";
export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar  sticky-top  navbar-expand-lg  navbar-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Navbar
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="container-md">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link href="/">
                  <a className="nav-link active" aria-current="page">
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/home">
                  <a className="nav-link active" aria-current="page">
                    Products
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/toDoList">
                  <a className="nav-link active" aria-current="page">
                    To Do List
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
