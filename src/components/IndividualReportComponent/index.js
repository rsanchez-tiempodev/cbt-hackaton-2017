import React from 'react';

import styles from '../../PageComponent/styles.scss';

const user = {
    trainer: 'Christopher Cox',
    rank: 1,
    progress: 70,
    percent: 70,
    memberId: 123
  };

export class IndividualReportComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{`${user.trainer} Training`}</h1>
        <div className={`row ${styles.dateSelection}`}>
          <div className="col-md-6">
            <select className="form-control">
                <option selected>Week to Date</option>
                <option>Month to Date</option>
                <option>Year to Date</option>
            </select>
          </div>
        </div>
        <div>
          
          <div className="row">
            <div className="col">
              <h2>Week Over Week</h2>
              <div className={styles.chartcontent}>
                  TBD
              </div>
            </div>
            <div className="col">
              <h2>TBD</h2>
              <div className={styles.chartcontent}>
                  TBD
              </div>
            </div>
          </div>

        </div>
      </div>
    );
  }
}

export default IndividualReportComponent;