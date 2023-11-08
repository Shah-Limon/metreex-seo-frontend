import React from "react";

const AboutSection = () => {
  return (
    <>
      {/* ABOUT-1
			============================================= */}
      <section id="about-1" className="wide-60 about-section division">
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* ABOUT IMAGE */}
            <div className="col-md-5 col-lg-6">
              <div
                className="img-block pr-25 mb-40 wow fadeInLeft"
                data-wow-delay="0.6s"
              >
                <img
                  className="img-fluid"
                  src="https://jthemes.net/themes/html/metreex/files/images/image-02.png"
                  alt="about-image"
                />
              </div>
            </div>
            {/* ABOUT TEXT */}
            <div className="col-md-7 col-lg-6">
              <div
                className="txt-block pc-25 mb-40 wow fadeInRight"
                data-wow-delay="0.4s"
              >
                {/* Title */}
                <h4 className="h4-xl indigo-color">
                  We're providing the best SEO services for your website
                </h4>
                {/* Text */}
                <p>
                  An enim nullam tempor sapien gravida donec pretium ipsum porta
                  justo integer at odio velna vitae auctor integera congue magna
                  at purus pretium ligula rutrum luctus ultrice a gravida lectus
                  suscipit gestas magna suscipit luctus undo
                </p>
                {/* QUOTE */}
                <div className="quote quote-primary">
                  {/* Quote Text */}
                  <p>
                    "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.
                    Aenean magna ligula eget dolor suscipit egestas at viverra
                    dolor iaculis luctus magna suscipit egestas "
                  </p>
                  {/* Quote Avatar */}
                  <div className="quote-avatar">
                    <img
                      src="https://jthemes.net/themes/html/metreex/files/images/quote-avatar.jpg"
                      alt="quote-avatar"
                    />
                  </div>
                  {/* Quote Author */}
                  <div className="quote-author">
                    <h5 className="h5-xs indigo-color">Sean Mcmarthy </h5>
                    <span className="grey-color">Founder of Metreex</span>
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* END ABOUT TEXT */}
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>{" "}
      {/* End ABOUT-1 */}
    </>
  );
};

export default AboutSection;
