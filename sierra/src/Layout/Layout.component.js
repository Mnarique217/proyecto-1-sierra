/** Importacion de librerias */
import React from './node_modules/react';

/** Html del LayoutComponent */
import {html} from './layout.html';

/**
 * Clase LayoutComponent
 */
export class LayoutComponent extends React.Component {

  constructor() {
    super();
  }

  render() {
    return html();
  }
};