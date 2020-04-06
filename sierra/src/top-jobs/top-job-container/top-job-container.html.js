/** Importacion de librerias */
import React from 'react';

/** Estilos del TopJobContainerComponent */
import './top-job-container.scss';

/** Html del TopJobContainerComponent */
export const html = (job, onSelect) => (
  <div className="portfolio-item" onClick={onSelect}>
    <a className="venobox" href="#job-description" data-gall="portfolioGallery">
      <img src={job.company_logo} alt="" className="img-fluid img-thumbnail" />
      <div className="details">
        <h4>{job.company}</h4>
        <span>{job.title}</span>
      </div>
    </a>
  </div>
);