import React from "react";
import { useSelector } from "react-redux";
import { selectPersonalInfo } from "../../../redux/cv/cv.slice";

import "./preview-sidebar.styles.scss";

const PreviewSidebar = () => {
  const { address, phoneNumber, email } = useSelector(selectPersonalInfo);

  return (
    <div className="sidebar col-3 pt-4">
      <h5 className="text-dark pb-2">Personal Details</h5>
      <p>
        <strong>Address</strong>
      </p>
      <p>{address}</p>
      <p>
        <strong>Phone Number</strong>
      </p>
      <p>{phoneNumber}</p>
      <p>
        <strong>Email</strong>
      </p>
      <p>{email}</p>
    </div>
  );
};

export default PreviewSidebar;
