
/** Archivo de Configuracion */
import {config} from '../Config/Config';


/**
 * Clase encargada de comunicarse con el Api de Git
 */
export class ApiService {

  constructor() {
    this.api = config.GITHUB_API;
  }

}