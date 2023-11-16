import React from "react";
import { useState } from "react";
import { useEffect } from "react";

import { Link, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const Setting = () => {
  const { id } = useParams();
  const [contact, setContact] = useState([]);

  useEffect(() => {
    fetch(`http://localhost:5000/contact/`)
      .then((res) => res.json())
      .then((info) => setContact(info));
  }, [id]);
  return (
    <>
      <section
        className="project s2 payment-setting"
        data-aos="fade-up"
        data-aos-duration={3000}
      >
        <div className="shape right" />
        <div className="container">
          <BackToAdminDashboard></BackToAdminDashboard>
          <div className="row mt-15">
            {/* <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting-general/" className="h5 title">
                    General Setting
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting-footer" className="h5 title">
                    Footer Setting
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting-payment" className="h5 title">
                    Payment Setting
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  <Link to="/admin/setting-homepage" className="h5 title">
                    HomePage Setting
                  </Link>
                </div>
              </div>
            </div> */}
            <div className="row">
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/setting-general/">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/working-concept-illustration_114360-330.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />

                      <div className="project-description white-color">
                        <h3 className="p-md"> Logo Setting</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>

              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/setting-footer">
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/operating-system-upgrade-concept-illustration_114360-8293.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />

                      <div className="project-description white-color">
                        <h3 className="p-md"> Footer Setting</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/setting-payment">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/payment-information-concept-illustration_114360-4064.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md">Payment Setting</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/setting-homepage">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/web-page-visualization-protocol-procedure-dynamic-software-workflow-full-stack-development-markup-administrate-system-driver-shared-memory-vector-isolated-concept-metaphor-illustration_335657-4299.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md">HomePage Setting</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/subscription-email/">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/contact-center-abstract-concept_335657-3032.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md"> Contact Page Setting</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
              <div className="col-md-6 col-lg-3">
                <div className="project-2 wow fadeInUp" data-wow-delay="0.4s">
                  <Link to="/admin/contact-messages/">
                    {/* Project Preview */}
                    <div className="hover-overlay">
                      <img
                        className="img-fluid"
                        src="https://img.freepik.com/free-vector/software-requirement-description-abstract-concept-illustration_335657-3813.jpg"
                        alt="project-preview"
                      />
                      <div className="item-overlay" />
                      {/* Project Description */}
                      <div className="project-description white-color">
                        <h3 className="p-md"> Features Page Setting</h3>
                      </div>
                    </div>
                  </Link>
                </div>
              </div>
            </div>

            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  {contact.map((e) => (
                    <Link
                      to={`/admin/edit-contact-page/${e._id}`}
                      className="h5 title"
                    >
                      Contact Page Setting
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            <div className="col-xl-3 col-md-6">
              <div className="project-box">
                <div className="image"></div>
                <div className="content">
                  {contact.map((e) => (
                    <Link to="/admin/feature-page" className="h5 title">
                      Features Page Setting
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Setting;
