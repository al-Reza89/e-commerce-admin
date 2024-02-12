'use client';
import React, { useEffect } from 'react';

interface ErrorStateProps {
  error: Error;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center items-center h-96">
      <p className="text-2xl font-semibold">Sorry Go back to Home Page</p>
    </div>
  );
};

export default ErrorState;
