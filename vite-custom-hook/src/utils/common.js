import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect, useRef, useState } from 'react';
import toast from 'react-hot-toast';

dayjs.extend(relativeTime);

const formatDate = (date) => date && dayjs(date).format('DD-MM-YYYY');

const showToastSuccess = (message) => message && toast.success(message);

const showToastError = (message) => message && toast.error(message);

const formatTime = (time) => time && dayjs(time).format('hh:mm A');

const formatDateAndTime = (date) => date && dayjs(date).format('DD-MM-YYYY hh:mm A');

const fromNow = (date) => dayjs(date).fromNow();

const capitalize = (s) => s && s[0].toUpperCase() + s.slice(1);

const getToken = async () => {
  try {
    const token = await localStorage.getItem('TOKEN');
    if (token !== null) {
      return token;
    }
  } catch (e) {
    return e;
  }
};

const saveToken = async (token) => {
  try {
    await localStorage.setItem('TOKEN', token);
  } catch (e) {
    return e;
  }
};

const removeToken = async () => {
  try {
    await localStorage.removeItem('TOKEN');
  } catch (e) {
    return e;
  }
};
const setRememberMe = async (key, value) => {
  try {
    await localStorage.setItem(key, value);
  } catch (e) {
    return e;
  }
};

const getRememberMe = () => {
  // eslint was causing issue in localsotrage.hasOwnProperty
  // using new javascript method is the way to go in 2023
  if (Object.hasOwn(localStorage, 'isChecked')) {
    return JSON.parse(localStorage.getItem('isChecked'));
  } else {
    return false;
  }
};


const useStateCallback = (initialState) => {
  const [state, setState] = useState(initialState);
  const cbRef = useRef(null); // mutable ref to store current callback

  const setStateCallback = (state, cb) => {
    cbRef.current = cb; // store passed callback to ref
    setState(state);
  };

  useEffect(() => {
    // cb.current is `null` on initial render, so we only execute cb on state *updates*
    if (cbRef.current) {
      cbRef.current(state);
      cbRef.current = null; // reset callback after execution
    }
  }, [state]);

  return [state, setStateCallback];
};

const getBaseURL = () => {
  return process.env.REACT_APP_BASE_URL;
};

const getNestedObject = (nestedObj = {}, path = '') =>
  path
    .split('.')
    .reduce((obj, key) => (obj[key] !== 'undefined' ? obj[key] : undefined), nestedObj);

const getDataFromObjectUsingPaths = (nestedObj, paths = '') => {
  if (typeof paths === 'object' && paths.constructor === Array) {
    let data = {};
    paths.forEach((path) => {
      const pathArray = path.split('.');
      data = { ...data, [pathArray.pop()]: getNestedObject(nestedObj, path) };
    });
    return data;
  }
  return getNestedObject(nestedObj, paths);
};

export {
  formatDate,
  formatTime,
  getToken,
  saveToken,
  removeToken,
  setRememberMe,
  getRememberMe,
  capitalize,
  fromNow,
  useStateCallback,
  getBaseURL,
  showToastSuccess,
  showToastError,
  formatDateAndTime,
  getDataFromObjectUsingPaths,
};
