import { useContext } from "react";
import { Shopping } from "./shopingcontext";
import { shopingCartCreation } from "./function";

export default function ShopCart() {
  const { shopCart,setshopcart } = useContext(Shopping);


  if (shopCart.length === 0) {
    return (
      <div>
        <h1 style={{ textAlign: "center" }}>shoping cart {shopCart.length} </h1>
        <div className="divcard" id="divcard">
          <p style={{ color: "gray" }}>your shopping cart is empty</p>
        </div>
      </div>
    );
  }
  return shopingCartCreation(shopCart, setshopcart);
}
