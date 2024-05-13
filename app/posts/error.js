'use client'
import React, { useEffect } from 'react';

export default function Error({ error, reset }) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    React.createElement('div', null,
      React.createElement('h2', null, 'Something went wrong!'),
      React.createElement('button', { onClick: reset }, 'Try again')
    )
  );
}
