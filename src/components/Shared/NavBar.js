import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { signOut } from "firebase/auth";
import auth from "../../firebase.init";
import { useAuthState } from "react-firebase-hooks/auth";

const NavBar = () => {
  const [logo, setLogo] = useState([]);
  const [user] = useAuthState(auth);
  const [admin, setAdmin] = useState([]);

  const handleSignout = () => {
    signOut(auth);
  };

  useEffect(() => {
    fetch(`https://nft-seo-server.onrender.com/logo`)
      .then((res) => res.json())
      .then((info) => setLogo(info));
  }, []);
  useEffect(() => {
    fetch(`https://nft-seo-server.onrender.com/users`)
      .then((res) => res.json())
      .then((info) => setAdmin(info));
  }, []);

  return (
    <>
      <>
        {/* PAGE CONTENT
		============================================= */}
        <div id="page" className="page">
          {/* HEADER
			============================================= */}
          <header
            id="header"
            className="header tra-menu navbar-dark dark-scroll"
          >
            <div className="header-wrapper">
              {/* MOBILE HEADER */}
              <div className="wsmobileheader clearfix">
                <a id="wsnavtoggle" className="wsanimated-arrow">
                  <span />
                </a>
                <span className="smllogo smllogo-black">
                  <img
                    src="images/logo.png"
                    width={162}
                    height={40}
                    alt="mobile-logo"
                  />
                </span>
                <span className="smllogo smllogo-white">
                  <img
                    src="images/logo-white.png"
                    width={162}
                    height={40}
                    alt="mobile-logo"
                  />
                </span>
                <a href="tel:123456789" className="callusbtn">
                  <i className="fas fa-phone" />
                </a>
              </div>
              {/* NAVIGATION MENU */}
              <div className="wsmainfull menu clearfix">
                <div className="wsmainwp clearfix">
                  {/* LOGO IMAGE */}
                  {/* For Retina Ready displays take a image with double the amount of pixels that your image will be displayed (e.g 334 x 80 pixels) */}
                  <div className="desktoplogo">
                    <a href="#hero-2" className="logo-black">
                      <img
                        src="images/logo.png"
                        width={162}
                        height={40}
                        alt="header-logo"
                      />
                    </a>
                  </div>
                  <div className="desktoplogo">
                    <a href="#hero-2" className="logo-white">
                      <img
                        src="images/logo-white.png"
                        width={162}
                        height={40}
                        alt="header-logo"
                      />
                    </a>
                  </div>
                  {/* MAIN MENU */}
                  <nav className="wsmenu clearfix blue-header">
                    <ul className="wsmenu-list">
                      {/* SIMPLE NAVIGATION LINK */}
                      <li className="nl-simple" aria-haspopup="true">
                        <a href="about-us.html">About</a>
                      </li>
                      {/* DROPDOWN MENU */}
                      <li aria-haspopup="true">
                        <a href="#">
                          Pages <span className="wsarrow" />
                        </a>
                        <div className="wsmegamenu clearfix halfmenu">
                          <div className="container-fluid">
                            <div className="row">
                              {/* Links */}
                              <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                <li>
                                  <a href="about-us.html">About Us Page</a>
                                </li>
                                <li>
                                  <a href="services.html">Services Page</a>
                                </li>
                                <li>
                                  <a href="service-details.html">
                                    Service Details Page
                                  </a>
                                </li>
                                <li>
                                  <a href="case-studies-1.html">
                                    Case Studies #1
                                  </a>
                                </li>
                                <li>
                                  <a href="case-studies-2.html">
                                    Case Studies #2
                                  </a>
                                </li>
                                <li>
                                  <a href="project-details.html">
                                    Single Project Page
                                  </a>
                                </li>
                                <li>
                                  <a href="reviews.html">Customers Reviews</a>
                                </li>
                              </ul>
                              {/* Links */}
                              <ul className="col-lg-6 col-md-12 col-xs-12 link-list">
                                <li>
                                  <a href="resources.html">Resources Page</a>
                                </li>
                                <li>
                                  <a href="pricing.html">Pricing Page</a>
                                </li>
                                <li>
                                  <a href="team.html">Our Team Page</a>
                                </li>
                                <li>
                                  <a href="faqs.html">FAQs Page</a>
                                </li>
                                <li>
                                  <a href="blog-listing.html">
                                    Blog Listing Page
                                  </a>
                                </li>
                                <li>
                                  <a href="single-post.html">
                                    Single Blog Post
                                  </a>
                                </li>
                                <li>
                                  <a href="contats.html">Contact Us Page</a>
                                </li>
                              </ul>
                            </div>
                          </div>
                        </div>
                      </li>{" "}
                      {/* END DROPDOWN MENU */}
                      {/* SIMPLE NAVIGATION LINK */}
                      <li className="nl-simple" aria-haspopup="true">
                        <a href="services.html">Services</a>
                      </li>
                      {/* MEGAMENU */}
                      <li aria-haspopup="true">
                        <a href="#">
                          Mega Menu <span className="wsarrow" />
                        </a>
                        <div className="wsmegamenu clearfix">
                          <div className="container">
                            <div className="row">
                              {/* MEGAMENU QUICK LINKS */}
                              <div className="col-md-12 col-lg-3">
                                {/* Title */}
                                <h3 className="title">Marketing Solutions:</h3>
                                <ul className="link-list">
                                  <li>
                                    <a href="#">Search Engine Optimization</a>
                                  </li>
                                  <li>
                                    <a href="#">Web Design &amp; Development</a>
                                  </li>
                                  <li>
                                    <a href="#">Social Media Marketing</a>
                                  </li>
                                  <li>
                                    <a href="#">Pay per Click (PPC)</a>
                                  </li>
                                  <li>
                                    <a href="#">Video Production</a>
                                  </li>
                                  <li>
                                    <a href="#">Content Marketing</a>
                                  </li>
                                  <li>
                                    <a href="#">Email Marketing Campaigns</a>
                                  </li>
                                </ul>
                              </div>{" "}
                              {/* END MEGAMENU QUICK LINKS */}
                              {/* MEGAMENU FEATURED NEWS */}
                              <div className="col-md-12 col-lg-5">
                                {/* Title */}
                                <h3 className="title">Featured News:</h3>
                                {/* Image */}
                                <div className="fluid-width-video-wrapper mb-15">
                                  <img
                                    src="images/blog/featured-news.jpg"
                                    alt="featured-news"
                                  />
                                </div>
                                {/* Text */}
                                <h5 className="h5-md">
                                  <a href="single-post.html">
                                    Things to know while performing SEO for
                                    multiple location businesses
                                  </a>
                                </h5>
                                <p className="wsmwnutxt">
                                  Porta semper lacus cursus, feugiat primis
                                  ultrice in ligula risus auctor tempus feugiat
                                  dolor impedit magna...
                                </p>
                              </div>{" "}
                              {/* END MEGAMENU FEATURED NEWS */}
                              {/* MEGAMENU LATEST NEWS */}
                              <div className="col-md-12 col-lg-4">
                                {/* Title */}
                                <h3 className="title">Latest News:</h3>
                                {/* Latest News */}
                                <ul className="latest-news">
                                  {/* Post #1 */}
                                  <li className="clearfix d-flex align-items-center">
                                    {/* Image */}
                                    <img
                                      className="img-fluid"
                                      src="images/blog/latest-post-1.jpg"
                                      alt="blog-post-preview"
                                    />
                                    {/* Text */}
                                    <div className="post-summary">
                                      <a href="single-post.html">
                                        Etiam sapien risus ante auctor tempus an
                                        accumsan...
                                      </a>
                                      <p>03 hours ago</p>
                                    </div>
                                  </li>
                                  {/* Post #2 */}
                                  <li className="clearfix d-flex align-items-center">
                                    {/* Image */}
                                    <img
                                      className="img-fluid"
                                      src="images/blog/latest-post-2.jpg"
                                      alt="blog-post-preview"
                                    />
                                    {/* Text */}
                                    <div className="post-summary">
                                      <a href="single-post.html">
                                        Blandit tempor sapien ipsum, porta risus
                                        auctor justo...
                                      </a>
                                      <p>Feb 02, 2020</p>
                                    </div>
                                  </li>
                                  {/* Post #3 */}
                                  <li className="clearfix d-flex align-items-center">
                                    {/* Image */}
                                    <img
                                      className="img-fluid"
                                      src="images/blog/latest-post-3.jpg"
                                      alt="blog-post-preview"
                                    />
                                    {/* Text */}
                                    <div className="post-summary">
                                      <a href="single-post.html">
                                        Cursus risus an auctor risus laoreet
                                        undo auctor varius...
                                      </a>
                                      <p>Jan 29, 2020</p>
                                    </div>
                                  </li>
                                </ul>
                              </div>{" "}
                              {/* END MEGAMENU LATEST NEWS */}
                            </div>{" "}
                            {/* End row */}
                          </div>{" "}
                          {/* End container */}
                        </div>{" "}
                        {/* End wsmegamenu */}
                      </li>{" "}
                      {/* END MEGAMENU */}
                      {/* SIMPLE NAVIGATION LINK */}
                      <li className="nl-simple" aria-haspopup="true">
                        <a href="resources.html">Resources</a>
                      </li>
                      {/* SIMPLE NAVIGATION LINK */}
                      <li className="nl-simple" aria-haspopup="true">
                        <a href="blog-listing.html">Blog</a>
                      </li>
                      {/* HEADER PHONE NUMBER */}
                      <li
                        className="nl-simple green-scroll"
                        aria-haspopup="true"
                      >
                        <a
                          href="tel:123456789"
                          className="last-link last-link-number"
                        >
                          <i className="fas fa-phone-square-alt" /> 855-569-7890
                        </a>
                      </li>
                      {/* HEADER BUTTON 
								    <li class="nl-simple" aria-haspopup="true">
								    	<a href="#" class="btn btn-green tra-white-hover last-link">Get In Touch</a>
								    </li> */}
                    </ul>
                  </nav>{" "}
                  {/* END MAIN MENU */}
                </div>
              </div>{" "}
              {/* END NAVIGATION MENU */}
            </div>{" "}
            {/* End header-wrapper */}
          </header>{" "}
          {/* END HEADER */}
          {/* HERO-2
			============================================= */}
          <section id="hero-2" className="bg-fixed hero-section division">
            <div className="container">
              {/* HERO TEXT */}
              <div className="row">
                <div className="col-xl-10 offset-xl-1">
                  <div className="hero-txt text-center">
                    {/* Title */}
                    <h3 className="indigo-color">
                      Take advantage of SEO to receive more customers &amp;
                      profit
                    </h3>
                    {/* Text */}
                    <p className="grey-color">
                      Egestas magna egestas magna ipsum vitae purus ipsum primis
                      in cubilia laoreet augue luctus magna vulputate molestie
                      bibendum quis luctus an dolor
                    </p>
                    {/* HERO FORM */}
                    <div className="form-holder text-center">
                      <form name="seoForm" className="row seo-form">
                        {/* Hero Form Input */}
                        <div id="input-email" className="col-lg-4">
                          <input
                            type="text"
                            name="email"
                            className="form-control email"
                            placeholder="Email Address*"
                          />
                        </div>
                        {/* Hero Form Input */}
                        <div id="input-url" className="col-lg-5">
                          <input
                            type="url"
                            name="url"
                            className="form-control url"
                            placeholder="Your Website*"
                            defaultValue="http://www."
                          />
                        </div>
                        {/* Hero Form Button */}
                        <div className="col-lg-3 form-btn">
                          <button
                            type="submit"
                            className="btn btn-primary black-hover submit"
                          >
                            Let's Started
                          </button>
                        </div>
                        {/* Hero Form Message */}
                        <div className="col-lg-12 seo-form-msg">
                          <span className="loading" />
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>{" "}
              {/* END HERO TEXT */}
              {/* HERO IMAGE */}
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div className="hero-2-img text-center">
                    <img
                      className="img-fluid"
                      src="images/hero-2-img.png"
                      alt="hero-image"
                    />
                  </div>
                </div>
              </div>
            </div>{" "}
            {/* End container */}
            {/* SECTION OVERLAY */}
            <div className="bg-fixed white-overlay-wave" />
          </section>{" "}
          {/* END HERO-2 */}
          {/* BRANDS-2
			============================================= */}
          <div id="brands-2" className="brands-section division">
            <div className="container">
              <div className="row">
                <div className="col-md-12 text-center">
                  {/* Title */}
                  <p className="p-lg grey-color">
                    Used by startups, e-stores, web designers, and teams
                    including:
                  </p>
                  <ul className="brands-list">
                    {/* BRAND LOGO IMAGE */}
                    <li className="brand-logo">
                      <img
                        className="img-fluid"
                        src="images/brand-1.png"
                        alt="brand-logo"
                      />
                    </li>
                    {/* BRAND LOGO IMAGE */}
                    <li className="brand-logo">
                      <img
                        className="img-fluid"
                        src="images/brand-2.png"
                        alt="brand-logo"
                      />
                    </li>
                    {/* BRAND LOGO IMAGE */}
                    <li className="brand-logo">
                      <img
                        className="img-fluid"
                        src="images/brand-3.png"
                        alt="brand-logo"
                      />
                    </li>
                    {/* BRAND LOGO IMAGE */}
                    <li className="brand-logo">
                      <img
                        className="img-fluid"
                        src="images/brand-4.png"
                        alt="brand-logo"
                      />
                    </li>
                    {/* BRAND LOGO IMAGE */}
                    <li className="brand-logo">
                      <img
                        className="img-fluid"
                        src="images/brand-5.png"
                        alt="brand-logo"
                      />
                    </li>
                    {/* BRAND LOGO IMAGE */}
                    <li className="brand-logo">
                      <img
                        className="img-fluid"
                        src="images/brand-6.png"
                        alt="brand-logo"
                      />
                    </li>
                    {/* BRAND LOGO IMAGE */}
                    <li className="brand-logo">
                      <img
                        className="img-fluid"
                        src="images/brand-7.png"
                        alt="brand-logo"
                      />
                    </li>
                    {/* BRAND LOGO IMAGE */}
                    <li className="brand-logo">
                      <img
                        className="img-fluid"
                        src="images/brand-8.png"
                        alt="brand-logo"
                      />
                    </li>
                    {/* BRAND LOGO IMAGE */}
                    <li className="brand-logo">
                      <img
                        className="img-fluid"
                        src="images/brand-9.png"
                        alt="brand-logo"
                      />
                    </li>
                  </ul>
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </div>{" "}
          {/* END BRANDS-2 */}
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
                          auctor and rhoncus in ultrice ligula purus ipsum
                          primis in cubilia
                        </p>
                      </div>
                    </div>
                    {/* Text */}
                    <div className="cbox-1">
                      <i className="fas fa-check grey-color" />
                      <div className="cbox-1-txt">
                        <p>
                          Integer congue magna at pretium purus pretium ligula
                          rutrum and luctus risus eros dolor auctor ipsum
                          blandit purus vehicula magna and luctus tempor quisque
                          turpis magna ligula
                        </p>
                      </div>
                    </div>
                    {/* Text */}
                    <div className="cbox-1">
                      <i className="fas fa-check grey-color" />
                      <div className="cbox-1-txt">
                        <p>
                          An enim nullam tempor sapien gravida donec enim
                          blandit ipsum at porta justo integer velna vitae
                          auctor integer congue
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
                            <p className="indigo-color">
                              Customer Satisfaction
                            </p>
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
                      src="images/image-07.png"
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
          {/* SERVICES-4
			============================================= */}
          <section
            id="services-4"
            className="wide-60 services-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div
                  className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {/* Title 	*/}
                  <h3 className="h3-sm indigo-color">
                    We know exactly how to increase your website traffic and
                    grow up your business
                  </h3>
                  {/* Text */}
                  <p className="p-lg">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus, blandit posuere and ligula
                    varius magna a porta elementum massa risus
                  </p>
                </div>
              </div>{" "}
              {/* END SECTION TITLE */}
              {/* SERVICE BOXES */}
              <div className="services-boxes">
                <div className="row">
                  {/* SERVICE BOX #1 */}
                  <div className="col-md-6">
                    <div
                      className="sbox-4 icon-md wow fadeInUp"
                      data-wow-delay="0.4s"
                    >
                      {/* Icon */}
                      <img
                        className="img-65"
                        src="images/icons/analytics-2.png"
                        alt="feature-icon"
                      />
                      {/* Text */}
                      <div className="sbox-4-txt">
                        {/* Title */}
                        <h5 className="h5-lg indigo-color">
                          Advanced Analytics Review
                        </h5>
                        {/* Text */}
                        <p className="grey-color">
                          Maecenas gravida nunc vehicula magna luctus tempor
                          quisque laoreet turpis at augue, viverra and augue
                          eget dictum tempor. Pulvinar porta blandit posuere
                          vehicula imperdiet varius undo viverra rutrum
                          dignissim
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* SERVICE BOX #2 */}
                  <div className="col-md-6">
                    <div
                      className="sbox-4 icon-md wow fadeInUp"
                      data-wow-delay="0.6s"
                    >
                      {/* Icon */}
                      <img
                        className="img-65"
                        src="images/icons/email-1.png"
                        alt="feature-icon"
                      />
                      {/* Text */}
                      <div className="sbox-4-txt">
                        {/* Title */}
                        <h5 className="h5-lg indigo-color">
                          Email Marketing Campaigns
                        </h5>
                        {/* Text */}
                        <p className="grey-color">
                          Maecenas gravida nunc vehicula magna luctus tempor
                          quisque laoreet turpis at augue, viverra and augue
                          eget dictum tempor. Pulvinar porta blandit posuere
                          vehicula imperdiet varius undo viverra rutrum
                          dignissim
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* SERVICE BOX #3 */}
                  <div className="col-md-6">
                    <div
                      className="sbox-4 icon-md wow fadeInUp"
                      data-wow-delay="0.8s"
                    >
                      {/* Icon */}
                      <img
                        className="img-65"
                        src="images/icons/video-player-1.png"
                        alt="feature-icon"
                      />
                      {/* Text */}
                      <div className="sbox-4-txt">
                        {/* Title */}
                        <h5 className="h5-lg indigo-color">Video Marketing</h5>
                        {/* Text */}
                        <p className="grey-color">
                          Maecenas gravida nunc vehicula magna luctus tempor
                          quisque laoreet turpis at augue, viverra and augue
                          eget dictum tempor. Pulvinar porta blandit posuere
                          vehicula imperdiet varius undo viverra rutrum
                          dignissim
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* SERVICE BOX #4 */}
                  <div className="col-md-6">
                    <div
                      className="sbox-4 icon-md wow fadeInUp"
                      data-wow-delay="1s"
                    >
                      {/* Icon */}
                      <img
                        className="img-65"
                        src="images/icons/price-tag.png"
                        alt="feature-icon"
                      />
                      {/* Text */}
                      <div className="sbox-4-txt">
                        {/* Title */}
                        <h5 className="h5-lg indigo-color">
                          Search Engine Optimization (SEO)
                        </h5>
                        {/* Text */}
                        <p className="grey-color">
                          Maecenas gravida nunc vehicula magna luctus tempor
                          quisque laoreet turpis at augue, viverra and augue
                          eget dictum tempor. Pulvinar porta blandit posuere
                          vehicula imperdiet varius undo viverra rutrum
                          dignissim
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* SERVICE BOX #5 */}
                  <div className="col-md-6">
                    <div
                      className="sbox-4 icon-md wow fadeInUp"
                      data-wow-delay="1.2s"
                    >
                      {/* Icon */}
                      <img
                        className="img-65"
                        src="images/icons/pay-per-click-3.png"
                        alt="feature-icon"
                      />
                      {/* Text */}
                      <div className="sbox-4-txt">
                        {/* Title */}
                        <h5 className="h5-lg indigo-color">
                          Pay Per Click (PPC)
                        </h5>
                        {/* Text */}
                        <p className="grey-color">
                          Maecenas gravida nunc vehicula magna luctus tempor
                          quisque laoreet turpis at augue, viverra and augue
                          eget dictum tempor. Pulvinar porta blandit posuere
                          vehicula imperdiet varius undo viverra rutrum
                          dignissim
                        </p>
                      </div>
                    </div>
                  </div>
                  {/* SERVICE BOX #6 */}
                  <div className="col-md-6">
                    <div
                      className="sbox-4 icon-md wow fadeInUp"
                      data-wow-delay="1.4s"
                    >
                      {/* Icon */}
                      <img
                        className="img-65"
                        src="images/icons/computer-1.png"
                        alt="feature-icon"
                      />
                      {/* Text */}
                      <div className="sbox-4-txt">
                        {/* Title */}
                        <h5 className="h5-lg indigo-color">
                          Content Marketing
                        </h5>
                        {/* Text */}
                        <p className="grey-color">
                          Maecenas gravida nunc vehicula magna luctus tempor
                          quisque laoreet turpis at augue, viverra and augue
                          eget dictum tempor. Pulvinar porta blandit posuere
                          vehicula imperdiet varius undo viverra rutrum
                          dignissim
                        </p>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END SERVICE BOXES */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END SERVICES-4 */}
          {/* STATISTIC-1
			============================================= */}
          <div id="statistic-1" className="bg-06 statistic-section division">
            <div className="container white-color">
              <div className="row">
                {/* STATISTIC BLOCK #1 */}
                <div className="col-sm-6 col-md-3">
                  <div
                    className="statistic-block wow fadeInUp"
                    data-wow-delay="0.4s"
                  >
                    {/* Text */}
                    <h5 className="statistic-number">
                      3,<span className="count-element">485</span>
                    </h5>
                    <p className="p-md">Links Optimized</p>
                  </div>
                </div>
                {/* STATISTIC BLOCK #2 */}
                <div className="col-sm-6 col-md-3">
                  <div
                    className="statistic-block wow fadeInUp"
                    data-wow-delay="0.6s"
                  >
                    {/* Text */}
                    <h5 className="statistic-number">
                      1,<span className="count-element">281</span>
                    </h5>
                    <p className="p-md">Happy Customers</p>
                  </div>
                </div>
                {/* STATISTIC BLOCK #3 */}
                <div className="col-sm-6 col-md-3">
                  <div
                    className="statistic-block wow fadeInUp"
                    data-wow-delay="0.8s"
                  >
                    {/* Text */}
                    <h5 className="statistic-number">
                      4,<span className="count-element">379</span>
                    </h5>
                    <p className="p-md">Websites Improved</p>
                  </div>
                </div>
                {/* STATISTIC BLOCK #4 */}
                <div className="col-sm-6 col-md-3">
                  <div
                    className="statistic-block wow fadeInUp"
                    data-wow-delay="1s"
                  >
                    {/* Text */}
                    <h5 className="statistic-number">
                      2,<span className="count-element">473</span>
                    </h5>
                    <p className="p-md">Active Accounts</p>
                  </div>
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </div>{" "}
          {/* END STATISTIC-1 */}
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
                      src="images/image-02.png"
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
                      An enim nullam tempor sapien gravida donec pretium ipsum
                      porta justo integer at odio velna vitae auctor integera
                      congue magna at purus pretium ligula rutrum luctus ultrice
                      a gravida lectus suscipit gestas magna suscipit luctus
                      undo
                    </p>
                    {/* QUOTE */}
                    <div className="quote quote-primary">
                      {/* Quote Text */}
                      <p>
                        "Lorem ipsum dolor sit amet, consectetuer adipiscing
                        elit. Aenean magna ligula eget dolor suscipit egestas at
                        viverra dolor iaculis luctus magna suscipit egestas "
                      </p>
                      {/* Quote Avatar */}
                      <div className="quote-avatar">
                        <img src="images/quote-avatar.jpg" alt="quote-avatar" />
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
          {/* TESTIMONIALS-3
			============================================= */}
          <section
            id="reviews-3"
            className="bg-04 wide-100 reviews-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div
                  className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {/* Title 	*/}
                  <h3 className="h3-xs indigo-color">
                    <span className="title-digit">
                      2,<span className="count-element">968</span>
                    </span>
                    Positive Reviews From Our Customers
                  </h3>
                  {/* Text */}
                  <p className="p-lg">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus, blandit posuere and ligula
                    varius magna a porta elementum massa risus
                  </p>
                </div>
              </div>
              {/* TESTIMONIALS CONTENT */}
              <div className="row">
                <div className="col-xl-10 offset-xl-1">
                  <div className="owl-carousel owl-theme reviews-holder">
                    {/* TESTIMONIAL #1 */}
                    <div className="review-3">
                      {/* Quote Icon */}
                      <div className="quote-ico">
                        <img src="images/left-quote.png" alt="quote-image" />
                      </div>
                      {/* Testimonial Text */}
                      <p>
                        Etiam sapien sem at sagittis congue an augue massa
                        varius egestas and suscipit magna and tempus and aliquet
                        porta vitae purus congue a cursus magna cubilia augue
                        vitae laoreet
                      </p>
                      {/* Author Data */}
                      <div className="review-3-author d-flex align-items-center">
                        {/* Author Avatar */}
                        <div className="author-avatar">
                          <img
                            className="img-fluid"
                            src="images/review-author-1.jpg"
                            alt="review-author-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h5 className="h5-xs indigo-color">Sean McMarthy</h5>
                          <span>
                            Owner, <a href="#">Company Name</a>
                          </span>
                        </div>
                      </div>
                    </div>{" "}
                    {/*END  TESTIMONIAL #1 */}
                    {/* TESTIMONIAL #2 */}
                    <div className="review-3">
                      {/* Quote Icon */}
                      <div className="quote-ico">
                        <img src="images/left-quote.png" alt="quote-image" />
                      </div>
                      {/* Testimonial Text */}
                      <p>
                        At sagittis congue augue egestas rhoncus in magna ipsum
                        vitae purus ipsum primis cubilia laoreet augue egestas
                        luctus and donec diam ociis ultrice ligula magna
                        suscipit
                      </p>
                      {/* Author Data */}
                      <div className="review-3-author d-flex align-items-center">
                        {/* Author Avatar */}
                        <div className="author-avatar">
                          <img
                            className="img-fluid"
                            src="images/review-author-2.jpg"
                            alt="review-author-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h5 className="h5-xs indigo-color">
                            Evelyn Martinez
                          </h5>
                          <span>
                            Owner, <a href="#">Company Name</a>
                          </span>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END TESTIMONIAL #2 */}
                    {/* TESTIMONIAL #3 */}
                    <div className="review-3">
                      {/* Quote Icon */}
                      <div className="quote-ico">
                        <img src="images/left-quote.png" alt="quote-image" />
                      </div>
                      {/* Testimonial Text */}
                      <p>
                        Mauris donec ociis magnis sapien etiam sapien congue and
                        augue egestas et ultrice vitae undo purus and diam
                        integer congue at magna ligula an egestas magna suscipit
                        lectus
                      </p>
                      {/* Author Data */}
                      <div className="review-3-author d-flex align-items-center">
                        {/* Author Avatar */}
                        <div className="author-avatar">
                          <img
                            className="img-fluid"
                            src="images/review-author-3.jpg"
                            alt="review-author-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h5 className="h5-xs indigo-color">Joel Peterson</h5>
                          <span>
                            Owner, <a href="#">Company Name</a>
                          </span>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END TESTIMONIAL #3 */}
                    {/* TESTIMONIAL #4 */}
                    <div className="review-3">
                      {/* Quote Icon */}
                      <div className="quote-ico">
                        <img src="images/left-quote.png" alt="quote-image" />
                      </div>
                      {/* Testimonial Text */}
                      <p>
                        Mauris donec ociis magnis sapien etiam sapien congue
                        undo augue pretium purus ligula lectus aenean magna and
                        mauris lectus undo laoreet tempor egestas magna vitae
                        laoreet augue
                      </p>
                      {/* Author Data */}
                      <div className="review-3-author d-flex align-items-center">
                        {/* Author Avatar */}
                        <div className="author-avatar">
                          <img
                            className="img-fluid"
                            src="images/review-author-4.jpg"
                            alt="review-author-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h5 className="h5-xs indigo-color">Michael Deal</h5>
                          <span>
                            Owner, <a href="#">Company Name</a>
                          </span>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END TESTIMONIAL #4 */}
                    {/* TESTIMONIAL #5 */}
                    <div className="review-3">
                      {/* Quote Icon */}
                      <div className="quote-ico">
                        <img src="images/left-quote.png" alt="quote-image" />
                      </div>
                      {/* Testimonial Text */}
                      <p>
                        An augue in cubilia laoreet magna suscipit egestas magna
                        ipsum at purus ipsum primis in augue ultrice ligula
                        egestas and suscipit lectus gestas integer congue
                      </p>
                      {/* Author Data */}
                      <div className="review-3-author d-flex align-items-center">
                        {/* Author Avatar */}
                        <div className="author-avatar">
                          <img
                            className="img-fluid"
                            src="images/review-author-5.jpg"
                            alt="review-author-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h5 className="h5-xs indigo-color">Mark Paterson</h5>
                          <span>
                            Owner, <a href="#">Company Name</a>
                          </span>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END TESTIMONIAL #5 */}
                    {/* TESTIMONIAL #6 */}
                    <div className="review-3">
                      {/* Quote Icon */}
                      <div className="quote-ico">
                        <img src="images/left-quote.png" alt="quote-image" />
                      </div>
                      {/* Testimonial Text */}
                      <p>
                        An augue cubilia laoreet undo magna a suscipit egestas
                        magna an ipsum ligula vitae purus and ipsum primis in
                        cubilia
                      </p>
                      {/* Author Data */}
                      <div className="review-3-author d-flex align-items-center">
                        {/* Author Avatar */}
                        <div className="author-avatar">
                          <img
                            className="img-fluid"
                            src="images/review-author-6.jpg"
                            alt="review-author-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h5 className="h5-xs indigo-color">Mark Hodges</h5>
                          <span>
                            Owner, <a href="#">Company Name</a>
                          </span>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END TESTIMONIAL #6 */}
                    {/* TESTIMONIAL #7 */}
                    <div className="review-3">
                      {/* Quote Icon */}
                      <div className="quote-ico">
                        <img src="images/left-quote.png" alt="quote-image" />
                      </div>
                      {/* Testimonial Text */}
                      <p>
                        Augue egestas volutpat egestas augue purus cubilia
                        laoreet magna suscipit luctus and dolor blandit vitae
                        purus diam tempus undo aliquet porta rutrum gestas
                        egestas
                      </p>
                      {/* Author Data */}
                      <div className="review-3-author d-flex align-items-center">
                        {/* Author Avatar */}
                        <div className="author-avatar">
                          <img
                            className="img-fluid"
                            src="images/review-author-7.jpg"
                            alt="review-author-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h5 className="h5-xs indigo-color">Aaron Wall</h5>
                          <span>
                            Owner, <a href="#">Company Name</a>
                          </span>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END TESTIMONIAL #7 */}
                    {/* TESTIMONIAL #8 */}
                    <div className="review-3">
                      {/* Quote Icon */}
                      <div className="quote-ico">
                        <img src="images/left-quote.png" alt="quote-image" />
                      </div>
                      {/* Testimonial Text */}
                      <p>
                        Augue egestas volutpat egestas augue in cubilia laoreet
                        magna suscipit luctus and dolor blandit vitae purus diam
                        tempus
                      </p>
                      {/* Author Data */}
                      <div className="review-3-author d-flex align-items-center">
                        {/* Author Avatar */}
                        <div className="author-avatar">
                          <img
                            className="img-fluid"
                            src="images/review-author-8.jpg"
                            alt="review-author-avatar"
                          />
                        </div>
                        {/* Testimonial Author */}
                        <div className="review-author">
                          <h5 className="h5-xs indigo-color">Tosha Wisdom</h5>
                          <span>
                            Owner, <a href="#">Company Name</a>
                          </span>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END TESTIMONIAL #8 */}
                  </div>
                </div>
              </div>{" "}
              {/* END TESTIMONIALS CONTENT */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END TESTIMONIALS-3 */}
          {/* SERVICES-2
			============================================= */}
          <section
            id="services-2"
            className="wide-30 services-section division"
          >
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
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus, blandit posuere and ligula
                    varius magna a porta elementum massa risus
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
                        src="images/icons/placeholder-1.png"
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
                        src="images/icons/online-shop-1.png"
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
                        src="images/icons/pie-chart.png"
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
                        src="images/icons/pay-per-click-2.png"
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
          {/* TESTIMONIALS-4
			============================================= */}
          <section id="reviews-4" className="bg-05 reviews-section division">
            <div className="container white-color">
              <div className="row d-flex align-items-center">
                {/* TESTIMONIAL STATISTIC */}
                <div className="col-lg-6">
                  <div className="small-statistic pc-25">
                    <div className="row">
                      {/* STATISTIC BLOCK #1 */}
                      <div className="col-sm-6 col-md-3 col-lg-6">
                        <div
                          className="statistic-block wow fadeInUp"
                          data-wow-delay="0.4s"
                        >
                          <h5 className="statistic-number primary-color">
                            <span className="count-element">735</span>%
                          </h5>
                          <p>increase in SEO traffic from benchmark month</p>
                        </div>
                      </div>
                      {/* STATISTIC BLOCK #2 */}
                      <div className="col-sm-6 col-md-3 col-lg-6">
                        <div
                          className="statistic-block wow fadeInUp"
                          data-wow-delay="0.6s"
                        >
                          <h5 className="statistic-number primary-color">
                            <span className="count-element">363</span>%
                          </h5>
                          <p>increase in phone calls from search engines</p>
                        </div>
                      </div>
                      {/* STATISTIC BLOCK #3 */}
                      <div className="col-sm-6 col-md-3 col-lg-6">
                        <div
                          className="statistic-block wow fadeInUp"
                          data-wow-delay="0.8s"
                        >
                          <h5 className="statistic-number primary-color">
                            <span className="count-element">528</span>%
                          </h5>
                          <p>increase in organic visitors in 6 months</p>
                        </div>
                      </div>
                      {/* STATISTIC BLOCK #4 */}
                      <div className="col-sm-6 col-md-3 col-lg-6">
                        <div
                          className="statistic-block wow fadeInUp"
                          data-wow-delay="1s"
                        >
                          <h5 className="statistic-number primary-color">
                            <span className="count-element">436</span>%
                          </h5>
                          <p>increase in first page rankings in the 6 months</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* END TESTIMONIAL STATISTIC */}
                {/* TESTIMONIAL TEXT */}
                <div className="col-lg-6">
                  <div className="review-4 wow fadeInUp" data-wow-delay="0.4s">
                    {/* Quote Icon */}
                    <div className="quote-ico">
                      <img src="images/left-quote.png" alt="quote-image" />
                    </div>
                    {/* Testimonial Text */}
                    <p>
                      "
                      <span>
                        They're communicative, honest, and reliably deliver
                        tangible results.
                      </span>{" "}
                      Etiam sapien sem at sagittis congue an augue massa varius
                      egestas and suscipit magna a tempus undo aliquet a ligula
                      magna suscipit vitae and rutrum luctus a risus ultrice
                      luctus enim ipsum blandit porta justo integer mollislorem
                      primis in orci"
                    </p>
                    {/* Testimonial Author */}
                    <div className="review-4-author">
                      <h5 className="h5-xs">Sean McMarthy, CEO</h5>
                      <span className="lightgrey-color">Company Name</span>
                    </div>
                  </div>{" "}
                  {/* END TESTIMONIAL TEXT */}
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END TESTIMONIALS-4 */}
          {/* PROJECTS-2
			============================================= */}
          <section
            id="projects-2"
            className="wide-70 projects-section division"
          >
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div
                  className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {/* Title 	*/}
                  <h3 className="h3-lg indigo-color">
                    We Leave Lasting Impressions
                  </h3>
                  {/* Text */}
                  <p className="p-lg">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus, blandit posuere and ligula
                    varius magna a porta elementum massa risus
                  </p>
                </div>
              </div>
              {/* PROJECTS IMAGES HOLDER */}
              <div className="row">
                {/* IMAGE #1 */}
                <div className="col-md-6 col-lg-4">
                  <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                    <a href="project-details.html">
                      {/* Project Preview */}
                      <div className="hover-overlay">
                        <img
                          className="img-fluid"
                          src="images/portfolio/project-01.jpg"
                          alt="project-preview"
                        />
                        <div className="item-overlay" />
                        {/* Project Description */}
                        <div className="project-description white-color">
                          <img
                            className="img-fluid"
                            src="images/brand-1.png"
                            alt="project-logo"
                          />
                          <p className="p-md">Restaurant Website</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* END IMAGE #1 */}
                {/* IMAGE #2 */}
                <div className="col-md-6 col-lg-4">
                  <div className="project-2 wow fadeInUp" data-wow-delay="0.6s">
                    <a href="project-details.html">
                      {/* Project Preview */}
                      <div className="hover-overlay">
                        <img
                          className="img-fluid"
                          src="images/portfolio/project-02.jpg"
                          alt="project-preview"
                        />
                        <div className="item-overlay" />
                        {/* Project Description */}
                        <div className="project-description white-color">
                          <img
                            className="img-fluid"
                            src="images/brand-3.png"
                            alt="project-logo"
                          />
                          <p className="p-md">Freelancer Website</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* END IMAGE #2 */}
                {/* IMAGE #3 */}
                <div className="col-md-6 col-lg-4">
                  <div className="project-2 wow fadeInUp" data-wow-delay="0.8s">
                    <a href="project-details.html">
                      {/* Project Preview */}
                      <div className="hover-overlay">
                        <img
                          className="img-fluid"
                          src="images/portfolio/project-03.jpg"
                          alt="project-preview"
                        />
                        <div className="item-overlay" />
                        {/* Project Description */}
                        <div className="project-description white-color">
                          <img
                            className="img-fluid"
                            src="images/brand-5.png"
                            alt="project-logo"
                          />
                          <p className="p-md">Organic Food Website</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* END IMAGE #3 */}
                {/* IMAGE #4 */}
                <div className="col-md-6 col-lg-4">
                  <div className="project-2 wow fadeInUp" data-wow-delay="1s">
                    <a href="project-details.html">
                      {/* Project Preview */}
                      <div className="hover-overlay">
                        <img
                          className="img-fluid"
                          src="images/portfolio/project-04.jpg"
                          alt="project-preview"
                        />
                        <div className="item-overlay" />
                        {/* Project Description */}
                        <div className="project-description white-color">
                          <img
                            className="img-fluid"
                            src="images/brand-7.png"
                            alt="project-logo"
                          />
                          <p className="p-md">Tourism Website</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* END IMAGE #4 */}
                {/* IMAGE #5 */}
                <div className="col-md-6 col-lg-4">
                  <div className="project-2 wow fadeInUp" data-wow-delay="1.2s">
                    <a href="project-details.html">
                      {/* Project Preview */}
                      <div className="hover-overlay">
                        <img
                          className="img-fluid"
                          src="images/portfolio/project-05.jpg"
                          alt="project-preview"
                        />
                        <div className="item-overlay" />
                        {/* Project Description */}
                        <div className="project-description white-color">
                          <img
                            className="img-fluid"
                            src="images/brand-4.png"
                            alt="project-logo"
                          />
                          <p className="p-md">e-Commerce Business</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* END IMAGE #5 */}
                {/* IMAGE #6 */}
                <div className="col-md-6 col-lg-4">
                  <div className="project-2 wow fadeInUp" data-wow-delay="1.4s">
                    <a href="project-details.html">
                      {/* Project Preview */}
                      <div className="hover-overlay">
                        <img
                          className="img-fluid"
                          src="images/portfolio/project-06.jpg"
                          alt="project-preview"
                        />
                        <div className="item-overlay" />
                        {/* Project Description */}
                        <div className="project-description white-color">
                          <img
                            className="img-fluid"
                            src="images/brand-6.png"
                            alt="project-logo"
                          />
                          <p className="p-md">Travel Website</p>
                        </div>
                      </div>
                    </a>
                  </div>
                </div>{" "}
                {/* END IMAGE #6 */}
              </div>{" "}
              {/* END PROJECTS IMAGES HOLDER */}
              {/* ALL PROJECTS BUTTON */}
              <div className="row">
                <div className="col-md-12 text-center all-projects-btn">
                  <a
                    href="case-studies-2.html"
                    className="btn btn-md btn-primary tra-black-hover"
                  >
                    See All Case Studies
                  </a>
                </div>
              </div>
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END PROJECTS-2 */}
          {/* CONTENT-2
			============================================= */}
          <section
            id="content-2"
            className="bg-lightgrey wide-60 content-section division"
          >
            <div className="container">
              <div className="row d-flex align-items-center">
                {/* IMAGE BLOCK */}
                <div className="col-md-5 col-lg-6">
                  <div
                    className="img-block pr-25 mb-40 wow fadeInLeft"
                    data-wow-delay="0.6s"
                  >
                    <img
                      className="img-fluid"
                      src="images/image-03.png"
                      alt="content-image"
                    />
                  </div>
                </div>
                {/* TEXT BLOCK */}
                <div className="col-md-7 col-lg-6">
                  <div
                    className="txt-block pc-25 mb-40 wow fadeInRight"
                    data-wow-delay="0.4s"
                  >
                    {/* Title */}
                    <h4 className="h4-xl indigo-color">
                      We craft marketing &amp; digital products that grow
                      business
                    </h4>
                    {/* Text */}
                    <p>
                      An enim nullam tempor sapien gravida donec pretium ipsum
                      porta justo integer and odio velna vitae auctor integera
                      congue magna at purus pretium ligula rutrum luctus and
                      ultrice a gravida lectus
                    </p>
                    {/* List */}
                    <ul className="ico-list mb-10">
                      <li>
                        <i className="fas fa-check primary-color" />{" "}
                        <span>
                          Vitae auctor integer congue magna at pretium
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check primary-color" />{" "}
                        <span>
                          Integer congue magna and pretium purus ligula
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check primary-color" />{" "}
                        <span>
                          Sagittis congue augue egestas volutpat egestas
                        </span>
                      </li>
                      <li>
                        <i className="fas fa-check primary-color" />{" "}
                        <span>Auctor magna at integer congue pretium</span>
                      </li>
                    </ul>
                  </div>
                </div>{" "}
                {/* END TEXT BLOCK */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END CONTENT-2 */}
          {/* PRICING-2
			============================================= */}
          <section id="pricing-2" className=" wide-60 pricing-section division">
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div
                  className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {/* Title 	*/}
                  <h3 className="h3-lg indigo-color">
                    Simple Pricing, Instant Sign Up
                  </h3>
                  {/* Text */}
                  <p className="p-lg">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus, blandit posuere and ligula
                    varius magna a porta elementum massa risus
                  </p>
                </div>
              </div>
              <div className="row pricing-row">
                {/* PRICE PLAN BASIC */}
                <div className="col-md-6">
                  <div
                    className="pricing-table wow fadeInLeft"
                    data-wow-delay="0.4s"
                  >
                    {/* Plan Price  */}
                    <div className="pricing-plan indigo-color text-center">
                      <h4 className="h4-xs">Basic Subscription</h4>
                      <sup>$</sup>
                      <span className="price">24</span>
                      <sup className="coins">99</sup>
                      <p className="p-lg">Limited Access</p>
                    </div>
                    {/* Pricing Plan Features  */}
                    <ul className="features">
                      <li>
                        <span className="indigo-color">Growth Plan</span> -
                        purus ipsum neque dolor primis libero tempus, blandit
                        posuere and ligula varius magna porta
                      </li>
                      <li>
                        <span className="indigo-color">Website Monitoring</span>{" "}
                        - augue suscipit, luctus and neque purus ipsum neque
                        dolor primis libero tempus, blandit posuere
                      </li>
                      <li>
                        <span className="indigo-color">
                          Weekly Snapshot Email
                        </span>{" "}
                        - purus ipsum neque at dolor primis libero tempus,
                        blandit posuere and ligula varius
                      </li>
                      <li>
                        <span className="indigo-color">Benchmarking</span> -
                        iaculis odio auctor integer congue an impedit magna
                        viverra dolor vitae donec mauris lectus laoreet gestas
                        neque undo luctus feugiat lectus laoreet gestas neque
                      </li>
                      <li>
                        <span className="indigo-color">Daily Health Score</span>{" "}
                        - pretium ipsum porta justo integer at odio velna vitae
                        auctor integera congue magna
                      </li>
                      <li>
                        <span className="indigo-color">12/7 Free Support</span>{" "}
                        - gravida lectus suscipit gestas luctus
                      </li>
                    </ul>
                    {/* Pricing Table Button */}
                    <div className="text-center">
                      <a href="#" className="btn btn-tra-grey black-hover">
                        Get Started
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* END PRICE PLAN BASIC */}
                {/* PRICE PLAN PRO */}
                <div className="col-md-6">
                  <div
                    className="pricing-table wow fadeInRight"
                    data-wow-delay="0.4s"
                  >
                    {/* Plan Price  */}
                    <div className="pricing-plan indigo-color text-center">
                      <h4 className="h4-xs">Pro Subscription</h4>
                      <sup>$</sup>
                      <span className="price">89</span>
                      <sup className="coins">99</sup>
                      <p className="p-lg">Full Access</p>
                    </div>
                    {/* Pricing Plan Features  */}
                    <ul className="features">
                      <li>
                        <span className="indigo-color">Growth Plan</span> -
                        purus ipsum neque dolor primis libero tempus, blandit
                        posuere and ligula varius magna porta
                      </li>
                      <li>
                        <span className="indigo-color">Website Monitoring</span>{" "}
                        - augue suscipit, luctus and neque purus ipsum neque
                        dolor primis libero tempus, blandit posuere
                      </li>
                      <li>
                        <span className="indigo-color">
                          Weekly Snapshot Email
                        </span>{" "}
                        - purus ipsum neque at dolor primis libero tempus,
                        blandit posuere and ligula varius
                      </li>
                      <li>
                        <span className="indigo-color">Benchmarking</span> -
                        iaculis odio auctor integer congue an impedit magna
                        viverra dolor vitae donec mauris lectus laoreet gestas
                        neque undo luctus feugiat lectus laoreet gestas neque
                      </li>
                      <li>
                        <span className="indigo-color">Daily Health Score</span>{" "}
                        - pretium ipsum porta justo integer at odio velna vitae
                        auctor integera congue magna
                      </li>
                      <li>
                        <span className="indigo-color">Social Media</span> -
                        augue suscipit, luctus and neque purus ipsum neque dolor
                        primis libero tempus, blandit posuere
                      </li>
                      <li>
                        <span className="indigo-color">SEO &amp; Keywords</span>{" "}
                        - iaculis odio auctor integer congue an impedit magna
                        viverra dolor vitae donec mauris lectus laoreet gestas
                        neque undo luctus feugiat lectus laoreet gestas neque
                      </li>
                      <li>
                        <span className="indigo-color">24/7 Free Support</span>{" "}
                        - gravida lectus suscipit gestas luctus
                      </li>
                    </ul>
                    {/* Pricing Table Button */}
                    <div className="text-center">
                      <a href="#" className="btn btn-primary tra-black-hover">
                        Upgrade To PRO
                      </a>
                    </div>
                  </div>
                </div>{" "}
                {/* END PRICE PLAN PRO */}
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
          </section>{" "}
          {/* END PRICING-2 */}
          {/* VIDEO-3
			============================================= */}
          <section
            id="video-3"
            className="bg-indigo bg-map wide-60 video-section division"
          >
            <div className="container white-color">
              <div className="row d-flex align-items-center">
                {/* VIDEO TEXT */}
                <div className="col-lg-5">
                  <div className="video-txt mb-40">
                    {/* Title */}
                    <h4 className="h4-lg">
                      They are always forthcoming, coming up with good solutions
                      for us to improve processes
                    </h4>
                    {/* Text */}
                    <p>
                      An enim nullam tempor sapien gravida donec enim ipsum
                      porta justo integer at odio velna vitae auctor integer
                      congue magna at pretium purus pretium ligula rutrum luctus
                      risus ultrice luctus in ligula blandit congue magna
                    </p>
                    {/* QUOTE */}
                    <div className="quote">
                      {/* Quote Avatar */}
                      <div className="quote-avatar">
                        <img src="images/quote-avatar.jpg" alt="quote-avatar" />
                      </div>
                      {/* Quote Author */}
                      <div className="quote-author">
                        <h5 className="h5-xs">Sean Mcmarthy </h5>
                        <span>Founder of Metreex</span>
                      </div>
                    </div>
                  </div>
                </div>{" "}
                {/* END VIDEO TEXT */}
                {/* VIDEO LINK */}
                <div className="col-lg-7 mb-40">
                  <div className="video-link text-center">
                    {/* Change the link HERE!!! */}
                    <div className="play-btn play-btn-primary text-center">
                      <a
                        className="video-popup3 video-play-button"
                        href="https://www.youtube.com/embed/0gv7OC9L2s8"
                      >
                        <span />
                      </a>
                      {/* Preview Image */}
                      <img
                        className="img-fluid"
                        src="images/video-3.jpg"
                        alt="video-preview"
                      />
                    </div>
                  </div>
                </div>{" "}
                {/* END VIDEO LINK */}
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END VIDEO-3 */}
          {/* FAQs-1
			============================================= */}
          <section id="faqs-1" className="wide-100 faqs-section division">
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div
                  className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {/* Title */}
                  <h3 className="h3-lg indigo-color">
                    Frequently Asked Questions
                  </h3>
                  {/* Text */}
                  <p className="p-lg">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus, blandit posuere and ligula
                    varius magna a porta elementum massa risus
                  </p>
                </div>
              </div>{" "}
              {/* END SECTION TITLE */}
              {/* QUESTIONS HOLDER */}
              <div className="row">
                <div className="col-lg-10 offset-lg-1">
                  <div id="accordion" role="tablist">
                    {/* QUESTION #1 */}
                    <div className="card wow fadeInUp" data-wow-delay="0.4s">
                      {/* Question */}
                      <div className="card-header" role="tab" id="headingOne">
                        <h5 className="h5-sm indigo-color">
                          <a
                            data-toggle="collapse"
                            href="#collapseOne"
                            role="button"
                            aria-expanded="true"
                            aria-controls="collapseOne"
                          >
                            Do you require a contract?
                          </a>
                        </h5>
                      </div>
                      {/* Answer */}
                      <div
                        id="collapseOne"
                        className="collapse show"
                        role="tabpanel"
                        aria-labelledby="headingOne"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          {/* Text */}
                          <p>
                            Aliqum mullam blandit tempor sapien gravida donec
                            ipsum, at porta justo. Velna vitae and congue auctor
                            magna nihil impedit ligula risus. Mauris donec ociis
                            et magnis sapien etiam sapien sagittis congue tempor
                            gravida donec enim ipsum porta justo integer at odio
                            velna placerat purus, aliquet elementum massa mollis
                            risus lectus porta rutrum magna dignissim, porttitor
                            hendrerit
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END QUESTION #1 */}
                    {/* QUESTION #2 */}
                    <div className="card wow fadeInUp" data-wow-delay="0.6s">
                      {/* Question */}
                      <div className="card-header" role="tab" id="headingTwo">
                        <h5 className="h5-sm indigo-color">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseTwo"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseTwo"
                          >
                            Should I ask to see law firm website ranking proof?
                          </a>
                        </h5>
                      </div>
                      {/* Answer */}
                      <div
                        id="collapseTwo"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingTwo"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          <p>
                            Maecenas gravida porttitor nunc, quis vehicula magna
                            luctus tempor. Quisque vel laoreet turpis. Urna
                            augue, viverra a augue eget, dictum tempor diam. Sed
                            pulvinar consectetur nibh, vel imperdiet dui varius
                            viverra. Pellentesque ac massa lorem. Fusce eu
                            cursus est. Fusce non nulla vitae massa placerat
                            vulputate vel a purus
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END QUESTION #2 */}
                    {/* QUESTION #3 */}
                    <div className="card wow fadeInUp" data-wow-delay="0.8s">
                      {/* Question */}
                      <div className="card-header" role="tab" id="headingThree">
                        <h5 className="h5-sm indigo-color">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseThree"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseThree"
                          >
                            Do you provide details of what SEO work you will be
                            doing?
                          </a>
                        </h5>
                      </div>
                      {/* Answer */}
                      <div
                        id="collapseThree"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingThree"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          {/* Text */}
                          <p>
                            Nullam rutrum eget nunc varius etiam mollis risus
                            congue aliquam etiam sapien egestas, congue gestas
                            posuere cubilia congue ipsum mauris lectus laoreet
                            gestas neque vitae auctor eros dolor luctus odio
                            placerat magna cursus
                          </p>
                          {/* List */}
                          <ul className="txt-list">
                            <li>
                              Vitae auctor integer congue magna at pretium
                            </li>
                            <li>
                              Integer congue magna at pretium purus pretium
                              ligula rutrum and luctus risus eros dolor auctor
                              ipsum blandit purus vehicula magna and luctus
                              tempor quisque
                            </li>
                            <li>
                              Sagittis congue augue egestas volutpat egestas
                              magna donec ociis et magnis ipsum porta justo
                              integer velna purus ehicula magna luctus vel
                              laoreet turpis
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END QUESTION #3 */}
                    {/* QUESTION #4 */}
                    <div className="card wow fadeInUp" data-wow-delay="1s">
                      {/* Question */}
                      <div className="card-header" role="tab" id="headingFour">
                        <h5 className="h5-sm indigo-color">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseFour"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseFour"
                          >
                            What is on-page search engine optimization?
                          </a>
                        </h5>
                      </div>
                      {/* Answer */}
                      <div
                        id="collapseFour"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingFour"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          {/* Text */}
                          <p>
                            Curabitur ac dapibus libero. Quisque eu tristique
                            neque. Phasellus blandit tristique justo ut aliquam.
                            Aliquam vitae molestie nunc. Quisque sapien justo,
                            aliquet non molestie sed purus, venenatis nec.
                            Aliquam eget lacinia elit. Vestibulum tincidunt
                            tincidunt massa, et porttitor
                          </p>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END QUESTION #4 */}
                    {/* QUESTION #5 */}
                    <div className="card wow fadeInUp" data-wow-delay="1.2s">
                      {/* Question */}
                      <div className="card-header" role="tab" id="headingFive">
                        <h5 className="h5-sm indigo-color">
                          <a
                            className="collapsed"
                            data-toggle="collapse"
                            href="#collapseFive"
                            role="button"
                            aria-expanded="false"
                            aria-controls="collapseFive"
                          >
                            How much do your monthly services cost?
                          </a>
                        </h5>
                      </div>
                      {/* Answer */}
                      <div
                        id="collapseFive"
                        className="collapse"
                        role="tabpanel"
                        aria-labelledby="headingFive"
                        data-parent="#accordion"
                      >
                        <div className="card-body">
                          {/* List */}
                          <ul className="txt-list">
                            <li>
                              Vitae auctor integer congue magna at pretium
                            </li>
                            <li>
                              Integer congue magna at pretium purus pretium
                              ligula rutrum and luctus risus eros dolor auctor
                              ipsum blandit purus vehicula magna and luctus
                              tempor quisque
                            </li>
                            <li>
                              Sagittis congue augue egestas volutpat egestas
                              magna donec ociis et magnis ipsum porta justo
                              integer velna purus ehicula magna luctus vel
                              laoreet turpis
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>{" "}
                    {/* END QUESTION #5 */}
                  </div>{" "}
                  {/* END ACCORDION */}
                </div>{" "}
                {/* End col-x */}
              </div>{" "}
              {/* END QUESTIONS HOLDER */}
              {/* MORE QUESTIONS BUTTON */}
              <div className="row">
                <div className="col-md-12 text-center more-questions">
                  <h5>
                    Still have a question?{" "}
                    <a href="contacts.html" className="primary-color">
                      Ask your question here
                    </a>
                  </h5>
                </div>
              </div>
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END FAQs-1 */}
          {/* CONTENT-8
			============================================= */}
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
                      src="images/image-10.png"
                      alt="content-image"
                    />
                  </div>
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END CONTENT-8 */}
          {/* BLOG-1
			============================================= */}
          <section id="blog-1" className="wide-60 blog-section division">
            <div className="container">
              {/* SECTION TITLE */}
              <div className="row">
                <div
                  className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
                  data-wow-delay="0.2s"
                >
                  {/* Title 	*/}
                  <h3 className="h3-lg indigo-color">
                    Our Insights And Latest News
                  </h3>
                  {/* Text */}
                  <p className="p-lg">
                    Aliquam a augue suscipit, luctus neque purus ipsum neque
                    dolor primis libero tempus, blandit posuere and ligula
                    varius magna a porta elementum massa risus
                  </p>
                </div>
              </div>{" "}
              {/* END SECTION TITLE */}
              {/* BLOG POSTS */}
              <div className="row">
                {/* BLOG POST #1 */}
                <div id="blog_post-1" className="col-md-6 col-lg-4">
                  <div className="blog-post wow fadeInUp" data-wow-delay="0.4s">
                    {/* BLOG POST IMAGE */}
                    <div className="blog-post-img">
                      <img
                        className="img-fluid"
                        src="images/blog/post-1-img.jpg"
                        alt="blog-post-image"
                      />
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className="blog-post-txt">
                      {/* Post Tag */}
                      <p className="post-read">
                        <i className="far fa-clock" /> - 12 min read
                      </p>
                      {/* Post Link */}
                      <h5 className="h5-md indigo-color">
                        <a href="single-post.html">
                          Quisque sapien justo, aliquet non molestie a purus
                          venenatis
                        </a>
                      </h5>
                      {/* Text */}
                      <p className="grey-color">
                        Fringilla risus luctus mauris auctor purus euismod and
                        pretium purus pretium...
                      </p>
                      {/* Post Data */}
                      <p className="post-data">
                        by <a href="#">Sean McMarthy</a> - 24 minutes ago
                      </p>
                      <p className="post-tag">
                        <a href="#">#SocialMedia</a>, <a href="#">#Marketing</a>
                      </p>
                    </div>{" "}
                    {/* END BLOG POST TEXT */}
                  </div>
                </div>{" "}
                {/* END  BLOG POST #1 */}
                {/* BLOG POST #2 */}
                <div id="blog_post-2" className="col-md-6 col-lg-4">
                  <div className="blog-post wow fadeInUp" data-wow-delay="0.6s">
                    {/* BLOG POST IMAGE */}
                    <div className="blog-post-img">
                      <img
                        className="img-fluid"
                        src="images/blog/post-2-img.jpg"
                        alt="blog-post-image"
                      />
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className="blog-post-txt">
                      {/* Post Tag */}
                      <p className="post-read">
                        <i className="far fa-clock" /> - 8 min read
                      </p>
                      {/* Post Link */}
                      <h5 className="h5-md indigo-color">
                        <a href="single-post.html">
                          Tempor sapien donec gravida ipsum a porta justo vitae
                        </a>
                      </h5>
                      {/* Text */}
                      <p className="grey-color">
                        Fringilla risus luctus mauris auctor purus euismod and
                        pretium purus pretium...
                      </p>
                      {/* Post Data */}
                      <p className="post-data">
                        by <a href="#">Ben Markton</a> - January 27, 2019
                      </p>
                      <p className="post-tag">
                        <a href="#">#Advice</a>, <a href="#">#LinkBuilding</a>
                      </p>
                    </div>{" "}
                    {/* END BLOG POST TEXT */}
                  </div>
                </div>{" "}
                {/* END  BLOG POST #2 */}
                {/* BLOG POST #3 */}
                <div id="blog_post-3" className="col-md-6 col-lg-4">
                  <div className="blog-post wow fadeInUp" data-wow-delay="0.8s">
                    {/* BLOG POST IMAGE */}
                    <div className="blog-post-img">
                      <img
                        className="img-fluid"
                        src="images/blog/post-3-img.jpg"
                        alt="blog-post-image"
                      />
                    </div>
                    {/* BLOG POST TEXT */}
                    <div className="blog-post-txt">
                      {/* Post Tag */}
                      <p className="post-read">
                        <i className="far fa-clock" /> - 21 min read
                      </p>
                      {/* Post Link */}
                      <h5 className="h5-md indigo-color">
                        <a href="single-post.html">
                          Dapibus libero quisque eu tristique neque blandit
                          tristique
                        </a>
                      </h5>
                      {/* Text */}
                      <p className="grey-color">
                        Fringilla risus luctus mauris auctor purus euismod and
                        pretium purus pretium...
                      </p>
                      {/* Post Data */}
                      <p className="post-data">
                        by <a href="#">Caroline</a> - December 27, 2019
                      </p>
                      <p className="post-tag">
                        <a href="#">#LocalSEO</a>, <a href="#">#Marketing</a>,{" "}
                        <a href="#">#PPC</a>
                      </p>
                    </div>{" "}
                    {/* END BLOG POST TEXT */}
                  </div>
                </div>{" "}
                {/* END  BLOG POST #3 */}
              </div>{" "}
              {/* END BLOG POSTS */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END BLOG-1 */}
          {/* CALL TO ACTION-4
			============================================= */}
          <section id="cta-4" className="bg-06 cta-section division">
            <div className="container white-color">
              <div className="row d-flex align-items-center">
                {/* CALL TO ACTION TEXT */}
                <div className="col-lg-8">
                  <div className="cta-txt">
                    {/* Title */}
                    <h3 className="h3-xs">Improve your search ranking now!</h3>
                    {/* Text */}
                    <p className="p-md">
                      Donec vel sapien augue integer urna vel turpis cursus
                      porta, mauris sed augue luctus dolor velna auctor congue
                      tempus magna integer
                    </p>
                  </div>
                </div>{" "}
                {/* END CALL TO ACTION TEXT */}
                {/* CALL TO ACTION BUTTON */}
                <div className="col-lg-4">
                  <div className="cta-btn text-right">
                    <a
                      href="pricing.html"
                      className="btn btn-md btn-primary tra-white-hover"
                    >
                      Get Started Now
                    </a>
                  </div>
                </div>
              </div>{" "}
              {/* End row */}
            </div>{" "}
            {/* End container */}
          </section>{" "}
          {/* END CALL TO ACTION-4 */}
        </div>
      </>
    </>
  );
};

export default NavBar;
