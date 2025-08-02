
import { useContext } from "react";
import "../components/css/login.css";
import { Shopping } from "../components/jsx/shopingcontext";
import { useNavigate } from "react-router";

export default function Login() {
    const { setemail, setpassword, email, password,setisauth } = useContext(Shopping);
    const navigate = useNavigate();

    async function handleLoginClick(e) {
      e.preventDefault();
      try {
        const response = await fetch("http://localhost:5000/api/login", {
          method: "post",
          headers: { "content-type": "application/json" },
          body: JSON.stringify({ email, password }),
        });
        const data = await response.json();
        if (response.ok) {
            localStorage.setItem("token", JSON.stringify(data.token));
            localStorage.setItem("user", JSON.stringify(data.user));
            setisauth(true);
            setemail("");
            setpassword("")
            navigate("/");
        }
      } catch (error) {
        console.log(error);
      }
    }
    return (
        <div className="containner login mt-5 mx-auto">
            <h1>BeDo Style</h1>
            <div className="row">
                <div className="col-6 p-0">
                    <form onSubmit={(e)=>handleLoginClick(e)} className="login h-100 d-flex flex-column justify-content-around align-items-center">
                        <p>Login</p>
                        <input value={email} onChange={(e)=>{setemail(e.currentTarget.value)}} className="w-75 border-end-0 border-bottom-0 ps-3" type="email" placeholder="Your Email" id="email" required></input>
                        <input value={password} onChange={(e)=>{setpassword(e.currentTarget.value)}} className="w-75 ps-3" type="password" placeholder="password" id="password" required></input>
                        <div className="d-flex">
                            <input className="m-0 me-2" type="checkbox" name="remember-me" id="remember-me"></input>
                        </div>
                        <button className="button" type="submit">Log in</button>
                        <a href="">Forget password?</a>
                    </form>
                </div>
                <div className="col-6">
                    <img src="../../images/login.png" alt=""></img>
                </div>
                <div className=" diff d-flex">
                    <p className="fs-6 fw-light">didn,t have account , </p>
                    <a className=" fw-normal" href="">create one</a>
                </div>
            </div>
        </div>
    )
}