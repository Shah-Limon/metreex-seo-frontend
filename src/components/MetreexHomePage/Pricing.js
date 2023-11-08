import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const Pricing = () => {
  const [packages, setPackages] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/packages`)
      .then((res) => res.json())
      .then((info) => setPackages(info));
  }, []);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/package-titles/`)
      .then((res) => res.json())
      .then((info) => {
        setTitle(info);
        console.log("Title Data:", info); // Add this line for debugging
      })
      .catch((error) => console.error("Error fetching title:", error));
  }, []);

  return (
    <>
      <section id="pricing-2" className=" wide-60 pricing-section division">
        <div className="container">
          <div className="row">
            <div
              className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
              data-wow-delay="0.2s"
            >
              <h3 className="h3-lg indigo-color">
                {title.length > 0 ? title[0].titleOne : "Loading..."}
              </h3>

              <p className="p-lg">
                {title.length > 0 ? title[0].description : "Loading..."}
              </p>
            </div>
          </div>
          <div className="pricing-table-wrapper">
            <ul className="pricing-table">
              {packages.map((e, index) => (
                <li
                  key={index}
                  className="pricing-table__item pricing-table__item--popular"
                  data-popular="Populars"
                >
                  <img src={e.img} alt="" className="pricing-table__img" />
                  <h3 className="pricing-table__title">{e.packageName}</h3>
                  <p className="pricing-table__description">
                    <span className="pricing-table__price">{e.price}$</span>
                  </p>
                  <ul className="pricing-table__products">
                    <li className="pricing-table__product">
                      <a href="">Included item title</a>
                    </li>
                    <li className="pricing-table__product">
                      <a href="">Included item title</a>
                    </li>
                    <li className="pricing-table__product">
                      <a href="">Included item title</a>
                    </li>
                    <li className="pricing-table__product">
                      <a href="">Included item title</a>
                    </li>
                  </ul>
                  <Link
                    class="btn btn-md btn-primary tra-black-hover"
                    to={`/package/${e._id}`}
                  >
                    <span>Buy Now</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* PRICING NOTICE TEXT */}
          <div className="row">
            <div className="col-lg-10 col-xl-8 offset-lg-1 offset-xl-2">
              <div className="pricing-notice text-center mb-40">
                <p className="grey-color">
                  No commitment required – you can cancel anytime.
                </p>
              </div>
            </div>
          </div>
        </div>{" "}
        {/* End container */}
      </section>
    </>
  );
};

export default Pricing;
