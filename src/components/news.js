/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import image01 from "../assets/images/vr.webp";

const News = () => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mb-5 shadow-sm">
              <img src={image01} className="img-fluid" />
              <div className="card-body">
                <div className="card-title">
                  <h2>It's Not Too Late to Save the Metaverse</h2>
                </div>
                <div className="card-text">
                  <p>
                    There’s an opportunity to build joyful communities in VR.
                    Just protect individual rights—and keep out the crypto.
                  </p>
                </div>
                <a href="#" className="btn btn-outline-primary rounded-0 float-end">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mb-5 shadow-sm">
              <img src={image01} class="img-fluid" />
              <div className="card-body">
                <div className="card-title">
                  <h2>
                    What, Exactly, Is the Metaverse Standards Forum Creating?
                  </h2>
                </div>
                <div className="card-text">
                  <p>
                    No one will agree on what the metaverse is. But that's not
                    stopping a coalition of big names in tech from designing the
                  </p>
                </div>
                <a href="#" className="btn btn-outline-primary rounded-0 float-end">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mb-5 shadow-sm">
              <img src={image01} class="img-fluid" />
              <div className="card-body">
                <div className="card-title">
                  <h2>The Metaverse is Still Messy</h2>
                </div>
                <div className="card-text">
                  <p>
                    This week, we talk with author and venture capitalist
                    Matthew Ball about the metaverse and whether this next
                  </p>
                </div>
                <a href="#" className="btn btn-outline-primary rounded-0 float-end">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mb-5 shadow-sm">
              <img src={image01} class="img-fluid" />
              <div className="card-body">
                <div className="card-title">
                  <h2>
                    Meta Hits the Brakes on Portal, AR Glasses, and Other
                    Hardware
                  </h2>
                </div>
                <div className="card-text">
                  <p>
                    Plus: Metalenz’s camera tech makes its way into phones,
                    Microsoft launches the Xbox TV app, and the OnePlus 10 Pro
                  </p>
                </div>
                <a href="#" className="btn btn-outline-primary rounded-0 float-end">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mb-5 shadow-sm">
              <img src={image01} class="img-fluid" />
              <div className="card-body">
                <div className="card-title">
                  <h2>The US Military Is Building Its Own Metaverse</h2>
                </div>
                <div className="card-text">
                  <p>
                    Defense tech companies have latched on to the metaverse
                    hype—but what they’re building will be a far cry from Meta’s
                  </p>
                </div>
                <a href="#" className="btn btn-outline-primary rounded-0 float-end">
                  Read More
                </a>
              </div>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12">
            <div className="card mb-5 shadow-sm">
              <img src={image01} class="img-fluid" />
              <div className="card-body">
                <div className="card-title">
                  <h2>This VR App Has Legs</h2>
                </div>
                <div className="card-text">
                  <p>
                    Spatial adds support for full-body virtual avatars, giving
                    realism in VR a step up.
                  </p>
                </div>
                <a href="#" className="btn btn-outline-primary rounded-0 float-end">
                  Read More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};
export default News;
