import React from 'react';

import { ExperienceItem } from '../experience-item/experience-item.component';

export const Experience = ({
  experience,
  addExperience,
  changeExperience,
  deleteExperience,
}) => (
  <div className='experience'>
    <h4>Experience</h4>
    {experience.map((exp, index) => {
      return (
        <ExperienceItem
          key={index}
          experience={exp}
          index={index}
          changeExp={changeExperience}
          deleteExp={deleteExperience}
        />
      );
    })}
    <div className='row mt-2'>
      <div className='col'>
        <button className='btn btn-primary' onClick={addExperience}>
          Add Experience
        </button>
      </div>
    </div>
  </div>
);
