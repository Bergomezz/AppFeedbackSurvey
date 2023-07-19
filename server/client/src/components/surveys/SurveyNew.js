// SurveyNew shows SurveyForm and SurveyFromReview

import React, { Component } from 'react';
import SurveyForm from './SurveyForm.js';
import SurveyFormReview from './SurveyFormReview.js';

class SurveyNew extends Component {
  state = { formReview: false };

  render() {
    return (
      <div>
        <SurveyForm />
      </div>
    );
  }
}

export default SurveyNew;
