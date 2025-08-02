import { createContext,useEffect,useState } from "react"

export const Shopping = createContext();

export default function ShoppingContext({ children }) {

  const [loading, setloading] = useState(false);
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [isauth, setisauth] = useState(false);
  const [data, setdata] = useState([]);
  const [category, setcategory] = useState([]);
  const [shopCart, setshopcart] = useState([...(localStorage.getItem("items") ? JSON.parse(localStorage.getItem("items")) : [])]);

    let tempData = [...data];

  useEffect(() => {
    const token = localStorage.getItem("token");
    const user = localStorage.getItem("user");
    if (token && user) {
      setisauth(true);
    }
  },[])

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
          isauth,
          setemail,
          setpassword,
          email,
          password,
          setisauth
        }}
      >
        {children}
      </Shopping.Provider>
    );
}
