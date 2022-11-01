import React, { useState } from "react";
import { Link } from "react-router-dom";
import Logo from "../../assets/images/navbar/logo4.jpg"
import "./Navbar.scss"
import {BiSearch} from "react-icons/bi";
import {BsBagCheck} from "react-icons/bs"
import {AiOutlineHeart,AiOutlineMenu} from "react-icons/ai";
import {RiUser3Line} from "react-icons/ri"
import NavbarRes from "./NavbarRes";
const Navbar = () => {

  const[responseNav,setResponseNav]=useState(false);
  const handleRes = ()=>{
    setResponseNav(!responseNav)
  }
  return (  <>
   
  <div className="navbar">
  {
    responseNav && <NavbarRes handleRes ={handleRes}/>
  }
     <div className="toggle">
        <button onClick={handleRes}><AiOutlineMenu size={20} /></button>
        
    </div>
    <div className="logoSide">
        <img src={Logo} alt="logo" />
    </div>
    <div className="linksSide">
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
    <div className="searchSide">
      <div className="search">
        <input type="text"  placeholder='Search Products...' />
        <BiSearch/>
      </div>
      <div className="users">
        <RiUser3Line className="user" size={17}/>
        <AiOutlineHeart className="user" size={17} />
      </div>
      <div className="buttonBags">
        <BsBagCheck className="bag"/>
        <button className="button">My Chart (0)</button>
        <div className="showCard">

        </div>
      </div>
    </div>

  </div>
  </>);
};

export default Navbar;
