import React from "react";

// import { ExperienceItem } from '../experience-item/experience-item.component';

const Experience = () => (
  <div className="experience mb-2">
    <h4>Experience</h4>
    {/* {experience.map((exp, index) => {
      return (
        <ExperienceItem
          key={index}
          experience={exp}
          index={index}
          changeExp={changeExperience}
          deleteExp={deleteExperience}
        />
      );
    })} */}
    <div className="row mt-2">
      <div className="col">
        <button className="btn btn-primary" type="button">
          Add Experience
        </button>
      </div>
    </div>
  </div>
);

export default Experience;
