import React from "react";
import { Nav, Navbar, NavLink } from "react-bootstrap";
import { Link, Outlet } from "react-router-dom";
import { navigationItems } from "../content";
import Footer from "./Footer";

const NavigationBar = () => {
  return (
    <>
      <Navbar
        collapseOnSelect
        expand="sm"
        bg="dark"
        variant="dark"
        sticky="top"
      >
        <Navbar.Brand>
          <div className="d-flex">
            <h5 className="title_head">OnPoint </h5>
            <p className="title_subscript">Software</p>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          data-bs-toggle="collapse"
          data-bs-target="#navbarScroll"
        />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="justify-content-end flex-grow-1 pe-3">
            {navigationItems.map((item, index) => (
              <NavLink eventKey={index} as={Link} to={item.to}>
                {item.title}
              </NavLink>
            ))}
          </Nav>
        </Navbar.Collapse>
      </Navbar>{" "}
      <Outlet />
      <Footer />
    </>
  );
};

export default NavigationBar;
