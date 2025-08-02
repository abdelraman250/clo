import { useContext } from "react"
import { Shopping } from "../components/jsx/shopingcontext";
import productscreating from "../components/jsx/function";
import Header from "../components/jsx/header";
import Footer from "../components/jsx/footer.jsx";

export default function Jewelery() {
  const { data, shopCart, setshopcart } = useContext(Shopping);
  const filteringData = data.filter((ele) => {
    return ele.category === "jewelery";
  });

  return (
    <>
      <Header />
      {productscreating(filteringData, setshopcart, shopCart)}
      <Footer />
    </>
  );
}
