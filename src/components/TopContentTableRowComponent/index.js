import axios from 'axios';
import React from 'react';
import Linkify from 'react-linkify';
import { Link, withRouter } from 'react-router-dom';

import styles from '../../PageComponent/styles.scss';

export class TopContentTableRowComponent extends React.Component {

  constructor(props) {
    super(props);
    console.log(props.rowData.upVotes);
    this.state = {
      votes: (props.rowData.upVotes)
    };
  }

  upvote() {
    axios.post('https://contentrecommend-msowfydjsb.now.sh/upvote', {
      id: this.props.rowData._id
    }).then((response) => {
      console.log(response);
      this.setState({ votes: response.upVotes })
    });
  }

  render() {
    return (
      <tr key={this.props.rowData._id}>
        <td>{this.props.index}. <span className={styles.votes}>({this.state.votes} votes)</span>
          <a className={styles.pointerClass} onClick={this.upvote.bind(this)}> + </a>
        </td>
        <td><Linkify>{this.props.rowData.text}</Linkify></td>
        <td>{this.props.rowData.created_by}</td>
        <td>{this.props.rowData.categories[0] ? this.props.rowData.categories[0].name: '-'}</td>
      </tr>
    )
  }
}

export default TopContentTableRowComponent;
