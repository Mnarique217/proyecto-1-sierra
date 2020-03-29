/** Importacion de librerias */
import React from 'react';

/** Otros Componentes */
import {TitleIconComponent, ControlInputRadioComponent} from '../index';

/** Estilos del Keywords */
import './keywords-job-type.scss';

/** Html del KeywordsComponent */
export const html = (args) => (
  <div id="KeywordsJobTypeComponent" className="container-fluid">

    <div className="row">
      <div className="col-md-12">
        <TitleIconComponent icon={args.icon} title={args.title}></TitleIconComponent>
      </div>
    </div>

    <div className="row">

      <div className="col-md-6">
        <ControlInputRadioComponent
          id="full-time"
          label="Full Time"
          value="full-time"
          checked={args.selectedOption === 'full-time'}
          handleChanges={args.handleChanges}>
        </ControlInputRadioComponent>
      </div>

      <div className="col-md-6">
        <ControlInputRadioComponent
          id="half-time"
          label="Half Time"
          value="half-time"
          checked={args.selectedOption === 'half-time'}
          handleChanges={args.handleChanges}>
        </ControlInputRadioComponent>
      </div>

    </div>

  </div>
);