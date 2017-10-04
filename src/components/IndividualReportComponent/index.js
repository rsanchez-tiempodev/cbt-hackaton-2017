import React from 'react';

import styles from '../../PageComponent/styles.scss';

const user = {
    trainer: 'Christopher Cox',
    rank: 1,
    progress: 70,
    percent: 70,
    memberId: 123
  };

const userTraining = [
  {
    "week": "29",
    "training": [
      {
        "minutes": 15,
        "day": "2017-07-24T16:30:00.000Z",
        "what": "<http://www.agileadvice.com/2015/07/30/referenceinformation/agile-transformation-metrics/>"
      },
      {
        "minutes": 30,
        "day": "2017-07-24T18:00:00.000Z",
        "what": "<https://www.slideshare.net/agilemanager/enterprise-services-planning-defining-key-performance-indicators>"
      },
      {
        "minutes": 15,
        "day": "2017-07-26T00:44:00.000Z",
        "what": "<https://en.wikipedia.org/wiki/Halstead_complexity_measures> and Plato npm module"
      },
      {
        "minutes": 8,
        "day": "2017-07-27T15:57:00.000Z",
        "what": "<https://medium.com/the-node-js-collection/what-you-should-know-to-really-understand-the-node-js-event-loop-and-its-metrics-c4907b19da4c>"
      },
      {
        "minutes": 15,
        "day": "2017-07-27T18:00:00.000Z",
        "what": "Knex API &amp; bugs"
      },
      {
        "minutes": 15,
        "day": "2017-07-27T20:14:00.000Z",
        "what": "CBT IQ quiz"
      }
    ],
    "weekly_goal": 150,
    "total_minutes": 98,
    "start_date": "2017-07-23T07:00:00.000Z",
    "stretch_goal": 150,
    "ytd_goal": 52
  },
  {
    "week": "30",
    "training": [],
    "weekly_goal": 150,
    "total_minutes": 0,
    "start_date": "2017-07-30T07:00:00.000Z",
    "stretch_goal": 202,
    "ytd_goal": 202
  },
  {
    "week": "31",
    "training": [
      {
        "minutes": 60,
        "day": "2017-08-08T02:06:00.000Z",
        "what": "Review of \n[1] <https://blog.insightdatascience.com/data-science-vs-data-engineering-62da7678adaa#b136>\n[2] <https://engineering.linkedin.com/distributed-systems/log-what-every-software-engineer-should-know-about-real-time-datas-unifying>\n[3] <http://www.openagile.com/LearningManifesto>"
      },
      {
        "minutes": 30,
        "day": "2017-08-08T18:03:00.000Z",
        "what": "EU-GDPR -- how personal data is about to become a liability for anyone doing business in the EU\n[1] <https://www.privacy-regulation.eu/en/17.htm>\n[2] <http://privacylawblog.fieldfisher.com/2015/getting-to-know-the-gdpr-part-1-you-may-be-processing-more-personal-information-than-you-think/>\n[3] <https://medium.com/personaldata-io/personally-identifiable-information-and-gdpr-compliance-5bb39dc886c0>"
      },
      {
        "minutes": 30,
        "day": "2017-08-09T18:49:00.000Z",
        "what": "Scrum, Kanban, and OpenAgile"
      },
      {
        "minutes": 15,
        "day": "2017-08-10T18:16:00.000Z",
        "what": "Slack API"
      }
    ],
    "weekly_goal": 150,
    "total_minutes": 135,
    "start_date": "2017-08-06T07:00:00.000Z",
    "stretch_goal": 300,
    "ytd_goal": 217
  },
  {
    "week": "32",
    "training": [
      {
        "minutes": 15,
        "day": "2017-08-14T15:19:00.000Z",
        "what": "<https://internal-tech.aws.cbtnuggets.com/post/why-reactjs/> and take CBT IQ"
      },
      {
        "minutes": 15,
        "day": "2017-08-16T15:00:00.000Z",
        "what": "Slack &amp; cbt-cli"
      },
      {
        "minutes": 60,
        "day": "2017-08-16T18:00:00.000Z",
        "what": "Accuracy &amp; Confusion Matrix in Data Science"
      }
    ],
    "weekly_goal": 150,
    "total_minutes": 90,
    "start_date": "2017-08-13T07:00:00.000Z",
    "stretch_goal": 165,
    "ytd_goal": 277
  },
  {
    "week": "33",
    "training": [
      {
        "minutes": 15,
        "day": "2017-08-23T23:00:00.000Z",
        "what": "CBT IQ"
      },
      {
        "minutes": 15,
        "day": "2017-08-24T01:53:00.000Z",
        "what": "Cohen's kappa and Youden's J statistic\n<https://en.wikipedia.org/wiki/Youden%27s_J_statistic>"
      },
      {
        "minutes": 15,
        "day": "2017-08-25T23:42:00.000Z",
        "what": "CBT IQ Quiz - Learner Support"
      },
      {
        "minutes": 60,
        "day": "2017-08-26T00:18:00.000Z",
        "what": "<https://www.youtube.com/watch?v=ecIWPzGEbFc>"
      }
    ],
    "weekly_goal": 150,
    "total_minutes": 105,
    "start_date": "2017-08-20T07:00:00.000Z",
    "stretch_goal": 210,
    "ytd_goal": 322
  },
  {
    "week": "34",
    "training": [
      {
        "minutes": 5,
        "day": "2017-08-29T02:52:00.000Z",
        "what": "Postman API Tips\n<http://blog.getpostman.com/2017/07/28/api-testing-tips-from-a-postman-professional/>"
      },
      {
        "minutes": 60,
        "day": "2017-08-29T02:55:00.000Z",
        "what": "CBT CLI Lunch &amp; Learn"
      },
      {
        "minutes": 11,
        "day": "2017-08-29T23:08:00.000Z",
        "what": "Optimized v8 code\n- Object properties: instantiate in the same order\n- Dynamic properties: Avoid. Use constructor.\n- Methods: same repeatedly faster than many different methods only once (inline caching)\n- Arrays: avoid sparse arrays. Don’t delete elements. Don't pre-allocate large Arrays.\n-Tagged values: use 31 bit signed numbers to avoid boxing to double\n\n<https://blog.sessionstack.com/how-javascript-works-inside-the-v8-engine-5-tips-on-how-to-write-optimized-code-ac089e62b12e>"
      },
      {
        "minutes": 60,
        "day": "2017-09-01T17:30:00.000Z",
        "what": "Looking at one way encryption options for data in Redshift"
      },
      {
        "minutes": 15,
        "day": "2017-09-01T18:52:00.000Z",
        "what": "Reinforcement Learning: An Introduction\nby Richard S. Sutton and Andrew G. Barto"
      }
    ],
    "weekly_goal": 150,
    "total_minutes": 151,
    "start_date": "2017-08-27T07:00:00.000Z",
    "stretch_goal": 195,
    "ytd_goal": 321
  },
  {
    "week": "35",
    "training": [
      {
        "minutes": 15,
        "day": "2017-09-05T23:00:00.000Z",
        "what": "Reed–Solomon codes for coders"
      },
      {
        "minutes": 7,
        "day": "2017-09-05T23:15:00.000Z",
        "what": "How Facebook, Twitter, and Pinterest Hook Users\nSuperpower = habit forming tech = Trigger --&gt; Action --&gt; Variable Reward --&gt; Investment (time, data, social capital, or $) --&gt; new Trigger(s) ... \n<https://magenta.as/how-facebook-twitter-and-pinterest-hook-users-5c0eb134992f>"
      },
      {
        "minutes": 15,
        "day": "2017-09-06T23:00:00.000Z",
        "what": "CBT IQ presentation"
      }
    ],
    "weekly_goal": 150,
    "total_minutes": 37,
    "start_date": "2017-09-03T07:00:00.000Z",
    "stretch_goal": 149,
    "ytd_goal": 434
  },
  {
    "week": "36",
    "training": [
      {
        "minutes": 120,
        "day": "2017-09-12T02:05:00.000Z",
        "what": "Get Started with NLP in Python (Safari Training using JupyterHub)"
      },
      {
        "minutes": 60,
        "day": "2017-09-13T00:30:00.000Z",
        "what": "Agile Guild Meeting"
      },
      {
        "minutes": 15,
        "day": "2017-09-13T23:45:00.000Z",
        "what": "CBT IQ Quiz: Illustrations and Organization (9/6/2017)"
      }
    ],
    "weekly_goal": 150,
    "total_minutes": 195,
    "start_date": "2017-09-10T07:00:00.000Z",
    "stretch_goal": 263,
    "ytd_goal": 389
  },
  {
    "week": "37",
    "training": [
      {
        "minutes": 15,
        "day": "2017-09-19T01:52:00.000Z",
        "what": "Look at saving from SF Streaming API to AWS Kinesis for BW"
      },
      {
        "minutes": 30,
        "day": "2017-09-19T17:16:00.000Z",
        "what": "Training Sulav on Kibana and Jenkins while pair programming."
      },
      {
        "minutes": 10,
        "day": "2017-09-19T18:34:00.000Z",
        "what": "Create Github Notifications page on Confluence"
      },
      {
        "minutes": 30,
        "day": "2017-09-20T00:30:00.000Z",
        "what": "Agile Guild meeting (double booked for first 1/2 of meeting)"
      },
      {
        "minutes": 15,
        "day": "2017-09-22T00:05:00.000Z",
        "what": "AWS certs required for connecting to Redshift\n<https://docs.aws.amazon.com/redshift/latest/mgmt/connecting-transitioning-to-acm-certs.html>"
      },
      {
        "minutes": 30,
        "day": "2017-09-22T00:53:00.000Z",
        "what": "<https://topix.io/explore.html>\nand\n<https://github.com/nlp-compromise/compromise>"
      }
    ],
    "weekly_goal": 150,
    "total_minutes": 130,
    "start_date": "2017-09-17T07:00:00.000Z",
    "stretch_goal": 105,
    "ytd_goal": 409
  },
  {
    "week": "38",
    "training": [
      {
        "minutes": 120,
        "day": "2017-09-25T16:17:00.000Z",
        "what": "<https://www.safaribooksonline.com/live-training/courses/deep-learning-fundamentals/0636920106067/>"
      },
      {
        "minutes": 30,
        "day": "2017-09-26T19:13:00.000Z",
        "what": "Writing \"securing GIT with git secrets\":\n<https://internal-tech.aws.cbtnuggets.com/post/securing-git/>"
      },
      {
        "minutes": 60,
        "day": "2017-09-28T01:00:00.000Z",
        "what": "Sarfari live training: Built text editor using Electron &amp; NodeJS\n\n<https://www.safaribooksonline.com/live-training/courses/building-a-desktop-app-with-javascript-and-electron/0636920104124/>"
      },
      {
        "minutes": 4,
        "day": "2017-09-29T00:06:00.000Z",
        "what": "<https://medium.com/@gijsnelissen/stop-complaining-about-gdpr-86e893f8d11>"
      }
    ],
    "weekly_goal": 150,
    "total_minutes": 214,
    "start_date": "2017-09-24T07:00:00.000Z",
    "stretch_goal": 170,
    "ytd_goal": 345
  }
]

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

          <div className="row">
            <div className="col">
            <h2>Weekly Progress</h2>
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