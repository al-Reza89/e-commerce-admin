'use client';
import React, { useEffect } from 'react';

interface ErrorStateProps {
  error: any;
}

const ErrorState: React.FC<ErrorStateProps> = ({ error }) => {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <div className="flex justify-center items-center h-96">
      <p className="text-2xl font-semibold">{error}</p>
    </div>
  );
};

export default ErrorState;
