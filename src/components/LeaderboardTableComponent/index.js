import React from 'react';
import { Link, withRouter } from 'react-router-dom';

import styles from '../../PageComponent/styles.scss';

const users = [
  {
    trainer: 'Cristopher Cox',
    rank: 1,
    progress: 70,
    percent: 70,
    memberId: 123
  },
  {
    trainer: 'Jason',
    rank: 2,
    progress: 70,
    percent: 70,
    memberId: 124
  },
  {
    trainer: 'Nathan',
    rank: 3,
    progress: 70,
    percent: 70,
    memberId: 125
  },
];

export class LeaderboardTableComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <table className={`table ${styles.leaderboard}`}>
          <thead>
            <tr>
              <th width="5%">Rank</th>
              <th width="20%">Trainer</th>
              <th width="65%">Progress</th>
              <th width="10%" className="text-right">Percent</th>
            </tr>
          </thead>
          <tbody>
            {users.map(row => {
              return (
                <tr key={row.memberId}>
                  <td>{row.rank}</td>
                  <td><Link
                    to={`/individual/${row.memberId}`}
                  >
                    {row.trainer}
                  </Link></td>
                  <td>{row.progress}</td>
                  <td>{row.percent}</td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default LeaderboardTableComponent;