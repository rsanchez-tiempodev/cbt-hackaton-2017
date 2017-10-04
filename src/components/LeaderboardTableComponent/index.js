import React from 'react';
import { withRouter } from 'react-router-dom';

import styles from '../../PageComponent/styles.scss';

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
            {this.props.data.map(row => {
              <TableRow row={row} />
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

const TableRow = ({ row }) => (
  <tr>
    <td key={row.name}>{row.name}</td>
    <td key={row.name}>{row.trainer}</td>
    <td key={row.id}>{row.progress}</td>
    <td key={row.price}>{row.percent}</td>
  </tr>
)

export default LeaderboardTableComponent;