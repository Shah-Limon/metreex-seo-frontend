import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate, useParams } from "react-router-dom";
import auth from "../../firebase.init";

const HeroSection = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const handleAddWebsite = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const website = event.target.website.value;
    const userMail = event.target.userMail.value;
    const auditStatus = event.target.auditStatus.value;

    const websiteCheck = {
      email,
      website,
      userMail,
      auditStatus,
    };

    const url = `http://localhost:5000/add-website`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(websiteCheck),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/submitted-website");
      });
  };
  return (
    <>
      {/* HERO-2
			============================================= */}
      <section id="hero-2" className="bg-fixed hero-section division">
        <div className="container">
          <div className="row">
            <div className="col-xl-10 offset-xl-1">
              <div className="hero-txt text-center">
                <h3 className="indigo-color">
                  Take advantage of SEO to receive more customers &amp; profit
                </h3>

                <p className="grey-color">
                  Egestas magna egestas magna ipsum vitae purus ipsum primis in
                  cubilia laoreet augue luctus magna vulputate molestie bibendum
                  quis luctus an dolor
                </p>

                <div className="form-holder text-center">
                  <form name="seoForm" className="row seo-form" onSubmit={handleAddWebsite}>
                    <div id="input-email" className="col-lg-4">
                      <input
                        type="text"
                        name="email"
                        className="form-control email"
                        placeholder="Email Address*"
                      />
                    </div>

                    <div id="input-url" className="col-lg-5">
                      <input
                        type="url"
                        name="website"
                        className="form-control url"
                        placeholder="Your Website*"
                        defaultValue="http://www."
                      />
                      <input
                          hidden
                          type="email"
                          class="form-control"
                          name="userMail"
                          value={user?.email}
                        />
                         <input required type="text" hidden name="auditStatus" value="Incomplete"/>
                    </div>

                    <div className="col-lg-3 form-btn">
                      <button
                        type="submit"
                        className="btn btn-primary black-hover submit"
                      >
                        Let's Started
                      </button>
                    </div>

                    <div className="col-lg-12 seo-form-msg">
                      <span className="loading" />
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-10 offset-lg-1">
              <div className="hero-2-img text-center">
                <img
                  className="img-fluid"
                  src="https://jthemes.net/themes/html/metreex/files/images/hero-2-img.png"
                  alt="herimage"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="bg-fixed white-overlay-wave" />
      </section>
    </>
  );
};

export default HeroSection;
