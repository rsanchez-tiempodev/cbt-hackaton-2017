import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import LeaderboardComponent from '../LeaderboardComponent';
import IndividualReportComponent from '../IndividualReportComponent';

function MainSectionComponent() {
  return (
    <Router>
      <div>
        <Route
          exact
          path="/"
          component={LeaderboardComponent}
        />
        <Route
          exact
          path="/individual/:memberId"
          component={IndividualReportComponent}
        />
      </div>
    </Router>
  );
}

export default MainSectionComponent;
