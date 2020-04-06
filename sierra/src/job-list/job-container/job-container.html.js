/** Importacion de librerias */
import React from 'react';

/** Configuracion */
import {SECTION_ID} from '../../config';

/** Estilos del ListJobsComponent */
import './job-container.scss';

/** Html del AppComponent */
export const html = (job) => (
  <div id="job-container">
    <div className="box">

      <div className="icon">
        <a href={`#${SECTION_ID.jobDescription}`}>
          <i className="fa fa-desktop"></i>
        </a>
      </div>

      <table>
        <tbody>
          <tr>
            <td className="title">
              <h4><a href={`#${SECTION_ID.jobDescription}`}>{job.title}</a></h4>
              <p className="description">
                <a href={`#${SECTION_ID.jobDescription}`}>{job.company}</a> - <strong>{job.type}</strong>
              </p>
            </td>
            <td className="meta">
              <span className="location">{job.location}</span>
              <span>{job.created_at}</span>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="more-info">
        <a href={`#${SECTION_ID.jobDescription}`}>more...</a>
      </div>

    </div>
  </div>
);