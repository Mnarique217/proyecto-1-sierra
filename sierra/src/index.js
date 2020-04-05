import React from 'react';
import ReactDOM from 'react-dom';

import {SECTION_ID} from './config';

import * as serviceWorker from './serviceWorker';

import {TopJobsComponent} from './top-jobs/top-jobs.component';
import {JobListComponent} from './job-list/job-list.component';
import {KeywordsComponent} from './keywords/keywords.component';

ReactDOM.render(<KeywordsComponent />, document.getElementById(SECTION_ID.keywords));
ReactDOM.render(<JobListComponent />, document.getElementById(SECTION_ID.jobList));
ReactDOM.render(<TopJobsComponent />, document.getElementById(SECTION_ID.topJobs));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
