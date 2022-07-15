import React from "react";
import Footer from "../components/common/footer";
import Carousel from "../components/carousel/carousel";
import TeamMembers from "../components/teamMembers";
import HomeNavBar from "../components/Header/homeNavBar";
import News from "../components/news";
import "./css/main.css";

const HomePage = () => {
  return (
    <React.Fragment>
      {/* start welcome section */}
      <section className="welcome_section">
        <div className="welcome_main">
          <div className="container">
            <div className="main_nav">
              <HomeNavBar />
            </div>
            <div className="main_divider"></div>
          </div>

          <div className="welcome_txt">
            <div className="wlcm_main_text">
              <div>METAZIMBA STUDIO</div>
            </div>
            <div className="wlcm_secondry_text">Live in the Future</div>
          </div>

          <div className="main_search container">
            <div className="row">
              <div className="col-md-2"></div>
              <div className="col-md-8">
                <div className="input-group searchfiled mt-5">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="I am interested in..."
                  />
                  <button
                    className="btn searchButton px-4"
                    type="button"
                    id="button-addon2"
                  >
                    SEARCH
                  </button>
                </div>
              </div>
              <div className="col-md-2"></div>
            </div>
          </div>

          <div className="mouse_scroll">
            <div>
              <span className="m_scroll_arrows unu"></span>
              <span className="m_scroll_arrows doi"></span>
              <span className="m_scroll_arrows trei"></span>
            </div>
          </div>
        </div>
      </section>
      {/* end welcome section */}

      {/* start carousel section */}
      <section className="carousel_main py-5">
        <div className="container">
          <h2 className="pt-4">We are providing..</h2>
          <h6 className="pb-4">
            The metaverse has also been described as a place where users can
            connect, interact, and transfer themselves and their belongings
            across multiple digital locations.
          </h6>
          <Carousel />
        </div>
      </section>
      {/* end carousel section */}

      {/* start best gaming section */}
      <section className="hro_main py-5">
        <div className="container">
          <h2 className="pt-4">Best games for you..</h2>
          <h6 className="pb-4">let’s get down to the best Metaverse games</h6>
          <div className="row">
            <div className="col-md-4">
              <div className="card_wrap">
                <div className="card_img game01_img_top">
                  <div className="img_overlay"></div>
                </div>
                <div className="overlay_heading">
                  <div>Horizon Worlds</div>
                </div>
                <div className="followers_count">
                  <div className="followers_count_number">4512</div>
                  <div className="followers_count_title">Followers</div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card_wrap">
                <div className="card_img game02_img_top">
                  <div className="img_overlay"></div>
                </div>
                <div className="overlay_heading">VRChat</div>
                <div className="followers_count">
                  <div className="followers_count_number">9512</div>
                  <div className="followers_count_title">Followers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row py-4">
            <div className="col-md-6">
              <div className="card_wrap">
                <div className="card_img game03_img_top">
                  <div className="img_overlay"></div>
                </div>
                <div className="overlay_heading">Rec Room</div>
                <div className="followers_count">
                  <div className="followers_count_number">8515</div>
                  <div className="followers_count_title">Followers</div>
                </div>
              </div>
            </div>
            <div className="col-md-6">
              <div className="card_wrap">
                <div className="card_img game04_img_top">
                  <div className="img_overlay"></div>
                </div>
                <div className="overlay_heading">Fortnite</div>
                <div className="followers_count">
                  <div className="followers_count_number">2845</div>
                  <div className="followers_count_title">Followers</div>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-md-4">
              <div className="card_wrap">
                <div className="card_img game05_img_top">
                  <div className="img_overlay"></div>
                </div>
                <div className="overlay_heading">Roblox</div>
                <div className="followers_count">
                  <div className="followers_count_number">7541</div>
                  <div className="followers_count_title">Followers</div>
                </div>
              </div>
            </div>
            <div className="col-md-8">
              <div className="card_wrap">
                <div className="card_img game06_img_top">
                  <div className="img_overlay"></div>
                </div>
                <div className="overlay_heading">Sandbox</div>
                <div className="followers_count">
                  <div className="followers_count_number">2996</div>
                  <div className="followers_count_title">Followers</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* end best gaming section */}

      {/* start news section */}
      <section className="news_main">
        <div className="container">
          <h2 className="pt-4">Latest News</h2>
          <h6 className="pb-4">
            Lastest news about metaverse
          </h6>
          <News />
        </div>
      </section>
      {/* end news section */}

      {/* start team member section */}
      <section className="teammember_main">
        <div className="container">
          <h2 className="pt-4">Experienced & Professional Team</h2>
          <h6 className="pb-4">
            Main employees who are accountable to the company
          </h6>
          <TeamMembers />
        </div>
      </section>
      {/* end team member section */}

      {/* start footer section */}
      <section className="footer_main">
        <Footer />
      </section>
      {/* end footer section */}
    </React.Fragment>
  );
};

export default HomePage;
