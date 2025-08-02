
import "../css/footer.css"

export default function Footer() {
    return (
        <footer className="mt-3 mb-0">
      <div className="container">
        <div className="frst row">
          <div className="company col-md-6 col-lg-3">
            <div className="d-flex align-items-baseline justify-content-start">
              <h2>company</h2>
              <div></div>
            </div>
            <a className="d-block text-light text-decoration-none p-2 text-capitalize" href="">about us</a>
            <a className="d-block text-light text-decoration-none p-2 text-capitalize" href="">contact us</a>
            <a className="d-block text-light text-decoration-none p-2 text-capitalize" href="">reservation</a>
            <a className="d-block text-light text-decoration-none p-2 text-capitalize" href="">previcy policy</a>
            <a className="d-block text-light text-decoration-none p-2 text-capitalize" href="">terms and conditions</a>
          </div>
          <div className="contact col-md-6 col-lg-3">
            <div className="d-flex align-items-baseline justify-content-start">
              <h2>contact</h2>
              <div></div>
            </div>
            <div className="d-flex text-light align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-geo-alt" viewBox="0 0 16 16">
                <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"></path>
                <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4m0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6"></path>
              </svg>
              <p className="mt-2">123 Street, New York, USA</p>
            </div>
            <div className="d-flex text-light align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-telephone" viewBox="0 0 16 16">
                <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.6 17.6 0 0 0 4.168 6.608 17.6 17.6 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.68.68 0 0 0-.58-.122l-2.19.547a1.75 1.75 0 0 1-1.657-.459L5.482 8.062a1.75 1.75 0 0 1-.46-1.657l.548-2.19a.68.68 0 0 0-.122-.58zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.68.68 0 0 0 .178.643l2.457 2.457a.68.68 0 0 0 .644.178l2.189-.547a1.75 1.75 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.6 18.6 0 0 1-7.01-4.42 18.6 18.6 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877z"></path>
              </svg>
              <p className="mt-2">+012 345 67890</p>
            </div>
            <div className="d-flex text-light align-items-center">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" className="bi bi-envelope" viewBox="0 0 16 16">
                <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2zm2-1a1 1 0 0 0-1 1v.217l7 4.2 7-4.2V4a1 1 0 0 0-1-1zm13 2.383-4.708 2.825L15 11.105zm-.034 6.876-5.64-3.471L8 9.583l-1.326-.795-5.64 3.47A1 1 0 0 0 2 13h12a1 1 0 0 0 .966-.741M1 11.105l4.708-2.897L1 5.383z"></path>
              </svg>
              <p className="mt-2">info@example.com</p>
            </div>
          </div>
          <div className="opening col-md-6 col-lg-3">
            <div className="d-flex align-items-baseline justify-content-start">
              <h2>opening</h2>
              <div></div>
            </div>
            <p className="text-light">Monday - Saturday</p>
            <p className="text-light">09AM - 09PM</p>
            <p className="text-light">Sunday</p>
            <p className="text-light">10AM - 08PM</p>
          </div>
          <div className="new-letter col-md-6 col-lg-3">
            <div className="d-flex align-items-baseline justify-content-start">
              <h2>news letters</h2>
              <div></div>
            </div>
            <div>
              <p className="text-light">Dolor amet sit justo amet elitr clita ipsum elitr</p>
              <input type="email" name="email" id="email" placeholder="Email"></input>
              <button className="btn">sign in</button>
            </div>
          </div>
        </div>
      </div>
    </footer>
    )
}