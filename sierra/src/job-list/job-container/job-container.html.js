/** Importacion de librerias */
import React from 'react';

/** Estilos del ListJobsComponent */
import './job-container.scss';

/** Html del AppComponent */
export const html = (job) => (
  <div id="job-container">
    <div className="box">

      <div className="icon">
        <a href="#">
          <i className="fa fa-desktop"></i>
        </a>
      </div>

      <table>
        <tr>
          <td className="title">
            <h4><a href="">{job.title}</a></h4>
            <p className="description">
              <a href="#">{job.company}</a> - <strong>{job.type}</strong>
            </p>
          </td>
          <td className="meta">
            <span className="location">{job.location}</span>
            <span>{job.created_at}</span>
          </td>
        </tr>
      </table>

      <div className="more-info">
        <a href="#">more...</a>
      </div>

    </div>
  </div>
);