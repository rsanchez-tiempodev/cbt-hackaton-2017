import axios from 'axios';
import React from 'react';
import TopContentTableRowComponent from '../TopContentTableRowComponent';
import { Link, withRouter } from 'react-router-dom';

import styles from '../../PageComponent/styles.scss';

export class TopContentTableComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      topContent: ''
    };
  }

  componentDidMount() {
    axios.get('https://contentrecommend-msowfydjsb.now.sh/content')
      .then((response) => {
        this.setState({ topContent: response.data });
      });
  }

  render() {

    if (this.state.topContent === '') {
      return (<div>Loading...</div>);
    }
    let i = 1;
    return (
      <div>
        <table className={`table ${styles.leaderboard}`}>
          <thead>
            <tr>
              <th width="15%">Rank</th>
              <th width="50%">Content</th>
              <th width="15%">Author</th>
              <th width="10%">Categories</th>
            </tr>
          </thead>
          <tbody>            
            {this.state.topContent.map(row => <TopContentTableRowComponent index={i++} rowData={row} /> )}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TopContentTableComponent;