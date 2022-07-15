import React from "react";
import NavBar from "../components/Header/navBar";
import Footer from "../components/common/footer";
import image01 from "../assets/images/vr.webp";
import image02 from "../assets/images/gaming.webp";
import image03 from "../assets/images/marketing.jpg";
import image04 from "../assets/images/media&news.jpg";

const ServicesPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <div className="service py-5">
        <div className="container-fluid">
          <div className="row">
            <div className="col-md-10 col-11 mx-auto">
              <div className="mt-2 mb-5 text-center">
                <h1 className="service_heading">OUR SERVICES</h1>
              </div>
              <div className="row ">
                {/* left side data */}
                <div className="col-md-6 mt-md-2 m-0">
                  <span className="badge-info badge rounded-pill px-3 py-1 my-2 font-weight-light">
                    What We Do
                  </span>
                  <h4>
                    creating projects as limitless as the human imagination
                  </h4>
                  <h6 className="font-weight-light subtitle">
                    The metaverse companies are creating projects as limitless
                    as the human imagination. But most of their work fits into
                    the seven layers of the metaverse.
                  </h6>
                  {/* one more grid sys for services */}
                  <div className="row mt-md-5">
                    <div className="col-md-6 mt-3">
                      <h6 className="font-weight-medium">Metazimba Gaming</h6>
                      <p>
                        Video games offer the closest metaverse experience
                        currently. This point isn’t just because they are 3D,
                        though.
                      </p>
                    </div>
                    <div className="col-md-6 mt-3">
                      <h6 className="font-weight-medium">Metazimba Media & News</h6>
                      <p>
                        The report aims to offer the readers a holistic
                        understanding of the relevant features of the industry.
                      </p>
                    </div>
                    <div className="col-md-6 mt-3">
                      <h6 className="font-weight-medium">Metazimba Marketing</h6>
                      <p>
                        Metaverse platform for the entertainment industry
                        facilitates development of a platform filled with
                        content created by users.
                      </p>
                    </div>
                    <div className="col-md-6 mt-3">
                      <h6 className="font-weight-medium">Metazimba VR</h6>
                      <p>
                        Rapid growth and increase in number of virtual events
                        and digital innovations in the metaverse, increasing
                        adoption of metaverse
                      </p>
                    </div>
                    <div className="col-lg-12 my-4">
                      <a className="btn btn-sm btn-info" href="#aa">
                        {" "}
                        check More{" "}
                      </a>
                    </div>
                  </div>
                </div>
                {/* <!-- right side data --> */}
                <div className="col-md-6 mt-md-5 m-0">
                  <div className="row wrap-service">
                    {/* <!-- left side images --> */}
                    <div className="col-md-6">
                      <div className="row">
                        <div className="col-md-12 img-hover mb-4">
                          <img
                            alt="ux"
                            className="rounded img-shadow img-fluid"
                            src={image01}
                          />
                        </div>
                        <div className="col-md-12 img-hover mb-4">
                          <img
                            alt="ux"
                            className="rounded img-shadow img-fluid"
                            src={image02}
                          />
                        </div>
                      </div>
                    </div>
                    {/* right side images */}
                    <div className="col-md-6 uneven-box">
                      <div className="row">
                        <div className="col-md-12 img-hover mb-4">
                          <img
                            alt="ux"
                            className="rounded img-shadow img-fluid"
                            src={image03}
                          />
                        </div>
                        <div className="col-md-12 img-hover mb-4">
                          <img
                            alt="ux"
                            className="rounded img-shadow img-fluid"
                            src={image04}
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </React.Fragment>
  );
};

export default ServicesPage;
