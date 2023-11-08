import React from "react";

const ServicesSection = () => {
  return (
    <>
      {/* Services-2
			============================================= */}
      <section id="services-2" className="wide-30 services-section division">
        <div className="container">
          {/* SECTION TITLE */}
          <div className="row">
            <div
              className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
              data-wow-delay="0.2s"
            >
              {/* Title 	*/}
              <h3 className="h3-lg indigo-color">
                Custom SEO Services – Our Specialty
              </h3>
              {/* Text */}
              <p className="p-lg">
                Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                primis libero tempus, blandit posuere and ligula varius magna a
                porta elementum massa risus
              </p>
            </div>
          </div>{" "}
          {/* END SECTION TITLE */}
          {/* SERVICE BOXES */}
          <div className="row">
            {/* SERVICE BOX #1 */}
            <div className="col-sm-6 col-lg-3">
              <a href="service-details.html">
                <div className="sbox-2 wow fadeInUp" data-wow-delay="0.4s">
                  {/* Icon  */}
                  <img
                    className="img-85"
                    src="https://jthemes.net/themes/html/metreex/files/images/icons/placeholder-1.png"
                    alt="feature-icon"
                  />
                  {/* Title */}
                  <h5 className="h5-md indigo-color">Local SEO</h5>
                  {/* Text */}
                  <p className="p-sm grey-color">
                    Porta semper lacus cursus feugiat and primis ultrice
                  </p>
                </div>
              </a>
            </div>
            {/* SERVICE BOX #2 */}
            <div className="col-sm-6 col-lg-3">
              <a href="service-details.html">
                <div className="sbox-2 wow fadeInUp" data-wow-delay="0.6s">
                  {/* Icon  */}
                  <img
                    className="img-85"
                    src="https://jthemes.net/themes/html/metreex/files/images/icons/online-shop-1.png"
                    alt="feature-icon"
                  />
                  {/* Title */}
                  <h5 className="h5-md indigo-color">E-Commerce SEO</h5>
                  {/* Text */}
                  <p className="p-sm grey-color">
                    Porta semper lacus cursus feugiat and primis ultrice
                  </p>
                </div>
              </a>
            </div>
            {/* SERVICE BOX #3 */}
            <div className="col-sm-6 col-lg-3">
              <a href="service-details.html">
                <div className="sbox-2 wow fadeInUp" data-wow-delay="0.8s">
                  {/* Icon  */}
                  <img
                    className="img-85"
                    src="https://jthemes.net/themes/html/metreex/files/images/icons/pie-chart.png"
                    alt="feature-icon"
                  />
                  {/* Title */}
                  <h5 className="h5-md indigo-color">Advanced Analytics</h5>
                  {/* Text */}
                  <p className="p-sm grey-color">
                    Porta semper lacus cursus feugiat and primis ultrice
                  </p>
                </div>
              </a>
            </div>
            {/* SERVICE BOX #4 */}
            <div className="col-sm-6 col-lg-3">
              <a href="service-details.html">
                <div className="sbox-2 wow fadeInUp" data-wow-delay="1s">
                  {/* Icon  */}
                  <img
                    className="img-85"
                    src="https://jthemes.net/themes/html/metreex/files/images/icons/pay-per-click-2.png"
                    alt="feature-icon"
                  />
                  {/* Title */}
                  <h5 className="h5-md indigo-color">PPC Management</h5>
                  {/* Text */}
                  <p className="p-sm grey-color">
                    Porta semper lacus cursus feugiat and primis ultrice
                  </p>
                </div>
              </a>
            </div>
          </div>{" "}
          {/* END SERVICE BOXES */}
        </div>{" "}
        {/* End container */}
      </section>{" "}
      {/* END SERVICES-2 */}
    </>
  );
};

export default ServicesSection;
