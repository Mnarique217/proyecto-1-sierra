/** Importacion de librerias */
import React from 'react';

/** Html del KeywordsComponent */
import {html} from './keywords.html';

/** Servicio */
import {keywordsService} from '../services';

/**
 * Clase KeywordsComponent
 */
export class KeywordsComponent extends React.Component {

  constructor(props) {
    super(props);

    this.handleChangesJobDescription = this.handleChangesJobDescription.bind(this);
    this.handleChangesJobLocation = this.handleChangesJobLocation.bind(this);
    this.handleChangesJobType = this.handleChangesJobType.bind(this);
    this.submit = this.submit.bind(this);

    this.initJobDescription();
    this.initJobLocation();
    this.initJobType();

    this.keywords = {
      description: '',
      location: '',
      isFullTime: true,
    };
  }

  handleChangesJobDescription(event){
    this.keywords.description = event;
  }

  handleChangesJobLocation(event){
    this.keywords.location = event;
  }

  handleChangesJobType(event){
    if(event === 'full-time'){
      this.keywords.isFullTime = true;
      return;
    }
    this.keywords.isFullTime = false;
  }

  initJobDescription() {
    this.jobDescription = {
      icon: 'fa fa-shopping-bag',
      title: 'Search by descriptions',
      input: {
        id: 'job-descriptions-keywords',
        placeholder: 'Search by descriptions',
      },
      handleChanges: this.handleChangesJobDescription
    }
  }

  initJobLocation() {
    this.jobLocation = {
      icon: 'fa fa-map-marker',
      title: 'Search by location',
      input: {
        id: 'job-location-keywords',
        placeholder: 'Search by location',
      },
      handleChanges: this.handleChangesJobLocation
    }
  }

  initJobType() {
    this.jobType = {
      icon: 'fa fa-clock-o',
      title: 'Search by type job',
      selectedOption: 'full-time',
      handleChanges: this.handleChangesJobType
    }
  }

  submit() {
    keywordsService.updateKeywords(this.keywords);
  }

  render() {
    return html({
      jobDescription: this.jobDescription,
      jobLocation: this.jobLocation,
      jobType: this.jobType,
      submit: this.submit,
      search: 'Search'
    });
  }
};