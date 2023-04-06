import React from "react";
import { Link } from "react-router-dom";

import { CiDeliveryTruck } from "react-icons/ci";

const DistributorLink = () => {
  return (
    <>
      <div className="text-center mt-5 mb-4">
        <h3 className="text-center">Join Our Distributorship Community</h3>
      </div>
      <div className="text-center">
        <Link to="/distributor" className="btn btn-warning mt-4 mb-3">
          Become A distributor <CiDeliveryTruck />
        </Link>
      </div>
    </>
  );
};
export default DistributorLink;
