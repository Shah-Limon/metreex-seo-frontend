import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper/modules";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";

const AboutPage = () => {
  const { id } = useParams();

  const [about, setAbout] = useState([]);
  const [choose, setChoose] = useState([]);
  const [team, setTeam] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about/${id}`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/why-choose/${id}`)
      .then((res) => res.json())
      .then((info) => setChoose(info));
  }, [id]);

  useEffect(() => {
    fetch(`http://localhost:5000/teams`)
      .then((res) => res.json())
      .then((info) => setTeam(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/team-title/`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);
  return (
    <>
      <>
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
                    src="images/image-01.png"
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
                  <h4 className="h4-xl">
                    We're providing the best SEO services for your website
                  </h4>
                  {/* Text */}
                  <p>
                    An enim nullam tempor sapien gravida donec pretium ipsum
                    porta justo integer at odio velna vitae auctor integera
                    congue magna at purus pretium ligula rutrum luctus ultrice a
                    gravida lectus suscipit gestas magna suscipit luctus undo
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
              {/* END ABOUT TEXT */}
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </section>
        <section
          id="services-2"
          className="bg-lightgrey wide-30 services-section division"
        >
          <div className="container">
            {/* SECTION TITLE */}
            <div className="row">
              <div
                className="col-lg-10 offset-lg-1 section-title wow fadeInUp"
                data-wow-delay="0.2s"
              >
                {/* Title 	*/}
                <h3 className="h3-lg">Custom SEO Services – Our Specialty</h3>
                {/* Text */}
                <p className="p-lg">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus, blandit posuere and ligula varius magna
                  a porta elementum massa risus
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
                    <h5 className="h5-md">Local SEO</h5>
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
                    <h5 className="h5-md">E-Commerce SEO</h5>
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
                    <h5 className="h5-md">Advanced Analytics</h5>
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
                    <h5 className="h5-md">PPC Management</h5>
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
        </section>
        <section id="about-2" className="wide-60 about-section division">
          <div className="container">
            <div className="row d-flex align-items-center">
              {/* ABOUT TEXT */}
              <div className="col-md-7 col-lg-6">
                <div
                  className="txt-block pc-25 mb-40 wow fadeInLeft"
                  data-wow-delay="0.4s"
                >
                  {/* Title */}
                  <h4 className="h4-xl">
                    Get more sales with SEO, PPC, and Email Marketing
                  </h4>
                  {/* List */}
                  <ul className="txt-list">
                    <li>
                      Vitae auctor integer congue magna at pretium blandit porta
                      justo integer. Feugiat a ligula rutrum luctus primis
                      ultrice
                    </li>
                    <li>
                      Integer congue magna at pretium purus a pretium ligula
                      rutrum and luctus risus eros dolor auctor ipsum blandit
                      purus vehicula magna luctus tempor quisque
                    </li>
                  </ul>
                  {/* SMALL STATISTIC */}
                  <div className="small-statistic">
                    <div className="row">
                      {/* STATISTIC BLOCK #1 */}
                      <div className="col-sm-6">
                        <div className="statistic-block">
                          <h5 className="statistic-number primary-color">
                            4,<span className="count-element">379</span>
                          </h5>
                          <p>Websites Improved</p>
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
                          <p>Customer Satisfaction</p>
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
              {/* END ABOUT TEXT */}
              {/* ABOUT IMAGE */}
              <div className="col-md-5 col-lg-6">
                <div
                  className="img-block pl-25 wow fadeInRight"
                  data-wow-delay="0.6s"
                >
                  <img
                    className="img-fluid"
                    src="images/image-02.png"
                    alt="about-image"
                  />
                </div>
              </div>
            </div>{" "}
            {/* End row */}
          </div>{" "}
          {/* End container */}
        </section>
        <section id="tabs-1" className="wide-60 tabs-section division">
          <div className="container">
            {/* TABS NAVIGATION */}
            <div className="row">
              <div className="col-lg-12 text-center">
                <div className="tabs-nav clearfix">
                  <ul className="tabs-1 primary-tabs">
                    {/* TAB-1 LINK */}
                    <li className="tab-link displayed" data-tab="tab-1">
                      Pay-Per-Click Advertising
                    </li>
                    {/* TAB-2 LINK */}
                    <li className="tab-link" data-tab="tab-2">
                      Social Media Marketing
                    </li>
                    {/* TAB-3 LINK */}
                    <li className="tab-link" data-tab="tab-3">
                      Search Engine Optimization
                    </li>
                  </ul>
                </div>
              </div>
            </div>{" "}
            {/* END TABS NAVIGATION */}
            {/* TABS CONTENT */}
            <div className="tabs-content">
              {/* TAB-1 CONTENT */}
              <div id="tab-1" className="tab-content displayed">
                <div className="row d-flex align-items-center">
                  {/* IMAGE BLOCK */}
                  <div className="col-md-5 col-lg-6">
                    <div className="img-block pr-25 mb-40">
                      <img
                        className="img-fluid"
                        src="images/image-05.png"
                        alt="content-image"
                      />
                    </div>
                  </div>
                  {/* TEXT BLOCK */}
                  <div className="col-md-7 col-lg-6">
                    <div className="txt-block pc-25 mb-40">
                      {/* Title */}
                      <h4 className="h4-xl">
                        We will help your business achieve predictable growth
                      </h4>
                      {/* Text */}
                      <p>
                        An enim nullam tempor sapien gravida donec enim ipsum
                        porta justo integer at odio velna vitae auctor integer
                        congue magna at pretium purus pretium ligula rutrum and
                        luctus risus ultrice
                      </p>
                      {/* List */}
                      <ul className="txt-list mb-15">
                        <li>
                          Integer congue magna at pretium purus pretium ligula
                          rutrum and luctus risus eros dolor auctor ipsum
                          blandit purus vehicula magna and luctus tempor quisque
                          integer congue magna
                        </li>
                        <li>
                          Sagittis congue augue egestas volutpat egestas magna
                          donec ociis et magnis ipsum porta justo integer velna
                          purus
                        </li>
                      </ul>
                      {/* Button */}
                      <a
                        href="services.html"
                        className="btn btn-tra-grey primary-hover"
                      >
                        Learn More
                      </a>
                    </div>
                  </div>{" "}
                  {/* END TEXT BLOCK */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END TAB-1 CONTENT */}
              {/* TAB-2 CONTENT */}
              <div id="tab-2" className="tab-content">
                <div className="row d-flex align-items-center">
                  {/* IMAGE BLOCK */}
                  <div className="col-md-5 col-lg-6">
                    <div className="img-block pr-25 mb-40">
                      <img
                        className="img-fluid"
                        src="images/image-03.png"
                        alt="content-image"
                      />
                    </div>
                  </div>
                  {/* TEXT BLOCK */}
                  <div className="col-md-7 col-lg-6">
                    <div className="txt-block pc-25 mb-40">
                      {/* Title */}
                      <h4 className="h4-xl">
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
                          <i className="fas fa-check grey-color" />{" "}
                          <span>
                            Vitae auctor integer congue magna at pretium
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check grey-color" />{" "}
                          <span>
                            Integer congue magna and pretium purus ligula
                          </span>
                        </li>
                        <li>
                          <i className="fas fa-check grey-color" />{" "}
                          <span>
                            Sagittis congue augue egestas volutpat egestas
                          </span>
                        </li>
                      </ul>
                      {/* Button */}
                      <a
                        href="case-studies-1.html"
                        className="btn btn-md btn-primary tra-black-hover"
                      >
                        Our Case Studies
                      </a>
                    </div>
                  </div>{" "}
                  {/* END TEXT BLOCK */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END TAB-2 CONTENT */}
              {/* TAB-3 CONTENT */}
              <div id="tab-3" className="tab-content">
                <div className="row d-flex align-items-center">
                  {/* IMAGE BLOCK */}
                  <div className="col-md-5 col-lg-6">
                    <div className="img-block pr-25 mb-40">
                      <img
                        className="img-fluid"
                        src="images/image-04.png"
                        alt="content-image"
                      />
                    </div>
                  </div>
                  {/* TEXT BLOCK */}
                  <div className="col-md-7 col-lg-6">
                    <div className="txt-block pc-25 mb-40">
                      {/* Title */}
                      <h4 className="h4-xl">
                        We're providing the best SEO services for your website
                      </h4>
                      {/* Text */}
                      <div className="cbox-1">
                        <i className="fas fa-check grey-color" />
                        <div className="cbox-1-txt">
                          <p>
                            Integer congue magna at pretium purus pretium ligula
                            rutrum and luctus risus eros dolor auctor ipsum
                            blandit purus vehicula magna and luctus tempor
                            quisque turpis magna ligula
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
                            auctor integer congue magna pretium purus pretium
                            magnis nulla dolor sapien
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
                            blandit purus vehicula magna and luctus tempor
                            quisque turpis magna ligula
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>{" "}
                  {/* END TEXT BLOCK */}
                </div>{" "}
                {/* End row */}
              </div>{" "}
              {/* END TAB-3 CONTENT */}
            </div>{" "}
            {/* END TABS CONTENT */}
          </div>{" "}
          {/* End container */}
        </section>
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
                <h3 className="h3-lg">Reviews From Our Customers</h3>
                {/* Text */}
                <p className="p-lg">
                  Aliquam a augue suscipit, luctus neque purus ipsum neque dolor
                  primis libero tempus, blandit posuere and ligula varius magna
                  a porta elementum massa risus
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
                      Etiam sapien sem at sagittis congue an augue massa varius
                      egestas and suscipit magna and tempus and aliquet porta
                      vitae purus congue a cursus magna cubilia augue vitae
                      laoreet
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
                        <h5 className="h5-xs">Sean McMarthy</h5>
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
                      luctus and donec diam ociis ultrice ligula magna suscipit
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
                        <h5 className="h5-xs">Evelyn Martinez</h5>
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
                      augue egestas et ultrice vitae undo purus and diam integer
                      congue at magna ligula an egestas magna suscipit lectus
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
                        <h5 className="h5-xs">Joel Peterson</h5>
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
                      Mauris donec ociis magnis sapien etiam sapien congue undo
                      augue pretium purus ligula lectus aenean magna and mauris
                      lectus undo laoreet tempor egestas magna vitae laoreet
                      augue
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
                        <h5 className="h5-xs">Michael Deal</h5>
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
                        <h5 className="h5-xs">Mark Paterson</h5>
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
                        <h5 className="h5-xs">Mark Hodges</h5>
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
                      Augue egestas volutpat egestas augue purus cubilia laoreet
                      magna suscipit luctus and dolor blandit vitae purus diam
                      tempus undo aliquet porta rutrum gestas egestas
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
                        <h5 className="h5-xs">Aaron Wall</h5>
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
                        <h5 className="h5-xs">Tosha Wisdom</h5>
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
        </section>
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
        </div>
      </>
    </>
  );
};

export default AboutPage;
