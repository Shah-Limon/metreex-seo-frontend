import React from "react";

const FeatureSection = () => {
  return (
    <>
      {/* CONTENT-5
			============================================= */}
      <section
        id="content-5"
        className="bg-lightgrey wide-60 content-section division"
      >
        <div className="container">
          <div className="row d-flex align-items-center">
            {/* TEXT BLOCK */}
            <div className="col-md-7 col-lg-6">
              <div
                className="txt-block pc-25 mb-40 wow fadeInLeft"
                data-wow-delay="0.4s"
              >
                {/* Title */}
                <h4 className="h4-xl indigo-color">
                  Get more sales with SEO, PPC, and Email Marketing
                </h4>
                {/* Text */}
                <div className="cbox-1">
                  <i className="fas fa-check grey-color" />
                  <div className="cbox-1-txt">
                    <p>
                      Semper lacus cursus porta, feugiat primis ligula risus
                      auctor and rhoncus in ultrice ligula purus ipsum primis in
                      cubilia
                    </p>
                  </div>
                </div>
                {/* Text */}
                <div className="cbox-1">
                  <i className="fas fa-check grey-color" />
                  <div className="cbox-1-txt">
                    <p>
                      Integer congue magna at pretium purus pretium ligula
                      rutrum and luctus risus eros dolor auctor ipsum blandit
                      purus vehicula magna and luctus tempor quisque turpis
                      magna ligula
                    </p>
                  </div>
                </div>
                {/* Text */}
                <div className="cbox-1">
                  <i className="fas fa-check grey-color" />
                  <div className="cbox-1-txt">
                    <p>
                      An enim nullam tempor sapien gravida donec enim blandit
                      ipsum at porta justo integer velna vitae auctor integer
                      congue
                    </p>
                  </div>
                </div>
                {/* SMALL STATISTIC */}
                <div className="small-statistic">
                  <div className="row">
                    {/* STATISTIC BLOCK #1 */}
                    <div className="col-sm-6">
                      <div className="statistic-block">
                        <h5 className="statistic-number primary-color">
                          4,<span className="count-element">379</span>
                        </h5>
                        <p className="indigo-color">Websites Improved</p>
                        <p className="p-sm">
                          An enim nullam tempor sapien gravida donec blandit
                          ipsum
                        </p>
                      </div>
                    </div>
                    {/* STATISTIC BLOCK #2 */}
                    <div className="col-sm-6">
                      <div className="statistic-block">
                        <h5 className="statistic-number primary-color">
                          <span className="count-element">99</span>%
                        </h5>
                        <p className="indigo-color">Customer Satisfaction</p>
                        <p className="p-sm">
                          An enim nullam tempor sapien gravida donec blandit
                          ipsum
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* END SMALL STATISTIC */}
              </div>
            </div>{" "}
            {/* END TEXT BLOCK */}
            {/* IMAGE BLOCK */}
            <div className="col-md-5 col-lg-6">
              <div
                className="content-5-img mb-40 wow fadeInRight"
                data-wow-delay="0.6s"
              >
                <img
                  className="img-fluid"
                  src="https://jthemes.net/themes/html/metreex/files/images/image-07.png"
                  alt="content-image"
                />
              </div>
            </div>
          </div>{" "}
          {/* End row */}
        </div>{" "}
        {/* End container */}
      </section>{" "}
      {/* END CONTENT-5 */}
    </>
  );
};

export default FeatureSection;
