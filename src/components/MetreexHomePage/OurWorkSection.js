import React from "react";

const OurWorkSection = () => {
  return (
    <>
      
      <section
            id="content-8"
            className="bg-lightgrey wide-60 content-section division"
          >
            <div className="container">
              <div className="row d-flex align-items-center">
                {/* TEXT BLOCK */}
                <div className="col-md-6 col-lg-5">
                  <div
                    className="txt-block pc-25 mb-40 wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    {/* Title */}
                    <h4 className="h4-xl indigo-color">
                      We're working towards your business goals
                    </h4>
                    {/* Text */}
                    <p>
                      An enim nullam tempor sapien gravida purus pretium donec
                      undo ipsum porta justo integer and velna vitae auctor
                      integera congue magna at purus pretium ligula rutrum
                      luctus ultrice sapien gravida donec
                    </p>
                    {/* List */}
                    <ul className="ico-list">
                      <li>
                        <i className="fas fa-check primary-color" />{" "}
                        <span>Digital Competitive Analysis</span>
                      </li>
                      <li>
                        <i className="fas fa-check primary-color" />{" "}
                        <span>Search Engine Optimization (SEO)</span>
                      </li>
                      <li>
                        <i className="fas fa-check primary-color" />{" "}
                        <span>Strategy and Analytics Consulting</span>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
                {/* IMAGE BLOCK */}
                <div className="col-md-6 col-lg-7">
                  <div
                    className="img-block pl-25 mb-40 wow fadeInRight"
                    data-wow-delay="0.6s"
                  >
                    <img
                      className="img-fluid"
                      src="https://jthemes.net/themes/html/metreex/files/images/image-10.png"
                      alt="content-image"
                    />
                  </div>
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>
    </>
  );
};

export default OurWorkSection;
