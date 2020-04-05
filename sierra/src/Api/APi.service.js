/** Archivo de Configuracion */
import {config} from '../config';

/** Url del api GITHUB_API */
const GITHUB_API = config.GITHUB_API;

/**
 * Realiza el proceso Fetch al API
 * @param {*} params
 */
const get = async (params) => {
  const response = await fetch(`${GITHUB_API}&markdown=true&${params}`);
  const data = response.json();
  return data;
}

/**
 * Cargar una lista de trabajos bajo los criterios definidos en los filtros
 * @param {*} params
 */
const getJob = async (params = null) => {
  let urlParams = '';

  if (params) {
    urlParams = createParams(params);
  }

  return await get(urlParams);
}

/**
 * Crear los parametros de busqueda
 * @param {*} args
 */
const createParams = (args) => {
  const {description, location} = args;
  let params = `full_time=${args.isFullTime}`;

  if (description.length) {
    params = `&search=${args.description}`;
  }

  if (location.length) {
    params += `&location=${args.location}`;
  }

  return params;
}

/**
 * Obtener una lista de trabajos TOP
 * @param {*} count
 */
const getTopJobs = async (count) => {
  const data = await get();
  const list = data.filter(e => e.company_logo !== null);
  return list.slice(0, count);
}

export const ApiService = {
  getTopJobs: getTopJobs,
  getJob: getJob
}

