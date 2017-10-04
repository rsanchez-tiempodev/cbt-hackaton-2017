import React from 'react';

import styles from '../../PageComponent/styles.scss';

export class IndividualReportComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <h1>{`${this.props.user} Training`}</h1>
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
          
        </div>
      </div>
    );
  }
}

export default IndividualReportComponent;