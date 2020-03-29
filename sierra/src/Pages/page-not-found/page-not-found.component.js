/** Importacion de librerias */
import React from './node_modules/react';

/** Html del NotFoundComponent */
import {html} from './page-not-found.html';

/**
 * Clase NotFoundComponent
 */
export class NotFoundComponent extends React.Component {

  constructor() {
    super();
  }

  render() {
    return html();
  }
};