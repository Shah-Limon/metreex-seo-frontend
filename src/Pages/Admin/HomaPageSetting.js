import React, { useEffect, useState } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useParams } from "react-router-dom";
import auth from "../../firebase.init";
import BackToAdminDashboard from "./BackToAdminDashboard";

const HomaPageSetting = () => {
  const { id } = useParams();
  const [user] = useAuthState(auth);

  const [about, setAbout] = useState([]);
  const [banner, setBanner] = useState([]);
  const [speciality, SetSpeciality] = useState([]);
  const [choose, SetChoose] = useState([]);
  const [road, SetRoad] = useState([]);
  const [title, setTitle] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/about`)
      .then((res) => res.json())
      .then((info) => setAbout(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/banner/`)
      .then((res) => res.json())
      .then((info) => setBanner(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/speciality/`)
      .then((res) => res.json())
      .then((info) => SetSpeciality(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/why-choose/`)
      .then((res) => res.json())
      .then((info) => SetChoose(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/road/`)
      .then((res) => res.json())
      .then((info) => SetRoad(info));
  }, []);
  useEffect(() => {
    fetch(`http://localhost:5000/team-title`)
      .then((res) => res.json())
      .then((info) => setTitle(info));
  }, []);

  return (
    <div>
      <section className="participants payment-setting">
        <div className="container">
          <BackToAdminDashboard></BackToAdminDashboard>
          <div className="row mt-15">
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                {banner.map((e) => (
                  <Link to={`/admin/edit-banner-option/${e._id}`}>
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/purple-labels-set_1146-79.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md"> Banner Edit</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                <Link to="/admin/slider-banner/">
                  {/* Project Preview */}
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/purple-labels-set_1146-79.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                    {/* Project Description */}
                    <div className="project-description white-color">
                      <h3 className="p-md">Brand Slider Options</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                <Link to="/admin/feature-page">
                  {/* Project Preview */}
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/purple-labels-set_1146-79.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                    {/* Project Description */}
                    <div className="project-description white-color">
                      <h3 className="p-md">Feature One Options</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                <Link to="/admin/solution-lists">
                  {/* Project Preview */}
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/purple-labels-set_1146-79.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                    {/* Project Description */}
                    <div className="project-description white-color">
                      <h3 className="p-md">Solutions List</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                <Link to="/admin/counter-option">
                  {/* Project Preview */}
                  <div className="hover-overlay">
                    <img
                      className="img-fluid"
                      src="https://img.freepik.com/free-vector/purple-labels-set_1146-79.jpg"
                      alt="project-preview"
                    />
                    <div className="item-overlay" />
                    {/* Project Description */}
                    <div className="project-description white-color">
                      <h3 className="p-md">Counter Option</h3>
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                {about.map((e) => (
                  <Link to={`/admin/about-edit/${e._id}`}>
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/purple-labels-set_1146-79.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md">About Option</h3>
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* old */}

            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Our Speciality Option</h5>

                  {speciality.map((e) => (
                    <Link
                      to={`/admin/speciality-edit/${e._id}`}
                      className="action-btn"
                    >
                      <span>Edit</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Why Choose Option</h5>

                  {choose.map((e) => (
                    <Link
                      to={`/admin/why-choose-edit/${e._id}`}
                      className="action-btn"
                    >
                      <span>Edit</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Road Map Option</h5>

                  {road.map((e) => (
                    <Link
                      to={`/admin/road-edit/${e._id}`}
                      className="action-btn"
                    >
                      <span>Edit</span>
                    </Link>
                  ))}
                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Team Members Option</h5>

                  <Link to={`/admin/team/`} className="action-btn">
                    <span>Edit</span>
                  </Link>

                  <hr></hr>
                </div>
              </div>
            </div>
            <div className="col-lg-3">
              <div className="block-text center">
                <div className="col">
                  <h5 className="heading">Testimonials Option</h5>

                  <Link to="/admin/testimonials" className="action-btn">
                    <span>Edit</span>
                  </Link>

                  <hr></hr>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomaPageSetting;
