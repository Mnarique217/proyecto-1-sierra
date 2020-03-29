/** Importacion de librerias */
import React from 'react';

/** Html del ControlInputComponent */
import {html} from './keywords-job-type.html';

/**
 * Clase KeywordsJobTypeComponent
 */
export class KeywordsJobTypeComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icon: '',
      title: '',
      selectedOption: 'full-time'
    };
    this.handleChanges = this.handleChanges.bind(this);
  }

  componentDidMount() {
    this.setState({
      icon: this.props.icon,
      title: this.props.title,
      selectedOption: this.props.selectedOption
    });
  }

  handleChanges(e) {
    this.setState({selectedOption: e}, () => {
      this.props.handleChanges(this.state.selectedOption);
    });
  }

  render() {
    return html({
      icon: this.state.icon,
      title: this.state.title,
      selectedOption: this.state.selectedOption,
      handleChanges: this.handleChanges,
    });
  }
};