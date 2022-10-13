import axios from 'axios';
import {EventRegister} from 'react-native-event-listeners';
import config from 'config/config';
//import {AsyncStorage} from 'react-native';

//import config from '@constants/config';
const apiUrl = config.apiUrl;
const axiosInstance = axios;

const errorHandler = error => {
  const urlLogin = `${apiUrl}/auth/login`;
  const responseUrl = error?.request?.responseURL;
  if (error?.response?.status === 401 && responseUrl !== urlLogin) {
    EventRegister.emit('tokenListener', {expired: true});
  }
  return Promise.reject({...error});
};

const successHandler = response => {
  return response;
};

axiosInstance.interceptors.response.use(
  response => successHandler(response),
  error => errorHandler(error),
);

/**
 * Populate headers for request
 *
 * @param {Object} headerItems
 */
const populateHeaders = async headerItems => {
  let items = {};
  const userToken = '';
  if (userToken) {
    items.Authorization = `Bearer ${userToken}`;
  }
  if (
    typeof headerItems === 'object' &&
    !Array.isArray(headerItems) &&
    headerItems !== null
  ) {
    const headerEntries = Object.entries(headerItems);
    if (headerEntries.length) {
      for (let i = 0; i < headerEntries.length; i++) {
        items[headerEntries[i][0]] = headerEntries[i][1];
      }
    }
  }
  return {headers: items};
};

/**
 *
 * @param {object} obj { method, data, params, url }
 */
const request = async ({method, data, params, url, endpoint}) => {
  const config = {
    headers: await populateHeaders(),
    data: JSON.stringify(data),
    params,
    url: url,
    method,
  };
  return new Promise((resove, reject) => {
    axios(config)
      .then(res => resove(res))
      .catch(err => reject(err));
  });
};

/**
 * Get request
 *
 * @param {string} url
 * @param {Object} params
 * @param {Object} headers
 */
const get = async (url, params, headers, host = '', responseType) => {
  const headersAll = await populateHeaders(headers);
  host = host === '' ? apiUrl : host;
  return axiosInstance.get(`${host}${url}`, {
    params: params,
    headers: headersAll.headers,
    responseType,
  });
};

/**
 * Post request
 *
 * @param {string} url
 * @param {Object} data
 * @param {Object} headers
 */
const post = async (url, data, headers, host = '') => {
  const headersAll = await populateHeaders(headers);
  host = host === '' ? apiUrl : host;
  console.log(`[+] Post ${host}${url}`, data, headersAll);
  return axiosInstance.post(`${host}${url}`, data, headersAll);
};

/**
 * Put request
 *
 * @param {string} url
 * @param {Object} data
 * @param {Object} headers
 */
const put = async (url, data, headers) => {
  const headersAll = await populateHeaders(headers);
  return axiosInstance.put(`${apiUrl}${url}`, data, headersAll);
};

/**
 * Patch request
 *
 * @param {string} url
 * @param {Object} data
 * @param {Object} headers
 */
const patch = async (url, data, headers, host = '') => {
  const headersAll = await populateHeaders(headers);
  host = host === '' ? apiUrl : host;
  return axiosInstance.patch(`${host}${url}`, data, headersAll);
};

/**
 * Delete request
 *
 * @param {string} url
 */
const del = async (url, headers) => {
  const headersAll = await populateHeaders(headers);
  return axiosInstance.delete(`${apiUrl}${url}`, headersAll);
};

export {post, get, put, patch, del, request};
