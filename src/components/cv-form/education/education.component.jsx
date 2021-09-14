/* eslint-disable react/no-array-index-key */
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addEducationItem, selectEducation } from "../../../redux/cv/cv.slice";

import EducationItem from "../education-item/education-item.component";

const Education = () => {
  const education = useSelector(selectEducation);
  const dispatch = useDispatch();

  return (
    <div className="education mb-2">
      <h4>Education</h4>
      {education.map((ed, index) => (
        <EducationItem key={index} education={ed} index={index} />
      ))}
      <div className="row mt-2">
        <div className="col">
          <button
            className="btn btn-primary"
            type="button"
            onClick={() => {
              dispatch(addEducationItem());
            }}
          >
            Add Education
          </button>
        </div>
      </div>
    </div>
  );
};

export default Education;
