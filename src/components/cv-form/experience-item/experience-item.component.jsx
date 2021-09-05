import React from "react";

const ExperienceItem = () => (
  <div className="mt-2">
    <input
      type="text"
      placeholder="Position"
      className="form-control"
      name="position"
    />
    <input
      type="text"
      placeholder="Company"
      className="form-control"
      name="company"
    />
    <input
      type="text"
      placeholder="City"
      className="form-control"
      name="city"
    />
    <input
      type="text"
      placeholder="From"
      className="form-control"
      name="startDate"
    />
    <input
      type="text"
      placeholder="To"
      className="form-control"
      name="endDate"
    />
    <button className="btn btn-danger mb-1" type="button">
      Delete Experience
    </button>
  </div>
);
export default ExperienceItem;
