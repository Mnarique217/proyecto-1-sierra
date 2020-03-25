/** Importacion de librerias */
import React from 'react';

/** Html del ControlInputComponent */
import {html} from './ControlInput.html';

/**
 * Clase ControlInputComponent
 */
export class ControlInputComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: this.props.id,
      icon: this.props.icon,
      label: this.props.label,
      value: this.props.value
    };

    this.handleChanges = this.handleChanges.bind(this);
  }

  componentDidMount() {
    this.refs.inputSearch.focus();
  }

  handleChanges(e) {
    e.persist()
    this.setState({
      value: e.target.value
    }, () => {
      this.props.handleChanges(this.state.value);
    });
  }

  render() {
    return html(this.state, this.handleChanges);
  }
};