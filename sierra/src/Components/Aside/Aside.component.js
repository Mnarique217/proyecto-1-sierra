/** Importacion de librerias */
import React from 'react';

/** Html del AsideComponent */
import {html} from './Aside.html';

/**
 * Clase AsideComponent
 */
export class AsideComponent extends React.Component {

  constructor(props) {
    super(props);
  }

  render() {
    return html({
      title: 'Keywords'
    });
  }
};