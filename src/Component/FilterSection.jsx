import React from "react";
import "./FilterSection.css";
// import Post from "./Post";
const FilterSection = () => {
  return (
    <>
      <div className="f-sections">
        <div className="f-setion">
          <button
            style={{
              margin: "40px",
              width: "54px",
              cursor: "pointer",
            }}
          >
            + Create Space
          </button>

          <div className="f-section">
            <img
              src="https://www.shutterstock.com/image-photo/surreal-image-african-elephant-wearing-260nw-1365289022.jpg"
              alt=""
            />
            <p>Elephant Space</p>
          </div>
          <div className="f-section">
            <img
              src="https://h5p.org/sites/default/files/h5p/content/1209180/images/file-6113d5f8845dc.jpeg"
              alt=""
            />
            <p>Tiger Space</p>
          </div>
          <div className="f-section">
            <img
              src="https://cdn.pixabay.com/photo/2023/04/15/17/08/bernese-mountain-dog-7928156_1280.jpg"
              alt=""
            />
            <p>Dog Lover</p>
          </div>
          <div className="f-section">
            <img
              src="https://cdn.pixabay.com/photo/2020/03/03/08/19/trash-4897847_1280.jpg"
              alt=""
            />
            <p>Pollution Space</p>
          </div>
          <div className="f-section">
            <img
              src="https://cdn.pixabay.com/photo/2023/04/19/21/37/bird-7938627__480.jpg"
              alt=""
            />
            <p>Bird Lover</p>
          </div>
          <div className="f-section">
            <img
              src="https://cdn.pixabay.com/photo/2023/04/16/09/49/waterfall-7929685__480.jpg"
              alt=""
            />
            <p>Water Fall Space</p>
          </div>
          <div className="f-section">
            <img
              src="https://cdn.pixabay.com/photo/2023/04/15/10/48/desert-7927409__480.jpg"
              alt=""
            />
            <p> Red Desert Rock</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default FilterSection;
