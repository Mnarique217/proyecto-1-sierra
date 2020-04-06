/** Importacion de librerias */
import React from 'react';
/** Configuracion */
import {config as CONFIG} from '../config';
/** Servicio */
import {JobListService} from './service/job-list.service';
/** Html del ListJobsComponent */
import {html} from './job-list.html';

/**
 * Clase ListJobsComponent
 */
export class JobListComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      index: 1,
      page: 1,
      totalRecords: [],
      pagesItems: [1, 2, 3]
    };

    this.previousPage = this.previousPage.bind(this);
    this.changePage = this.changePage.bind(this);
    this.nextPage = this.nextPage.bind(this);
  }

  componentDidMount() {
    this.subscribeToService();
    JobListService.get({page: 1});
  }

  subscribeToService() {
    JobListService.jobList().subscribe(list => {
      this.setState({totalRecords: [...this.state.totalRecords, ...list]});
    });
  }

  previousPage() {
    const {index, pagesItems} = this.state;
    if (index > 1) {
      let newIndex = index - 1;
      let newPagesItems = pagesItems;

      if (newIndex < newPagesItems[0]) {
        newPagesItems = [newIndex, ...pagesItems.slice(0, 2)]
      }

      this.setState({
        index: newIndex,
        pagesItems: newPagesItems
      });
    }
  }

  changePage(index) {
    if (index !== this.state.index) {
      this.setState({index: index});
    }
  }

  nextPage() {
    const {index, totalRecords, page, pagesItems} = this.state;
    let newIndex = index + 1;
    let newPage = page;
    let newPagesItems = pagesItems;

    if (newIndex > CONFIG.maxPage) {
      return;
    }


    if ((newIndex * 10) > totalRecords.length) {
      newPage = page + 1;
      JobListService.get({page: newPage});
    }

    if (newIndex > newPagesItems[newPagesItems.length - 1]) {
      newPagesItems = [...pagesItems.slice(1, 3), newIndex]
    }

    this.setState({
      index: newIndex,
      page: newPage,
      pagesItems: newPagesItems
    })
  }

  render() {
    const {index, totalRecords} = this.state;
    const init = (index - 1) * 10;
    const displayRecords = totalRecords.slice(init, init + 10);
    console.log(this.state.pagesItems);

    return html(
      this.state.index,
      displayRecords,
      this.state.pagesItems,
      this.previousPage,
      this.changePage,
      this.nextPage
    );
  }
}
