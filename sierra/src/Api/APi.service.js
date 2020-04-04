/** Archivo de Configuracion */
import {config} from '../config';

/** Url del api GITHUB_API */
const GITHUB_API = config.GITHUB_API;

const get = async (params) => {
  const response = await fetch(`${GITHUB_API}${params}`);
  const data = response.json();
  return data;
}

const getTopJobs = async (count) => {
  const data = await get(null);
  const list = data.filter(e => e.company_logo !== null);
  return list.slice(0, count);
}


export const ApiService = {
  getTopJobs: getTopJobs
}


// if (description.length) {
//   params = `search=${keywords.isFullTime}`;
// }

// if (location.length) {
//   params = `&location=${keywords.isFullTime}`;
// }

// params = `${params}&full_time=${isFullTime}`;
