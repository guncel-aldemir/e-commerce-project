import React from "react";
import {BiSearch} from "react-icons/bi";
import "./Hero.scss"
const Hero = () => {
  return (
    <section className="heroSide">
        <div className="hero">
            <h1 className="heroH1">
                The Number of <span className="spanText">Many</span> integral textile companies
                <br/>
            Exhibits, <span className="spanText">Special</span> clothes here
            </h1>
            <p className="text">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit nemo dolorem delectus adipisci modi. Cupiditate.</p>
            <div className="search">
                <span className="searchSpan">
                    All Categories
                </span>
                <hr/>
                <input type="text" placeholder="Search Products..." />
                <button className="searchButton">
                    <BiSearch size={20}/>
                </button>
            </div>
            <p className="textTwo">Examples: Sweatshirts, Shirts, Shoes, Coats…</p>
        </div>
    </section>
  )
};

export default Hero;
