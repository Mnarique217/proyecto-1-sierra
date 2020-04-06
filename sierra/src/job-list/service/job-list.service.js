import {Subject} from 'rxjs';

/** Servicio API */
import {ApiService} from '../../api';

/** Subject encargado de manejar eventos */
const subject = new Subject();

/** Retornar el Observale */
const jobList = () => subject.asObservable();

/** Obtener la lista completa de Trabajos, busqueda por parametros */
const get = async (params = null) => {
  const data = await ApiService.getJobs(params);
  subject.next(data);
}

export const JobListService = {
  jobList: jobList,
  get: get
};