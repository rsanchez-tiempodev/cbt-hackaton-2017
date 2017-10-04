import axios from 'axios';
import React from 'react';
import Linkify from 'react-linkify';
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
    axios.get('https://contentrecommend-jlkxzlqfgc.now.sh/content')
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
              <th width="10%">Vote</th>
            </tr>
          </thead>
          <tbody>
            {this.state.topContent.map(row => {              
              return (
                <tr key={row._id}>
                  <td>{i++}. <span className={styles.votes}>{row.upVotes} votes</span></td>
                  <td><Linkify>{row.text}</Linkify></td>
                  <td>{row.created_by}</td>
                  <td>{row.created_by}</td>
                  <td><a href="#">Upvote</a></td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    );
  }
}

export default TopContentTableComponent;