import { useContext } from "react";
import "../css/header.css";
import { Shopping } from "./shopingcontext";

import { Link } from "react-router-dom";

export default function Header() {
  const { tempData, setcategory } = useContext(Shopping);

  function filtering(ele) {
    const filteredData = tempData.filter((element) => {
      return element.category.match(ele) || element.description.match(ele);
    });
    return filteredData;
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container align-items-center">
        <div className="logo">
          <p>BeDo Style</p>
        </div>
        <button
          className="navbar-toggler collapsed"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="navbar-collapse collapse" id="navbarSupportedContent" style={{}}>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0 ms-auto m-0 p-0">
            <li className="nav-item">
              <Link className="nav-link px-3" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to='/men'>
                Men
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to='/women'>
                Women
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to='/electronics'>
                Electronics
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link px-3" to='/jewelery'>
                Jewelery
              </Link>
            </li>
          </ul>
        </div>
        <div className="justify-content-end collapse navbar-collapse">
          <input
            placeholder="jacket"
            type="search"
            onChange={(e) => {
              setcategory(filtering(e.currentTarget.value));
            }}
          />
          <Link to="/shopingcart">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-bag-heart-fill" viewBox="0 0 16 16">
              <path d="M11.5 4v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4zM8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1m0 6.993c1.664-1.711 5.825 1.283 0 5.132-5.825-3.85-1.664-6.843 0-5.132"></path>
            </svg>
          </Link>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person" viewBox="0 0 16 16">
            <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6m2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0m4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4m-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10s-3.516.68-4.168 1.332c-.678.678-.83 1.418-.832 1.664z"></path>
          </svg>
        </div>
      </div>
    </nav>
  );
}










    {/*<div className="header">
      <p>bedo style</p>
      <div>
        <input type="search" onChange={(e) => {setcategory(filtering(e.currentTarget.value));}}/>
      </div>
    </div>*/}
