import React from 'react';

export const EducationItem = ({ education, index, changeEd, deleteEd }) => {
  return (
    <div className='mt-2'>
      <input
        type='text'
        placeholder='Name'
        className='form-control'
        name='schoolName'
        value={education.schoolName}
        onChange={(e) => changeEd(e, index)}
      ></input>
      <input
        type='text'
        placeholder='City'
        className='form-control'
        name='schoolCity'
        value={education.schoolCity}
        onChange={(e) => changeEd(e, index)}
      ></input>
      <input
        type='text'
        placeholder='Degree'
        className='form-control'
        name='degree'
        value={education.degree}
        onChange={(e) => changeEd(e, index)}
      ></input>
      <input
        type='text'
        placeholder='From'
        className='form-control'
        name='startDate'
        value={education.startDate}
        onChange={(e) => changeEd(e, index)}
      ></input>
      <input
        type='text'
        placeholder='To'
        className='form-control'
        name='gradDate'
        value={education.gradDate}
        onChange={(e) => changeEd(e, index)}
      ></input>
      <button className='btn btn-primary' onClick={() => deleteEd(index)}>
        Delete Education
      </button>
    </div>
  );
};
