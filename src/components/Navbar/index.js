import React from "react";
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink,
} from "./NavbarElements";

const Navbar = () => {
  return (
    <>
      <Nav>
        <Bars />

        <NavMenu>
          <NavLink to="/home" activeStyle>
            Home
          </NavLink>
          <NavLink to="/online" activeStyle>
            OnlineSearch
          </NavLink>
          <NavLink to="/offline" activeStyle>
            OfflineSearch
          </NavLink>
        </NavMenu>
        <NavBtnLink to="/#">Sign In</NavBtnLink>
      </Nav>
    </>
  );
};

export default Navbar;
