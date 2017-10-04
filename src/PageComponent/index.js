import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import _ from 'lodash';
import MainSectionComponent from '../components/MainSectionComponent';

import styles from './styles.scss';

export class PageComponent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className={styles.hdr}>
          <div className={styles.row}>
            <div className={styles.col}>CBT Nuggets Training</div>
          </div>
        </div>
        <div className="container">
          <div className="wrapper">
            <MainSectionComponent />
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(PageComponent);
