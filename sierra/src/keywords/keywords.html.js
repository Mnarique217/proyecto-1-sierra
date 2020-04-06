/** Importacion de librerias */
import React from 'react';

/** Otros Componentes */
import {
  KeywordsJobDescriptionComponent,
  KeywordsJobTypeComponent
} from '../components';

/** Estilos del Keywords */
import './keywords.scss';

/** Html del KeywordsComponent */
export const html = (args) => (
  <div id="KeywordsComponent" className="container-fluid">
    <div className="row">

      <div className="col-md-3">
        <KeywordsJobDescriptionComponent
          icon={args.jobDescription.icon}
          title={args.jobDescription.title}
          input={args.jobDescription.input}
          handleChanges={args.jobDescription.handleChanges}></KeywordsJobDescriptionComponent>
      </div>

      <div className="col-md-3">
        <KeywordsJobDescriptionComponent
          icon={args.jobLocation.icon}
          title={args.jobLocation.title}
          input={args.jobLocation.input}
          handleChanges={args.jobLocation.handleChanges}></KeywordsJobDescriptionComponent>
      </div>

      <div className="col-md-3">
        <KeywordsJobTypeComponent
          icon={args.jobType.icon}
          title={args.jobType.title}
          selectedOption={args.jobType.selectedOption}
          handleChanges={args.jobType.handleChanges}></KeywordsJobTypeComponent>
      </div>

      <div className="col-md-1">
        <button className="btn-search" onClick={args.submit}>{args.search}</button>
      </div>

    </div>
  </div>
);