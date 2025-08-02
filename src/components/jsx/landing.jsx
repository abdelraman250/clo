import { useEffect, useState } from "react";
import "../css/landing.css"
export default function Landing() {
  const [indexofimage,setindexofimage] = useState(0)
  const array = ["main.png", "big-man.png", "black.png", "blazer.jpg", "blazer2.png", "boy.png",
    "jeans.png", "man.png", "red.png"];

  useEffect(() => {
    array.forEach((fileName) => {
      const img = new Image();
      img.src = `../../images/${fileName}`
    })
  },[])
  useEffect(() => {
    const timer = setTimeout(() => {
    setindexofimage(Math.floor(Math.random() * array.length));
    return ()=>clearTimeout(timer)
  }, 5000)
    },[indexofimage])

  const imahepath = `../../images/${array[indexofimage]}`;


    return (
        <div className="row pt-5 justify-content-between align-items-center landing text-light">
        <div className="col-sm-5 text-center mx-auto fw-bolder">
          <h1>SUMMMER SALE</h1>
          <p className="fs-3">UP TO 50% OFF</p>
          <button className="btn-dark btn rounded-5">Shop now</button>
        </div>
        <div className="col-sm-6">
          <img src={imahepath} alt=""></img>
        </div>
      </div>
    )
}