/** Importacion de librerias */
import React from 'react';

/** Html del TopJobsComponent */
import {html} from './top-jobs.html';

/** Servicio */
import {TopJobService} from './service/top-jobs.service';

/**
 * Clase TopJobsComponent
 */
export default class TopJobsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      list: []
    };
  }

  componentDidMount() {
    this.subscribeToService();
    TopJobService.get(12);
  }

  subscribeToService() {
    TopJobService.topJobs().subscribe(list => {
      const temp = [];
      for (let i = 0; i < 12 / 3; i++) {
        temp.push(list.slice(i * 3, i * 3 + 3));
      }
      this.setState({list: temp});
    });
  }

  onSelectJob(job) {
    console.log(job)
  }

  render() {
    return html({
      list: this.state.list,
      onSelectJob: this.onSelectJob
    });
  }
}
