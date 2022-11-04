import React,{useEffect} from "react";
import { useSelector,useDispatch } from "react-redux";
import {fetchProducts, selectError,selectStatus} from "../redux/productsSlice/ProductsSlice";
import Error from "../components/error/Error"
import Loading from "../components/loading/Loading";
import Navbar from "../components/navbar/Navbar";
const Shop = () => {
  const datas = useSelector((state)=>state.products.allProducts)
console.log("datas",datas);
const status = useSelector(selectStatus)
const error = useSelector(selectError)
const dispatch = useDispatch();
  useEffect(()=>{
    if(status === "idle"){
      dispatch(fetchProducts())
    }
   
  },[dispatch,status])
  if (status === "failed") {
    return <Error message={error} />;
  }
  return (
    <section className="allProducts">
      <Navbar/>
      {status === "loading" && <Loading/>}
      {
        datas.map((data,id)=>(
          <div className="productItems" key={id}>
            <h3>{data.title}</h3>
            <h4>{data.price}</h4>
            <img src={data.cover[0]} alt="" />
          </div>
        ))
      }
    </section>
  )
};

export default Shop;
