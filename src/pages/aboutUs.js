/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import NavBar from "../components/Header/navBar";
import Footer from "../components/common/footer";
import image01 from "../assets/images/metaverse01.jpg";

const AboutUsPage = () => {
  return (
    <React.Fragment>
      <NavBar />
      <section className="steps container-aboutus">
        <div className="row">
          <div className="col-md-10 col-11 mx-auto">
            <div className="mt-2 mb-5 text-center">
              <h1 className="service_heading">ABOUT US</h1>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-12 col-sm-6 d-md-flex justify-content-md-ceneter">
            <img
              src={image01}
              alt="About Us"
              className="img-fluid pb-4 steps__section-thumbnail"
              width="553"
              height="746"
              loading="lazy"
            />
          </div>
          <div className="col-12 col-sm-6 align-self-center justify-content-md-ceneter">
            <div className="steps__content-width">
              <h1 className="h2 mb-4">Metazimba Studio</h1>
              <p className="mb-4">
                Metazimba builds technologies that help people connect, find
                communities and grow businesses. We're moving beyond 2D screens
                and into immersive experiences like virtual and augmented
                reality, helping create the next evolution of social technology.
              </p>
              <a href="#">Read More</a>
            </div>
          </div>
        </div>
      </section>
      <Footer />
    </React.Fragment>
  );
};

export default AboutUsPage;
