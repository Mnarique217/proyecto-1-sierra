/** Importacion de librerias */
import React from 'react';

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