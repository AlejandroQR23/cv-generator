import React from "react";

// import { EducationItem } from "../education-item/education-item.component";

const Education = () => (
  <div className="education mb-2">
    <h4>Education</h4>
    {/* {education.map((ed, index) => {
        return (
          <EducationItem
            key={index}
            education={ed}
            index={index}
            changeEd={changeEducation}
            deleteEd={deleteEducation}
          />
        );
      })} */}
    <div className="row mt-2">
      <div className="col">
        <button className="btn btn-primary" type="button">
          Add Education
        </button>
      </div>
    </div>
  </div>
);

export default Education;
