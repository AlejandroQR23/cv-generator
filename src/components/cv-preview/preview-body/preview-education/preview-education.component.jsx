/* eslint-disable react/prop-types */
import React from "react";

const PreviewEducation = ({ education }) => {
  const { degree, schoolName, schoolCity, startDate, gradDate } = education;
  return (
    <div className="my-2">
      <p className="mb-0 fw-bold">{degree} </p>
      <p className="mb-0">
        {schoolName}, {schoolCity}
      </p>
      <p className="text-muted">
        {startDate} - {gradDate}
      </p>
    </div>
  );
};

export default PreviewEducation;
