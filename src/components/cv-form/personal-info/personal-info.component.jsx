import React from "react";
import { useDispatch } from "react-redux";

import { handlePersonalChange } from "../../../redux/cv/cv.slice";

const PersonalInfo = () => {
  const dispatch = useDispatch();
  return (
    <div className="personal-info mt-2">
      <h4>Personal Info</h4>
      <input
        type="text"
        placeholder="First Name"
        className="form-control"
        name="firstName"
        onChange={({ target: { name, value } }) =>
          dispatch(handlePersonalChange({ name, value }))
        }
      />
      <input
        type="text"
        placeholder="Last Name"
        className="form-control"
        name="lastName"
        onChange={({ target: { name, value } }) =>
          dispatch(handlePersonalChange({ name, value }))
        }
      />
      <input
        type="text"
        placeholder="Title"
        className="form-control"
        name="title"
        onChange={({ target: { name, value } }) =>
          dispatch(handlePersonalChange({ name, value }))
        }
      />
      <input
        type="text"
        placeholder="Address"
        className="form-control"
        name="address"
        onChange={({ target: { name, value } }) =>
          dispatch(handlePersonalChange({ name, value }))
        }
      />
      <input
        type="text"
        placeholder="Phone Number"
        className="form-control"
        name="phoneNumber"
        onChange={({ target: { name, value } }) =>
          dispatch(handlePersonalChange({ name, value }))
        }
      />
      <input
        type="email"
        placeholder="Email"
        className="form-control"
        name="email"
        onChange={({ target: { name, value } }) =>
          dispatch(handlePersonalChange({ name, value }))
        }
      />
      <textarea
        className="form-control"
        placeholder="Description"
        name="description"
        onChange={({ target: { name, value } }) =>
          dispatch(handlePersonalChange({ name, value }))
        }
      />
    </div>
  );
};

export default PersonalInfo;
