/** Importacion de librerias */
import React from './node_modules/react';

/** Html del KeywordsComponent */
import {html} from './keywords.html';

/**
 * Clase KeywordsComponent
 */
export class KeywordsComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      description: '',
      location: '',
      isFullTime: false
    }

    this.handleChangeDescriptions = this.handleChangeDescriptions.bind(this);
    this.handleChangeLocation = this.handleChangeLocation.bind(this);
    this.handleChangeisFullTime = this.handleChangeisFullTime.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChangeDescriptions(event) {
    this.setState({description: event});
  }

  handleChangeLocation(event) {
    this.setState({location: event});
  }

  handleChangeisFullTime(event) {
    this.setState({isFullTime: event});
  }

  submit(){
    console.log('submit');
  }

  render() {
    return html({
      handleChangeDescriptions: this.handleChangeDescriptions,
      handleChangeLocation: this.handleChangeLocation,
      handleChangeisFullTime: this.handleChangeisFullTime,
      submit: this.submit
    });
  }
};