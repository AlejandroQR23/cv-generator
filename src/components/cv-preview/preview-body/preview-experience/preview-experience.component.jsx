import React from 'react';

export const PreviewExperience = ({ experience }) => (
  <div className='my-2'>
    <p className='mb-0 fw-bold'>{experience.position}</p>
    <p className='mb-0'>
      {experience.company}, {experience.city}
    </p>
    <p className='text-muted'>
      {experience.startDate} - {experience.endDate}
    </p>
  </div>
);
