/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NavBar from "../components/Header/navBar";
import Footer from "../components/common/footer";

const ContactUsPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <section className="container mt-5 mb-5">
        {/* Contact heading */}
        <div className="row">
          <div className="col-md-10 col-11 mx-auto">
            <div className="mt-2 mb-5 text-center">
              <h1 className="service_heading">CONTACT US</h1>
            </div>
          </div>
        </div>
        <div className="row">
          {/* Grid column */}
          <div class="col-sm-12 mb-4 col-md-5">
            {/* Form with header */}
            <div className="card border-primary rounded-0">
              <div className="card-header p-0">
                <div className="bg-primary text-white text-center py-2">
                  <h3>
                    <i className="fa fa-envelope"></i> Write to us:
                  </h3>
                  <p className="m-0">
                    We’ll write rarely, but only the best content.
                  </p>
                </div>
              </div>
              <div className="card-body p-3">
                <div className="form-group">
                  <label> Your name </label>
                  <div className="input-group">
                    <input
                      value=""
                      type="text"
                      name="data[name]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Your name"
                    ></input>
                  </div>
                </div>
                <div className="form-group">
                  <label>Your email</label>
                  <div class="input-group mb-2 mb-sm-0">
                    <input
                      type="email"
                      value=""
                      name="data[email]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Email"
                    ></input>
                  </div>
                </div>
                <div className="form-group">
                  <label>Subject</label>
                  <div class="input-group mb-2 mb-sm-0">
                    <input
                      type="text"
                      name="data[subject]"
                      className="form-control"
                      id="inlineFormInputGroupUsername"
                      placeholder="Subject"
                    ></input>
                  </div>
                </div>
                <div className="form-group">
                  <label>Message</label>
                  <div className="input-group mb-2 mb-sm-0">
                    <input
                      type="text"
                      className="form-control"
                      name="mesg"
                    ></input>
                  </div>
                </div>
                <div class="text-center">
                  <input
                    type="submit"
                    name="submit"
                    value="submit"
                    className="btn btn-primary btn-block rounded-0 py-2"
                  ></input>
                </div>
              </div>
            </div>
          </div>
          {/* Grid column */}

          {/* Grid column */}
          <div className="col-sm-12 col-md-7">
            {/* Google map */}
            <div class="mb-4">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2482.5990609440682!2d-0.15896908485020722!3d51.52057131756203!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48761ace9a2e67d7%3A0xd458de8d0fdc498e!2sBaker%20St%2C%20London%2C%20UK!5e0!3m2!1sen!2slk!4v1657745651624!5m2!1sen!2slk"
                width="100%"
                height="450"
                frameborder="0"
                style={{ border: 0 }}
                allowfullscreen=""
                aria-hidden="false"
                tabindex="0"
                title="map"
              ></iframe>
            </div>
            {/* Buttons */}
            <div className="row text-center">
              <div className="col-md-4">
                <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
                  <i className="fa fa-map-marker"></i>
                </a>
                <p> Baker St, London </p>
              </div>
              <div className="col-md-4">
                <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
                  <i className="fa fa-phone"></i>
                </a>
                <p>+91- 90000000</p>
              </div>
              <div className="col-md-4">
                <a className="bg-primary px-3 py-2 rounded text-white mb-2 d-inline-block">
                  <i className="fa fa-envelope"></i>
                </a>
                <p> metazimba@gmail.com</p>
              </div>
            </div>
          </div>
          <div className="col-sm-12 text-center mb-4">
            <a
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
              href="https://www.paypal.com/webapps/shoppingcart?flowlogging_id=f8876459b9ac2&mfid=1619175810225_f8876459b9ac2#/checkout/openButton"
            >
              {" "}
              Donate Metazimba Now <i class="fa fa-dollar"></i>
            </a>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default ContactUsPage;
