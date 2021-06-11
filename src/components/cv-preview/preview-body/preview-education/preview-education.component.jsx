import React from 'react';

export const PreviewEducation = ({ education }) => (
  <div className='my-2'>
    <p className='mb-0 fw-bold'>{education.degree} </p>
    <p className='mb-0'>
      {education.schoolName}, {education.schoolCity}
    </p>
    <p className='text-muted'>
      {education.startDate} - {education.gradDate}
    </p>
  </div>
);
