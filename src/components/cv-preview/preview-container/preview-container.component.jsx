import React from 'react';
import './preview-container.styles.scss';

export const PreviewContainer = ({ personalInfo, education, experience }) => (
  <div className='col cv-preview mx-2'>
    <header>
      <h1>
        {personalInfo.firstName} {personalInfo.lastName}
      </h1>
      <p>{personalInfo.title}</p>
    </header>
    <p>{education.length > 0 ? education[0].schoolName : ''}</p>
  </div>
);
