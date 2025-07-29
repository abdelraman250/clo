import { createContext,useState } from "react"

export const Shopping = createContext();


export default function ShoppingContext({ children }) {

      const [loading, setloading] = useState(false);
      const [data, setdata] = useState([]);
      const [category, setcategory] = useState([]);
      const [shopCart, setshopcart] = useState([...(localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [])]);

    let tempData = [...data];

    return (
      <Shopping.Provider
        value={{
          shopCart,
          setshopcart,
          category,
          setcategory,
          data,
          setdata,
          loading,
          setloading,
          tempData,
        }}
      >
        {children}
      </Shopping.Provider>
    );
}