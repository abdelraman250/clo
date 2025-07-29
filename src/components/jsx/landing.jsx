import "../css/landing.css"
export default function Landing() {
    return (
        <div className="row pt-5 justify-content-between align-items-center landing text-light">
        <div className="col-sm-5 text-center mx-auto fw-bolder">
          <h1>SUMMMER SALE</h1>
          <p className="fs-3">UP TO 50% OFF</p>
          <button className="btn">Shop now</button>
        </div>
        <div className="col-sm-6">
          <img src="../../images/main.png" alt=""></img>
        </div>
      </div>
    )
}