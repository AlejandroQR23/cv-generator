import React from 'react';

import { PreviewExperience } from './preview-experience/preview-experience.component';
import { PreviewEducation } from './preview-education/preview-education.component';

export const PreviewBody = ({ education, experience, description }) => (
  <div className='preview-body col-9 pt-4'>
    <h5 className='text-dark pb-2'>Description</h5>
    <p className='mb-2'>{description}</p>
    <hr />
    {/* Experience */}
    <h5 className='text-dark pb-2'>Experience</h5>
    {experience.map((exp, index) => (
      <PreviewExperience key={index} experience={exp} />
    ))}
    <hr />
    {/* Education */}
    <h5 className='text-dark pb-2'>Education</h5>
    {education.map((ed, index) => (
      <PreviewEducation key={index} education={ed} />
    ))}
  </div>
);
