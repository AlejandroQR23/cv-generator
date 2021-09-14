/* eslint-disable react/prop-types */
import React from "react";

const PreviewExperience = ({ experience }) => {
  const { position, company, city, startDate, endDate } = experience;
  return (
    <div className="my-2">
      <p className="mb-0 fw-bold">{position}</p>
      <p className="mb-0">
        {company}, {city}
      </p>
      <p className="text-muted">
        {startDate} - {endDate}
      </p>
    </div>
  );
};

export default PreviewExperience;
