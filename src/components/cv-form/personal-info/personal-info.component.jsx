import React from "react";

const PersonalInfo = () => (
  <div className="personal-info mt-2">
    <h4>Personal Info</h4>
    <input
      type="text"
      placeholder="First Name"
      className="form-control"
      name="firstName"
    />
    <input
      type="text"
      placeholder="Last Name"
      className="form-control"
      name="lastName"
    />
    <input
      type="text"
      placeholder="Title"
      className="form-control"
      name="title"
    />
    <input
      type="text"
      placeholder="Address"
      className="form-control"
      name="address"
    />
    <input
      type="text"
      placeholder="Phone Number"
      className="form-control"
      name="phoneNumber"
    />
    <input
      type="email"
      placeholder="Email"
      className="form-control"
      name="email"
    />
    <textarea
      className="form-control"
      placeholder="Description"
      name="description"
    />
  </div>
);

export default PersonalInfo;
