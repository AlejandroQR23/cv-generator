import React from 'react';

export const ExperienceItem = ({ experience, index, changeExp, deleteExp }) => (
  <div className='mt-2'>
    <input
      type='text'
      placeholder='Position'
      className='form-control'
      name='position'
      value={experience.position}
      onChange={(e) => changeExp(e, index, 'experience')}
    />
    <input
      type='text'
      placeholder='Company'
      className='form-control'
      name='company'
      value={experience.company}
      onChange={(e) => changeExp(e, index, 'experience')}
    />
    <input
      type='text'
      placeholder='City'
      className='form-control'
      name='city'
      value={experience.city}
      onChange={(e) => changeExp(e, index, 'experience')}
    />
    <input
      type='text'
      placeholder='From'
      className='form-control'
      name='startDate'
      value={experience.startDate}
      onChange={(e) => changeExp(e, index, 'experience')}
    />
    <input
      type='text'
      placeholder='To'
      className='form-control'
      name='endDate'
      value={experience.endDate}
      onChange={(e) => changeExp(e, index, 'experience')}
    />
    <button
      className='btn btn-primary'
      onClick={() => deleteExp(index, 'experience')}
    >
      Delete Experience
    </button>
  </div>
);
