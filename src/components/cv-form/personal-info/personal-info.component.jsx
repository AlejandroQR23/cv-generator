import React from 'react';

export const PersonalInfo = ({ personalInfo, onChange }) => (
  <div className='personal-info mt-2'>
    <h4>Personal Info</h4>
    <input
      type='text'
      placeholder='First Name'
      className='form-control'
      name='firstName'
      value={personalInfo.firstName}
      onChange={onChange}
    ></input>
    <input
      type='text'
      placeholder='Last Name'
      className='form-control'
      name='lastName'
      value={personalInfo.lastName}
      onChange={onChange}
    ></input>
    <input
      type='text'
      placeholder='Title'
      className='form-control'
      name='title'
      value={personalInfo.title}
      onChange={onChange}
    ></input>
    <input
      type='text'
      placeholder='Address'
      className='form-control'
      name='address'
      value={personalInfo.address}
      onChange={onChange}
    ></input>
    <input
      type='text'
      placeholder='Phone Number'
      className='form-control'
      name='phoneNumber'
      value={personalInfo.phoneNumber}
      onChange={onChange}
    ></input>
    <input
      type='email'
      placeholder='Email'
      className='form-control'
      name='email'
      value={personalInfo.email}
      onChange={onChange}
    ></input>
    <textarea
      className='form-control'
      placeholder='Description'
      name='description'
      value={personalInfo.description}
      onChange={onChange}
    ></textarea>
  </div>
);
