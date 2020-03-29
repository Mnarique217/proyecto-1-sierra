/** Importacion de librerias */
import React from 'react';

/** Html del KeywordsJobDescriptionComponent */
import {html} from './keywords-job-description.html';

/**
 * Clase KeywordsJobDescriptionComponent
 */
export class KeywordsJobDescriptionComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      icon: '',
      title: '',
      input: {
        id: '',
        placeholder: ''
      }
    };
    this.handleChanges = this.handleChanges.bind(this);
  }

  componentDidMount() {
    this.setState({
      icon: this.props.icon,
      title: this.props.title,
      input: {
        id: this.props.input.id,
        placeholder: this.props.input.placeholder
      },
    });
  }

  handleChanges(event) {
    this.props.handleChanges(event);
  }

  render() {
    return html({
      icon: this.state.icon,
      title: this.state.title,
      input: this.state.input,
      handleChanges: this.handleChanges
    });
  }
};