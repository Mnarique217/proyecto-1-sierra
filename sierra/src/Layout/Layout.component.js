/** Importacion de librerias */
import React from 'react';

/** Html del LayoutComponent */
import {html} from './layout.html';

import {keywordsService, JobService} from '../services'

/**
 * Clase LayoutComponent
 */
export class LayoutComponent extends React.Component {

  constructor() {
    super();
    keywordsService.getkeywords().subscribe(keywords => {
      JobService.getJobs(keywords);
    });
  }

  render() {
    return html();
  }
};