import React, { useContext, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link, NavLink, useNavigate } from "react-router-dom";
import Logo from "../assets/img/logo.png";
import { ProductContext } from "../context/ProductContext";
import { UserLoginContext } from "../context/UserLoginContext";

const Header = () => {
  const { amount } = useContext(ProductContext);
  const { user, login, logout } = useContext(UserLoginContext);
  const navigate = useNavigate();
  useEffect(() => {
    if (localStorage.getItem("token")) {
      login(localStorage.getItem("name"), localStorage.getItem("token"));
    }
  }, []);

  const handleLogout = () => {
    navigate("/");
    logout();
  };

  return (
    <div className="navbar-bk">
      <Navbar expand="lg" className="bg-body-tertiary ">
        <Container>
          <NavLink className="navbar-brand">
            <img src={Logo} style={{ height: "40px" }} />
            <strong className="text-white">&nbsp; HynDn Dev</strong>
          </NavLink>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavLink className="nav-link text-white" to="/">
                Home
              </NavLink>
              <NavLink className="nav-link text-white" to="/products">
                Our Store
              </NavLink>
              <NavLink className="nav-link text-white" to="/blogs">
                Blogs
              </NavLink>
              <NavLink className="nav-link text-white" to="/contact">
                Contact
              </NavLink>
            </Nav>
            <Nav>
              {user && user.name && (
                <NavLink className="nav-link">
                  <Link to="/about-user" className="link text-white">
                    <i className="fa-solid fa-user"></i> &nbsp;&nbsp;
                    <b>
                      <i>{user.name}</i>
                    </b>
                  </Link>
                </NavLink>
              )}
              <NavDropdown title="Setting" style={{ color: "white" }}>
                {user && user.auth === true ? (
                  <NavLink
                    className="dropdown-item text-white"
                    onClick={handleLogout}
                  >
                    Log out
                  </NavLink>
                ) : (
                  <NavLink className="dropdown-item " to="/login">
                    <i className="fa-solid fa-user"></i>
                    &nbsp;Login
                  </NavLink>
                )}
              </NavDropdown>

              <NavLink
                className="nav-link position-relative text-white"
                to="/checkout"
              >
                <i className="fa-solid fa-cart-shopping"></i>
                <span className="position-absolute top-0 px-1">{amount}</span>
              </NavLink>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;
