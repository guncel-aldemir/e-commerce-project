import React from "react";
import { useParams } from "react-router-dom";

const ProductItems = () => {
    const param = useParams()
  return (
    <section className="product">
        <div>ProductItems</div>
    </section>
  );
};

export default ProductItems;
