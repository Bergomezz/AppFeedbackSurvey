// SurveyFromReview shows users their form inputs for review
import React from 'react';

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button className="yellow darken-3 btn-flat left " onClick={onCancel}>
        Back
        <i className="material-icons right">back</i>
      </button>
      <button type="submit" className="teal btn-flat right white-text">
        Submit
        <i className="material-icons right">done</i>
      </button>
    </div>
  );
};

export default SurveyFormReview;
