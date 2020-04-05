/** Importacion de librerias */
import React from 'react';

/** Html del ListJobsComponent */
import {html} from './job-list.html';

/** Servicio */
import {JobListService} from './service/job-list.service';

/**
 * Clase ListJobsComponent
 */
export class JobListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.subscribeToService();
  }

  subscribeToService() {
    JobListService.jobList().subscribe(list => {
      console.log(list);
      this.setState({list: list});
    });
  }

  onSelectJob(job) {
    console.log(job);
  }

  render() {
    return html({list: this.state.list});
  }
}
