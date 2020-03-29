/** Importacion de librerias */
import React from 'react';

/** Html del ControlInputComponent */
import {html} from './control-input-text.html';

/**
 * Clase ControlInputComponent
 */
export class ControlInputTextComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      placeholder: '',
      value: ''
    };

    this.handleChanges = this.handleChanges.bind(this);
  }

  componentDidMount() {
  }

  componentWillReceiveProps(props) {
    this.setState({
      id: props.id,
      placeholder: props.placeholder,
    });
  }

  handleChanges(e) {
    e.persist();
    this.setState({value: e.target.value}, () => {
      this.props.handleChanges(this.state.value);
    });
  }

  render() {
    return html({
      id: this.state.id,
      placeholder: this.state.placeholder,
      handleChanges: this.handleChanges
    });
  }
};