import { useContext } from "react"
import { Shopping } from "../components/jsx/shopingcontext";
import "bootstrap/dist/css/bootstrap.min.css";

export default function Women() {
  const { data, shopCart, setshopcart } = useContext(Shopping);
  const womenclothes = data.filter((ele) => {
    return ele.category === "women's clothing";
  });
  function handleclick(product) {
    localStorage.setItem("items", JSON.stringify([...shopCart, product]));
    setshopcart(localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Products</h1>
      <div className="divcard" id="divcard">
        {womenclothes.map((product, index) => {
          return (
            <div className="p-3" key={index}>
              <img src={product.image} alt="bcbcb" />
              <h3>{product.category}</h3>
              <p>{product.price}$</p>
              <button
                onClick={() => {
                  handleclick(product);
                }}
              >
                add to cart
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}