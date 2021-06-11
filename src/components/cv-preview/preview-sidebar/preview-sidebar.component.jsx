import React from 'react';

import './preview-sidebar.styles.scss';

export const PreviewSidebar = ({ address, phoneNumber, email }) => (
  <div className='sidebar col-4 pt-4'>
    <h5 className='text-dark pb-2'>Personal Details</h5>
    <p>
      <strong>Address</strong>
    </p>
    <p>{address}</p>
    <p>
      <strong>Phone Number</strong>
    </p>
    <p>{phoneNumber}</p>
    <p>
      <strong>Email</strong>
    </p>
    <p>{email}</p>
  </div>
);