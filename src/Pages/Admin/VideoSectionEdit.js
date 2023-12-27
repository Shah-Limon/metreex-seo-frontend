import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import BackToAdminDashboard from "./BackToAdminDashboard";

const VideoSectionEdit = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [banner, setBanner] = useState([]);
  const [imageURL, setImageURL] = useState("");

  useEffect(() => {
    fetch(`https://metreex-seo-9a225b1c6d1e.herokuapp.com/video-sections`)
      .then((res) => res.json())
      .then((info) => {
        setBanner(info);
        if (info.length > 0) {
          setImageURL(info[0].ctaImage || ""); // Set default value to an empty string if ctaImage is null
        }
      });
  }, [id]);

  const handleBanner = (event) => {
    event.preventDefault();
    const videoHeading = event.target.videoHeading.value;
    const youtubeLink = event.target.youtubeLink.value;
    const description = event.target.description.value;

    const updateBanner = {
      videoHeading,
      description,
      youtubeLink,
      ctaImage: imageURL,
    };

    const url = `https://metreex-seo-9a225b1c6d1e.herokuapp.com/video-section/${id}`;
    fetch(url, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updateBanner),
    })
      .then((res) => res.json())
      .then((result) => {
        navigate("/admin/setting-homepage/");
      });
  };

  const handleImageUpload = async (event) => {
    const file = event.target.files[0];
    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await fetch(
        "https://api.imgbb.com/1/upload?key=700a0a5acaa1284b2c712502fcb2fe23",
        {
          method: "POST",
          body: formData,
        }
      );

      const data = await response.json();
      if (data && data.data && data.data.url) {
        setImageURL(data.data.url);
      } else {
        console.error("Invalid response from ImgBB API");
      }
    } catch (error) {
      console.error("Image upload error:", error);
    }
  };

  return (
    <div>
      <BackToAdminDashboard />
      <form className="form mb-15 seo-form" onSubmit={handleBanner}>
        {banner.map((e) => (
          <div className="container" key={e._id}>
            <div className="col-sm">
              <label className="mt-1">Enter Banner Heading</label>
              <div className="form-group mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Enter Banner Heading"
                  name="videoHeading"
                  defaultValue={e.videoHeading}
                />
              </div>
            </div>
            <div className="col-sm">
              <label className="mt-1">Enter Description</label>
              <div className="form-group mb-3">
                <textarea
                  type="text"
                  style={{ width: "100%", height: "100px" }}
                  className="form-control"
                  placeholder="Enter Description"
                  name="description"
                  defaultValue={e.description}
                />
              </div>
            </div>

            <div className="col-sm">
              <label className="mt-1">Upload Background Image</label>
              <div className="form-group mb-3">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="form-control"
                />
              </div>
              {imageURL && (
                <img
                  src={imageURL}
                  alt="Banner Preview"
                  style={{ maxWidth: "50%", maxHeight: "200px" }}
                />
              )}
            </div>

            <div className="col-sm-4 mt-30">
              <button
                type="submit"
                className="btn btn-md btn-primary tra-black-hover"
              >
                <span>Update</span>
              </button>
            </div>
          </div>
        ))}
      </form>
    </div>
  );
};

export default VideoSectionEdit;
