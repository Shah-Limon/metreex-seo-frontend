import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  const [logo, setLogo] = useState([]);
  const [footer, setFooter] = useState([]);
  const [social, setSocial] = useState([]);
  useEffect(() => {
    fetch(`http://localhost:5000/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/footer-links`)
      .then((res) => res.json())
      .then((info) => setFooter(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/footer-social`)
      .then((res) => res.json())
      .then((info) => setSocial(info));
  }, []);

  const scrollToTop = () => {
    window.scrollTo(0, 0);
  };

  const newsLetter = (event) => {
    event.preventDefault();

    const email = event.target.email.value;

    const contact = {
      email,
    };

    const url = `http://localhost:5000/add-newsLetter/`;
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(contact),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/news-letter-submit");
      });
  };

  return (
    <>
      <footer id="footer-2" className="pt-100 footer division">
        <div className="container">
          {/* FOOTER CONTENT */}
          <div className="row">
            {/* FOOTER INFO */}
            <div className="col-md-10 col-lg-4">
              <div className="footer-info mb-40">
                {/* Footer Logo */}
                {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 364 x 90 pixels) */}
                <img
                  src="https://i.ibb.co/StnJdc8/logo-3.png"
                  width={182}
                  height={45}
                  alt="footer-logo"
                />
                {/* Text */}
                <p>
                  Aliquam orci a nullam tempor sapien gravida donec enim ipsum
                  porta justo velna an auctor undo congue magna laoreet augue
                  sapien
                </p>
              </div>
            </div>
            {/* FOOTER PRODUCTS LINKS */}
            <div className="col-md-3 col-lg-2 col-xl-2">
              <div className="footer-links mb-40">
                {/* Title */}
                <h5 className="h5-sm indigo-color">Quick Links</h5>
                {/* Footer Links */}
                <ul className="foo-links clearfix">
                  <li>
                    <a href="#">About Us</a>
                  </li>
                  <li>
                    <a href="#">Case Studies</a>
                  </li>
                  <li>
                    <a href="#">Lawyer SEO</a>
                  </li>
                  <li>
                    <a href="#">Testimonials</a>
                  </li>
                  <li>
                    <a href="#">From the Blog</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* FOOTER COMPANY LINKS */}
            <div className="col-md-4 col-lg-3 col-xl-3">
              <div className="footer-links mb-40">
                {/* Title */}
                <h5 className="h5-sm indigo-color">Featured Services</h5>
                {/* Footer Links */}
                <ul className="clearfix">
                  <li>
                    <a href="#">Local SEO</a>
                  </li>
                  <li>
                    <a href="#">Social Media Marketing</a>
                  </li>
                  <li>
                    <a href="#">Pay Per Click Management</a>
                  </li>
                  <li>
                    <a href="#">Search Engine Optimization</a>
                  </li>
                  <li>
                    <a href="#">Free SEO Analysis</a>
                  </li>
                </ul>
              </div>
            </div>
            {/* FOOTER NEWSLETTER FORM */}
            <div className="col-md-5 col-lg-3 col-xl-3">
              <div className="footer-form mb-20">
                {/* Title */}
                <h5 className="h5-sm indigo-color">Follow the Best</h5>
                {/* Newsletter Form Input */}
                <form className="newsletter-form">
                  <div className="input-group">
                    <input
                      type="email"
                      className="form-control"
                      placeholder="Email Address"
                      required=""
                      id="s-email"
                    />
                    <span className="input-group-btn">
                      <button type="submit" className="btn">
                        <i className="far fa-arrow-alt-circle-right" />
                      </button>
                    </span>
                  </div>
                  {/* Newsletter Form Notification */}
                  <label htmlFor="s-email" className="form-notification" />
                </form>
              </div>
            </div>{" "}
            {/* END FOOTER NEWSLETTER FORM */}
          </div>{" "}
          {/* END FOOTER CONTENT */}
          {/* BOTTOM FOOTER */}
          <div className="bottom-footer">
            <div className="row">
              {/* FOOTER COPYRIGHT */}
              <div className="col-lg-8">
                <ul className="bottom-footer-list">
                  <li>
                    <p>© Copyright Metreex 2020</p>
                  </li>
                  <li>
                    <p>
                      <a href="tel:123456789">508.746.9892</a>
                    </p>
                  </li>
                  <li>
                    <p className="last-li">
                      <a href="mailto:yourdomain@mail.com">hello@domain.com</a>
                    </p>
                  </li>
                </ul>
              </div>
              {/* FOOTER SOCIALS LINKS */}
              <div className="col-lg-4 text-right">
                <ul className="foo-socials text-center clearfix">
                  <li>
                    <a href="#" className="ico-facebook">
                      <i className="fab fa-facebook-f" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ico-twitter">
                      <i className="fab fa-twitter" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ico-google-plus">
                      <i className="fab fa-google-plus-g" />
                    </a>
                  </li>
                  <li>
                    <a href="#" className="ico-tumblr">
                      <i className="fab fa-tumblr" />
                    </a>
                  </li>
                  {/*
									<li><a href="#" class="ico-behance"><i class="fab fa-behance"></i></a></li>	
									<li><a href="#" class="ico-dribbble"><i class="fab fa-dribbble"></i></a></li>									
									<li><a href="#" class="ico-instagram"><i class="fab fa-instagram"></i></a></li>	
									<li><a href="#" class="ico-linkedin"><i class="fab fa-linkedin-in"></i></a></li>
									<li><a href="#" class="ico-pinterest"><i class="fab fa-pinterest-p"></i></a></li>								
									<li><a href="#" class="ico-youtube"><i class="fab fa-youtube"></i></a></li>										
									<li><a href="#" class="ico-vk"><i class="fab fa-vk"></i></a></li>
									<li><a href="#" class="ico-yelp"><i class="fab fa-yelp"></i></a></li>
									<li><a href="#" class="ico-yahoo"><i class="fab fa-yahoo"></i></a></li>
								    */}
                </ul>
              </div>
            </div>
          </div>{" "}
          {/* END BOTTOM FOOTER */}
        </div>{" "}
        {/* End container */}
      </footer>
    </>
  );
};

export default Footer;
