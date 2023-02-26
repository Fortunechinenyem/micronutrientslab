import React from "react";
import { Link } from "react-router-dom";

function CategoryBar() {
  //console.log("CategoryBar rendered");
  return (
    <div className=" mt-3 mb-5 social-list" id="categoryBar">
      <div className="d-flex flex-wrap">
        <Link to="/menu">
          <button
            type="button"
            className="btn btn-outline-success rounded-pill btn-sm m-2 mx-1"
          >
            Lifestyle
          </button>
        </Link>
        <Link to="/menu">
          <button
            type="button"
            className="btn btn-outline-warning rounded-pill btn-sm m-2 mx-1"
          >
            Nutrition
          </button>
        </Link>
        <Link to="/menu">
          <button
            type="button"
            className="btn btn-outline-danger rounded-pill btn-sm m-2 mx-1"
          >
            Campaign
          </button>
        </Link>

        <Link to="menu">
          <button
            type="button"
            className="btn btn-outline-dark btn-sm rounded-pill disabled m-2 mx-1"
          >
            Gist
          </button>
        </Link>
      </div>
    </div>
  );
}

export default React.memo(CategoryBar);
