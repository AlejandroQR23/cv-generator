/* eslint-disable react/no-array-index-key */
import React from "react";
import { useSelector } from "react-redux";
import {
  selectEducation,
  selectExperience,
  selectPersonalInfo,
} from "../../../redux/cv/cv.slice";
import PreviewEducation from "./preview-education/preview-education.component";
import PreviewExperience from "./preview-experience/preview-experience.component";

// import PreviewExperience from "./preview-experience/preview-experience.component";
// import PreviewEducation from "./preview-education/preview-education.component";

const PreviewBody = () => {
  const { description } = useSelector(selectPersonalInfo);
  const education = useSelector(selectEducation);
  const experience = useSelector(selectExperience);

  return (
    <div className="preview-body col-9 pt-4">
      <h5 className="text-dark pb-2">Description</h5>
      <p className="mb-2">{description}</p>
      <hr />
      <h5 className="text-dark pb-2">Experience</h5>
      {experience.map((exp, index) => (
        <PreviewExperience key={index} experience={exp} />
      ))}
      <hr />
      {/* Education */}
      <h5 className="text-dark pb-2">Education</h5>
      {education.map((ed, index) => (
        <PreviewEducation key={index} education={ed} />
      ))}
    </div>
  );
};

export default PreviewBody;
