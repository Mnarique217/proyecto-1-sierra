/** Importacion de librerias */
import React from './node_modules/react';

/** Html del AsideComponent */
import {html} from './aside.html';

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