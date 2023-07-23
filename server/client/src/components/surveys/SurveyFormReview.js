// SurveyFromReview shows users their form inputs for review
import React from 'react';
import { connect } from 'react-redux';

const SurveyFormReview = ({ onCancel }) => {
  return (
    <div>
      <h5>Please confirm your entries</h5>
      <button className="yellow darken-3 btn-flat left " onClick={onCancel}>
        Back
        <i className="darken-3 material-icons right ">back</i>
      </button>
      <button type="submit" className="teal btn-flat right white-text">
        Submit
        <i className="material-icons right">done</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    formValues: state.form.surveyForm.values,
  };
}

export default connect(mapStateToProps)(SurveyFormReview);
