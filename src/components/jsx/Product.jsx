import { useContext } from "react";
import { Shopping } from "./shopingcontext";



export default function Product() {
  const { data, category, shopCart, setshopcart } = useContext(Shopping);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  function handleclick(product) {
    localStorage.setItem("items", JSON.stringify([...shopCart, product]));
    setshopcart(localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : []);
  }


  function creatingElements(product,index) {
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
          }
  if (category.length === 0) {
    return data.map((product, index) => {
      return creatingElements(product, index);
    });
  } else {
    return category.map((product) => {
      return creatingElements(product);
    });
  }
}
