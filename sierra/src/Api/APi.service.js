
/** Archivo de Configuracion */
import {config} from '../config';

/**
 * Url del api GITHUB_API
 */
const GITHUB_API = config.GITHUB_API;

export const ApiService = {

  /**
   * Cargar Lista de Trabajos, bajo los criterios de busqueda enviados
   */
  getJobs: keywords => {
    const {description, location, isFullTime} = keywords;
    let params = '';

    if (description.length) {
      params = `search=${keywords.isFullTime}`;
    }

    if (location.length) {
      params = `&location=${keywords.isFullTime}`;
    }

    params = `${params}&full_time=${isFullTime}`;

    fetch(`${GITHUB_API}/${params}`)
      .then(response => response.json())
      .then(data => {
        console.log(data);
      });
  }
}
