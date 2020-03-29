/** Importacion de librerias */
import React from 'react';

/** Otros Componentes */
import {
  TitleIconComponent,
  ControlInputTextComponent
} from '../../components'

/** Estilos del Keywords */
import './keywords-job-description.scss';

/** Html del KeywordsJobDescriptionComponent */
export const html = (args) => (
  <div id="KeywordsJobTypeComponent" className="container-fluid">

    <div className="row">
      <div className="col-md-12">
        <TitleIconComponent icon={args.icon} title={args.title}></TitleIconComponent>
      </div>
    </div>

    <div className="row">
      <div className="col-md-12">
        <ControlInputTextComponent
          id={args.input.id}
          placeholder={args.input.placeholder}
          handleChanges={args.handleChanges}></ControlInputTextComponent>
      </div>
    </div>

  </div>
);
