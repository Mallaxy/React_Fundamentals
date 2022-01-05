import React from 'react';

export const CourseDetailsFormItem = ({ title, children, testID }) => {
  return (
    <div data-testid={testID}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
