/* eslint-disable jsx-a11y/anchor-is-valid */
import "./index.css";
import { Dropdown } from "react-bootstrap";
const Index = () => {
  return (
    <nav className="navbar navbar-expand-lg navHolder">
      <div className="container-fluid mx-lg-2">
        <button
          className="navbar-toggler"
          type="button"
          data-mdb-toggle="collapse"
          data-mdb-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars"></i>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 text-uppercase">
            <li className="nav-item">
              <a className="nav-link active " href="#">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Testimonials
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Portfolio
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link text-white" href="#">
                Contacts
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          <Dropdown>
            <Dropdown.Toggle variant="light" id="dropdown-basic">
              Select Language
            </Dropdown.Toggle>

            <Dropdown.Menu>
              <Dropdown.Item href="#/action-1">English</Dropdown.Item>
              <Dropdown.Item href="#/action-2">French</Dropdown.Item>
              <Dropdown.Item href="#/action-3">German</Dropdown.Item>
              <Dropdown.Item href="#/action-3">Italian</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </div>
      </div>
    </nav>
  );
};

export default Index;
