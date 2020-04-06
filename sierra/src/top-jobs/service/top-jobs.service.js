import {Subject} from 'rxjs';

/** Servicio API */
import {ApiService} from '../../api';

/** Subject encargado de manejar eventos */
const subject = new Subject();

/** Retornar el Observale */
const topJobs = () => subject.asObservable();

/** Obtener la lista completa de los trabajos Top */
const get = async (count) => {
  const data = await ApiService.getTopJobs(count);
  subject.next(data);
}

export const TopJobService = {
  topJobs: topJobs,
  get: get
};