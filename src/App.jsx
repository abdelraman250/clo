
import { useEffect } from "react";
import Header from "./components/jsx/header.jsx";
import "./App.css";
import { Route, BrowserRouter as Router,Routes } from "react-router-dom";
import Home from "./Pages/Home.jsx"
import { Shopping } from "./components/jsx/shopingcontext.jsx";
import { useContext } from "react";
import Women from "./Pages/women.jsx";
import Jewelery from "./Pages/jewelery.jsx";
import Men from "./Pages/men.jsx";
import Electronics from "./Pages/electronics.jsx";
import ShopCart from "./components/jsx/shopCart.jsx";


function App() {
  const { setloading,setdata } = useContext(Shopping);

  useEffect(() => {
    try {
      setloading(true);
      fetch("https://fakestoreapi.com/products").then((response) => {
        if (!response.ok) {
          setloading(false);
          throw Error("there are no response ");
        }
        return response.json().then((alldata) => {
          setdata(alldata);
          setloading(false);
        });
      });
    } catch (error) {console.log(error.message)}
  }, []);

  return (
      <Router>
          <Header />
          <Routes>
            <Route path="/" element={Home()}></Route>
            <Route path="/men" element={Men()}></Route>
            <Route path="/women" element={Women()}></Route>
            <Route path="/electronics" element={Electronics()}></Route>
            <Route path="/jewelery" element={Jewelery()}></Route>
            <Route path="/shopingcart" element={ShopCart()}></Route>
          </Routes>
      </Router>
  );
}

export default App;
