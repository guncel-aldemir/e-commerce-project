import React, { useState } from "react";
import "./Product.scss"
import ProductItems from "./ProductItems";
import {topProducts} from "../../Data/Data"
import { Link } from "react-router-dom";
const Product = () => {
    const [datas,setDatas] = useState(topProducts)
    
  return (
    <section className="production">
        <div className="product">
            <div className="productInfo">
            <h2 className="title">Trending Products</h2>
            <h4 className="subtitle">
                Check the hottest clothes of the week.These rising stars are worth your attention.
               
            </h4>
            </div>
            
        </div>
        <div className="topProducts">
                {datas.map((data)=>(
                    <div className="topProduct" key={data.id}>
                        <h3>{data.title}</h3>
                        <img src={data.cover} alt=""/>
                        <div className="productItem">
                            <Link to={`/shop/${data.id}`}>
                            <ProductItems/>
                            </Link>
                        </div>  
                    </div>
                ))}
             
        </div>
    </section>
  )
};

export default Product;
