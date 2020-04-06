/** Importacion de librerias */
import React from 'react';

/** Estilos del JobContainerComponent */
import './job-list.scss';

import {JobContainerComponent} from './job-container/job-container.component'

/** Html del JobContainerComponent */
export const html = (index, displayRecords, pagesItems, previousPage, changePage, nextPage) => (
  <div className="container wow fadeIn">
    <div className="section-header">
      <h3 className="section-title">Job Search</h3>
      <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
    </div>

    {displayRecords.map(e => (
      <div className="row" key={`JobContainerComponent-${e.id}`}>
        <div className="col-lg-12 col-md-12 wow fadeInUp" data-wow-delay="0.2s">
          <JobContainerComponent key={e.id} job={e}></JobContainerComponent>
        </div>
      </div>
    ))}

    <div className="row">
      <div className="col-lg-12 col-md-12">
        <nav>
          <ul className="pagination pagination-sm justify-content-end">
            <li className="page-item">
              <a className="page-link" href={`#job-list/page=${index}`} aria-label="Previous" onClick={previousPage}>
                <span aria-hidden="true">&laquo;</span>
              </a>
            </li>

            {pagesItems.map((e) => (
              <li className={`page-item ${index === e ? 'active' : ''}`}>
                <a className="page-link" href={`#job-list/page=${index === e ? index : e}`} onClick={() => changePage(e)}>
                  {e}
                  {
                    index === e ? <span className="sr-only">(current)</span> : ''
                  }
                </a>
              </li>
            ))}

            <li className="page-item">
              <a className="page-link" href={`#job-list/page=${index}`} aria-label="Next" onClick={nextPage}>
                <span aria-hidden="true">&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>

  </div>
);