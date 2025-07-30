import { useContext } from "react";
import { Shopping } from "./shopingcontext";
import "../css/products.css"
import productscreating from "./function";

export default function Products() {
  const { loading, data, setcategory,shopCart,setshopcart,category } = useContext(Shopping);

  function filtering(ele) {
    const filteredData = data.filter((element) => {
      return element.category === `${ele}`;
    });
    return filteredData;
  }

  if (loading) {
    return <p>loading.................</p>;
  }
  const listOfCategories = ["Men's clothing", "Women's clothing", "Jewelery", "Electronics"];
  return (
    <div className="parent">
      <div>
        <ul>
          <li
            className=""
            onClick={() => {
              setcategory(data);
            }}
          >
            All
          </li>
          {listOfCategories.map((list, index) => {
            return (
              <li
                className=""
                key={index}
                onClick={(e) => {
                  setcategory(filtering(e.currentTarget.textContent.toLocaleLowerCase()));
                }}
              >
                {list}
              </li>
            );
          })}
        </ul>
      </div>
      {category.length === 0? productscreating(data,setshopcart,shopCart):productscreating(category,setshopcart,shopCart)}
    </div>
  );
}
