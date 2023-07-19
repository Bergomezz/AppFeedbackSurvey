// logic to survey form review
import React from 'react';
import { Link } from 'react-router-dom';

const SurveyReview = ({ formData }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <Link to="/surveys/new" className="red btn-flat left white-text">
        Back
        <i className="material-icons right">back</i>
      </Link>
      <button type="submit" className="teal btn-flat right white-text">
        Submit
        <i className="material-icons right">done</i>
      </button>
    </div>
  );
};

export default SurveyReview;
