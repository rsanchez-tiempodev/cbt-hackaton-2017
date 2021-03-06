import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import LeaderboardTableComponent from '../LeaderboardTableComponent';

import styles from '../../PageComponent/styles.scss';

export class LeaderboardComponent extends React.Component {
  render() {
    return (
      <div>
        <h1>Training Leaderboard</h1>
        <div className={`row ${styles.dateSelection}`}>
          <div className="col-md-6">
            <select className="form-control">
                <option selected>Week to Date</option>
                <option>Month to Date</option>
                <option>Year to Date</option>
            </select>
          </div>
          <div className="col-md-6 text-right">
            <Link
              to='/topcontent'
              >
              Top training content
            </Link>
          </div>
        </div>
        <div>
          <LeaderboardTableComponent />
        </div>
      </div>
    );
  }
}

export default LeaderboardComponent;