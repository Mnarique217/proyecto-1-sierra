/** Importacion de librerias */
import React from 'react';

/** Importacion de Componentes Externos */
import {TopJobContainerComponent} from './top-job-container/top-job-container.component';

/** Estilos del AppComponent */
import './top-jobs.scss';

/** Html del AppComponent */
export const html = (args) => (
  <section id="TopJobsComponent">

    <div className="container wow fadeInUp">

      <div className="section-header">
        <h3 className="section-title">Top - Jobs</h3>
        <p className="section-description">Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque</p>
      </div>

      <div className="row portfolio-wrapper">
        <div className="col-lg-12 col-md-12">

          <div id="carousel" className="carousel slide carousel-fade" data-ride="carousel">
            <div className="carousel-inner">{
              args.list.map((e, i) => (
                <div className={`carousel-item ${i === 0 ? 'active' : ''}`} key={'carousel-item' + i}>
                  <div className="container">
                    <div className="row justify-content-center">
                      {
                        e.map(job => (
                          <div className="col-lg-3 col-md-6 align-self-center" key={'top-job-container' + job.id}>
                            <TopJobContainerComponent job={job} onSelectJob={args.onSelectJob}></TopJobContainerComponent>
                          </div>
                        ))
                      }
                    </div>
                  </div>
                </div>
              ))
            }</div>

            <a className="carousel-control-prev" href="#carousel" role="button" data-slide="prev">
              <span className="carousel-control-prev-icon" aria-hidden="true"></span>
              <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carousel" role="button" data-slide="next">
              <span className="carousel-control-next-icon" aria-hidden="true"></span>
              <span className="sr-only">Next</span>
            </a>
          </div>


        </div>
      </div>

    </div>
  </section>
);