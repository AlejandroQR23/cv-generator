import React from 'react';

export const PreviewHeader = ({ firstName, lastName, title }) => (
  <header className='bg-dark text-light p-3'>
    <h2>
      {firstName} {lastName}
    </h2>
    <h4>{title}</h4>
  </header>
);
