import React from 'react';
import './form-container.styles.scss';

import { PersonalInfo } from '../personal-info/personal-info.component';
import { Education } from '../education/education.component';
import { Experience } from '../experience/experience.component';

export const FormContainer = ({ personalInfo, handlePersonalChange }) => (
  <div className='col cv-form mx-2 bg-secondary text-light'>
    <PersonalInfo personalInfo={personalInfo} onChange={handlePersonalChange} />
    <Education />
    <Experience />
  </div>
);
