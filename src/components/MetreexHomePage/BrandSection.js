import React, { useEffect, useState } from "react";
import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

const BrandSection = () => {
  const [brandImage, setBrandImage] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/brand-images/`)
      .then((res) => res.json())
      .then((info) => setBrandImage(info));
  }, []);
  const responsive = {
    0: { items: 3 },
    568: { items: 4 },
    1024: { items: 5 },
  };

  return (
    <div id="brands-2" className="brands-section division">
      <div className="container">
        <div className="row">
          <div className="col-md-12 text-center">
            <p className="p-lg grey-color">
              Used by startups, e-stores, web designers, and teams including:
            </p>

            <AliceCarousel
              mouseTracking
              animationType="fadeout"
              animationDuration={1500}
              disableButtonsControls
              autoPlay
              paddingLeft={50}
              paddingRight={50}
              infinite
              items={brandImage.map((item, index) => (
              
                  <li className="brand-logo">
                    <img
                      className="img-fluid"
                      src={item.img}
                      alt={`brand-logo-${index}`}
                      responsive={responsive}
                    />
                  </li>
                
              ))}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandSection;
