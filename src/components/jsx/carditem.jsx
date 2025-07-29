import { useContext } from "react";
import { Shopping } from "./shopingcontext";

export default function CardItem() {
  const { shopCart, setshopcart } = useContext(Shopping);

  function handleDeleteButton(item) {
    const filteredarray = JSON.parse(localStorage.getItem("items")).filter(
      (element) => {
        return element.id !== item;
      }
    );
    localStorage.setItem("items", JSON.stringify(filteredarray));
    setshopcart(filteredarray);
  }

  function creatingElements(item) {
    return (
      <div key={item.id}>
        <img src={item.image} alt="bcbcb" />
        <h3>{item.category}</h3>
        <p>{item.price}$</p>
        <button
          onClick={() => {
            handleDeleteButton(item.id);
          }}
        >
          delete
        </button>
      </div>
    );
  }

  return shopCart.map((item) => {
    return creatingElements(item);
  });
}
