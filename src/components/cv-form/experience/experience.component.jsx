/* eslint-disable react/no-array-index-key */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  addExperienceItem,
  selectExperience,
} from "../../../redux/cv/cv.slice";

import ExperienceItem from "../experience-item/experience-item.component";

const Experience = () => {
  const experience = useSelector(selectExperience);
  const dispatch = useDispatch();

  return (
    <div className="experience mb-2">
      <h4>Experience</h4>
      {experience.map((exp, index) => (
        <ExperienceItem key={index} experience={exp} index={index} />
      ))}
      <div className="row mt-2">
        <div className="col">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              dispatch(addExperienceItem());
            }}
          >
            Add Experience
          </button>
        </div>
      </div>
    </div>
  );
};

export default Experience;
