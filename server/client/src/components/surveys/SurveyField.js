// SurveyField contaisn logic to render a sengle label and text input
import React from 'react';

export default ({ input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} />
    </div>
  );
};
