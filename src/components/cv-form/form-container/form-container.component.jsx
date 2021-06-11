import React from 'react';
import './form-container.styles.scss';

import { PersonalInfo } from '../personal-info/personal-info.component';
import { Education } from '../education/education.component';
import { Experience } from '../experience/experience.component';

export const FormContainer = ({
  personalInfo,
  education,
  experience,
  handlePersonalChange,
  handleAddEducation,
  handleAddExperience,
  handleDelete,
  handleChange,
}) => (
  <div className='col-12 col-xl-5 cv-form mx-2 bg-secondary text-light'>
    <PersonalInfo personalInfo={personalInfo} onChange={handlePersonalChange} />
    <Education
      education={education}
      addEducation={handleAddEducation}
      changeEducation={handleChange}
      deleteEducation={handleDelete}
    />
    <Experience
      experience={experience}
      addExperience={handleAddExperience}
      changeExperience={handleChange}
      deleteExperience={handleDelete}
    />
  </div>
);
