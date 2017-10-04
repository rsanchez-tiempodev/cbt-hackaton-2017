import React from 'react';
import { Link, withRouter } from 'react-router-dom';
import TopContentTableComponent from '../TopContentTableComponent';

import styles from '../../PageComponent/styles.scss';

export class TopContentComponent extends React.Component {

  render() {
    return (
      <div>
        <h1>Top Training Content</h1>
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
              to='/'
              >
              Training Leaderboard
            </Link>
          </div>
        </div>
        <div>
          <TopContentTableComponent />
        </div>
      </div>
    );
  }
}

export default TopContentComponent;