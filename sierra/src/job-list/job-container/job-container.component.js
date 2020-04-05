/** Importacion de librerias */
import React from 'react';

/** Html del ListJobsComponent */
import {html} from './job-container.html';

/**
 * Clase JobContainerComponent
 */
export class JobContainerComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      job: {
        id: '',
        type: '',
        url: '',
        created_at: '',
        company: '',
        company_url: '',
        location: '',
        title: '',
        description: '',
        how_to_apply: '',
        company_logo: ''
      }
    };
  }

  componentDidMount() {
    this.setState({
      job: this.props.job
    })
  }

  onSelectJob(job) {
  }

  render() {
    return html(this.state.job);
  }
}
