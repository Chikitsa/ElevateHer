import React from 'react';
const SuccessNotification = ({ show, message, type = 'success' }) => {
  if (!show) return null;
  const bgColor = type === 'success' ? 'bg-green-50' : 
                 type === 'error' ? 'bg-red-50' : 
                 type === 'warning' ? 'bg-yellow-50' : 'bg-blue-50';
  const textColor = type === 'success' ? 'text-green-800' : 
                   type === 'error' ? 'text-red-800' : 
                   type === 'warning' ? 'text-yellow-800' : 'text-blue-800';
  const borderColor = type === 'success' ? 'border-green-200' : 
                     type === 'error' ? 'border-red-200' : 
                     type === 'warning' ? 'border-yellow-200' : 'border-blue-200';
  const iconColor = type === 'success' ? 'text-green-500' : 
                   type === 'error' ? 'text-red-500' : 
                   type === 'warning' ? 'text-yellow-500' : 'text-blue-500';
  return (
    <div className="fixed bottom-4 right-4 z-50 max-w-sm">
      <div className={`${bgColor} ${borderColor} border rounded-md shadow-lg p-4 flex items-start`}>
        <div className={`${iconColor} mr-3 flex-shrink-0 mt-0.5`}>
          {type === 'success' && (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          )}
          {type === 'error' && (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          )}
          {type === 'warning' && (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"></path>
            </svg>
          )}
          {type === 'info' && (
            <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"></path>
            </svg>
          )}
        </div>
        <div>
          <p className={`${textColor} text-sm font-medium`}>{message}</p>
        </div>
      </div>
    </div>
  );
};
export default SuccessNotification; 