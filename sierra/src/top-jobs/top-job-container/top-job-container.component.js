/** Importacion de librerias */
import React from 'react';

/** Html del TopJobContainerComponent */
import {html} from './top-job-container.html';

/**
 * Clase TopJobContainerComponent
 */
export class TopJobContainerComponent extends React.Component {

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
    this.onSelect = this.onSelect.bind(this);
  }

  componentDidMount() {
    this.setState({job: this.props.job});
  }

  onSelect() {
    this.props.onSelectJob(this.state.job.id);
  }

  render() {
    return html(this.state.job, this.onSelect);
  }
};