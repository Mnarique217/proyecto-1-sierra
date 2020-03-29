
/** Servicio API */
import {ApiService} from '../api';

/**
 * Servicio encargado de gestionar todo lo relacionado a trabajos
 */
export const JobService = {

    /**
     * Cargar Lista de Trabajos, bajo los criterios de busqueda enviados
     */
    getJobs: keywords =>  {
        ApiService.getJobs(keywords)
    },
};