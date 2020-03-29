/** Importacion de librerias */
import React from './node_modules/react';

/** Html del AppComponent */
import {html} from './app.html';

/**
 * Clase AppComponent
 */
export default class AppComponent extends React.Component {

  constructor() {
    super();
  }

  render() {
    return html();
  }
}
