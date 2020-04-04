import React from 'react';
import ReactDOM from 'react-dom';

/** Bootstrap */
import AppComponent from './app/app.component';

/** Top Jobs */
import TopJobsComponent from './top-jobs/top-jobs.component';


import * as serviceWorker from './serviceWorker';

ReactDOM.render(<AppComponent />, document.getElementById('root'));
ReactDOM.render(<TopJobsComponent />, document.getElementById('top-jobs'));
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.register();
