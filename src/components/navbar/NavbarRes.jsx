import React from "react";
import { Link } from "react-router-dom";
import {AiOutlineClose} from "react-icons/ai"
import "./NavbarRes.scss";
const NavbarRes = ({handleRes}) => {
  return <div className="navbarRes">
    <div className="linksSideResponse">
        <div className="close">
        <AiOutlineClose  size={24} className="closeIcon" onClick={handleRes} />
        </div>
      <ul className="links">
        <li className="link">
          <Link to="/">home</Link>
        </li>
        <li className="link">
          <Link to="/">shop</Link>
        </li>
        <li className="link">
          <Link to="/">about us</Link>
        </li>
        <li className="link">
          <Link to="/">blog</Link>
        </li>
        <li className="link">
          <Link to="/">contact us</Link>
        </li>
      </ul>
    </div>
  </div>;
};

export default NavbarRes;
