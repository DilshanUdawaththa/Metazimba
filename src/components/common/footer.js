import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="container p-4">
          <div className="row">
            <div className="col-12 col-sm-3 col-md-12 col-lg-3 footer_social_col">
              <h1 className="footer_heading">Metazimba</h1>
              <div className="footer_social_links">
                <ul>
                  <li>
                    <i className="fab fa-facebook fa-lg"></i>
                  </li>
                  <li>
                    <i className="fab fa-twitter fa-lg"></i>
                  </li>
                  <li>
                    <i className="fab fa-instagram fa-lg"></i>
                  </li>
                  <li>
                    <i className="fab fa-google-plus fa-lg"></i>
                  </li>
                </ul>
              </div>
            </div>

            <div className="col-6 col-sm-3 col-md-4 col-lg-3">
              <h5 className="our_links">Overview</h5>
              <ul className="footer_links">
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about_us">About Us</Link>
                </li>
                <li>
                  <Link to="/contact_us">Contact Us</Link>
                </li>
                <li>
                  <Link to="/services">Services</Link>
                </li>
              </ul>
            </div>

            <div className="col-6 col-sm-3 col-md-4 col-lg-3">
              <h5 className="our_links">Services</h5>
              <ul className="footer_links">
                <li>
                  <span>Gaming</span>
                </li>
                <li>
                  <span>News & Media</span>
                </li>
                <li>
                  <span>Marketing</span>
                </li>
              </ul>
            </div>

            <div className="col-12 col-sm-3 col-md-4 col-lg-3 footer_search_col">
              <h5 className="our_links search_title">Advanced Search</h5>
              <div className="footer_search input-group">
                <input
                  type="text"
                  className="form-control"
                  placeholder="I am interested in.."
                />
                <button
                  className="btn footer_searchButton"
                  type="button"
                  id="button-addon2"
                >
                  SEARCH
                </button>
              </div>
            </div>
          </div>
          <hr></hr>
          <div className="footer-copyright">
            <p>
              © 2022 Copyright:
              <Link to="/" className="text-white">
                {" "}
                Metazimba.com
              </Link>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
