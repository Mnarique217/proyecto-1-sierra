/** Importacion de librerias */
import React from 'react';

/** Html del AppComponent */
import {html} from './App.html';

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
