import { useContext } from "react"
import { Shopping } from "../components/jsx/shopingcontext";
import "bootstrap/dist/css/bootstrap.min.css";
import productscreating from "../components/jsx/function";

export default function Men() {

  const { data, shopCart, setshopcart } = useContext(Shopping);
  const filteringData = data.filter((ele) => {
    return ele.category === "men's clothing";
  });

  return productscreating(filteringData,setshopcart,shopCart)
}