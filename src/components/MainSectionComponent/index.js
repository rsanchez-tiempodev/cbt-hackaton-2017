import React from 'react';
import { BrowserRouter as Router, Redirect, Route } from 'react-router-dom';

import LeaderboardComponent from '../LeaderboardComponent';
import IndividualReportComponent from '../IndividualReportComponent';
import TopContentComponent from '../TopContentComponent';

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
        <Route
          exact
          path="/topcontent"
          component={TopContentComponent}
        />
      </div>
    </Router>
  );
}

export default MainSectionComponent;
