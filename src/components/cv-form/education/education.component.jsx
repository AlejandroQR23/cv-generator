import React from 'react';

import { EducationItem } from '../education-item/education-item.component';

export const Education = ({
  education,
  addEducation,
  changeEducation,
  deleteEducation,
}) => {
  return (
    <div className='education mb-2'>
      <h4>Education</h4>
      {education.map((ed, index) => {
        return (
          <EducationItem
            key={index}
            education={ed}
            index={index}
            changeEd={changeEducation}
            deleteEd={deleteEducation}
          />
        );
      })}
      <div className='row mt-2'>
        <div className='col'>
          <button className='btn btn-primary' onClick={addEducation}>
            Add Education
          </button>
        </div>
      </div>
    </div>
  );
};
