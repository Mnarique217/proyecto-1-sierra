/** Importacion de librerias */
import React from 'react';

/** Html del AsideComponent */
import {html} from './title-icon.html';

/**
 * Clase TitleIconComponent
 */
export class TitleIconComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = { icon: '', title: ''};
  }

  componentWillReceiveProps(props) {
    this.setState({
      icon: props.icon,
      title: props.title,
    });
  }

  render() {
    return html(this.state);
  }
};