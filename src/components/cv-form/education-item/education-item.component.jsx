import React from "react";

const EducationItem = () => (
  <div className="mt-2">
    <input
      type="text"
      placeholder="School"
      className="form-control"
      name="schoolName"
    />
    <input
      type="text"
      placeholder="City"
      className="form-control"
      name="schoolCity"
    />
    <input
      type="text"
      placeholder="Degree"
      className="form-control"
      name="degree"
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
      name="gradDate"
    />
    <button className="btn btn-danger mb-1" type="button">
      Delete Education
    </button>
  </div>
);

export default EducationItem;
