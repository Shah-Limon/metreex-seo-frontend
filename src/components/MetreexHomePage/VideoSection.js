import React from 'react';

const VideoSection = () => {
    return (
        <>
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
                        <img src="https://jthemes.net/themes/html/metreex/files/images/quote-avatar.jpg" alt="quote-avatar" />
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
                        src="https://jthemes.net/themes/html/metreex/files/images/video-3.jpg"
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
          </section>  
        </>
    );
};

export default VideoSection;