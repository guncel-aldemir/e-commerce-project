import React from "react";
import Navbar from "../navbar/Navbar";
import Hero from "./hero/Hero";

const Header = () => {
  return (
    <>
    <header>
        <div className="container">
            <nav className="navigationBar">
                <Navbar/>
            </nav>
            <Hero/>
              
        </div>


    </header>
    </>
  )
};

export default Header;
