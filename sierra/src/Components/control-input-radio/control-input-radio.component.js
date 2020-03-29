/** Importacion de librerias */
import React from 'react';

/** Html del ControlInputRadioComponent */
import {html} from './control-input-radio.html';

/**
 * Clase ControlInputRadioComponent
 */
export class ControlInputRadioComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: '',
      label: '',
      value: '',
      checked: false
    };

    this.handleChanges = this.handleChanges.bind(this);
  }

  componentDidMount() {
    this.setState({
      id: this.props.id,
      label: this.props.label,
      value: this.props.value,
      checked: this.props.checked,
    });
  }

  componentWillReceiveProps(props) {
    this.setState({
      id: props.id,
      label: props.label,
      value: props.value,
      checked: props.checked,
    });
  }

  handleChanges(e) {
    e.persist();
    this.setState({checked: !this.state.checked}, () => {
      this.props.handleChanges(e.target.value);
    });
  }

  render() {
    return html({
      id: this.state.id,
      label: this.state.label,
      value: this.state.value,
      checked: this.state.checked,
      handleChanges: this.handleChanges
    });
  }
};