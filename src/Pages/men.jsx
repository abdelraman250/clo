import { useContext } from "react"
import { Shopping } from "../components/jsx/shopingcontext";
import productscreating from "../components/jsx/function";
import Header from "../components/jsx/header";
import Footer from "../components/jsx/footer.jsx";

export default function Men() {

  const { data, shopCart, setshopcart } = useContext(Shopping);
  const filteringData = data.filter((ele) => {
    return ele.category === "men's clothing";
  });

  return (
    <>
      <Header />
      {productscreating(filteringData, setshopcart, shopCart)}
      <Footer />
    </>
  );
}