import axios from "axios";

import pickBy from "lodash/pickBy";

import { API_BASE_URL } from "Services/Api/Constants";

const defaulHeader = {
  headers: {
    "content-type": "application/json",
  },
};

const instance = axios.create({
  baseURL: API_BASE_URL,
  timeout: 300000,
  defaulHeader,
});

const requestWithoutAuth = axios.create({
  baseURL: API_BASE_URL,
  timeout: 6000,
  defaulHeader,
});

export const postRequestNoAuth = ({ API = "", DATA = {}, HEADER = {}, PAYLOAD }) => {
  return new Promise((resolve, reject) => {
    requestWithoutAuth
      .post(
        API,
        pickBy(DATA, (val) => ![""].includes(val)),
        {
          ...(PAYLOAD ? PAYLOAD : { ...defaulHeader.headers, ...HEADER }),
        }
      )
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export const updateAuthToken = (token = "") => {
  instance.defaults.headers = {
    ...instance.defaults.headers,
    ...{ Authorization: token },
  };
};

export const postRequest = ({ API = "", DATA = {}, HEADER = {}, PAYLOAD }) => {
  return new Promise((resolve, reject) => {
    instance
      .post(apiWithAuth(API), DATA, {
        ...(PAYLOAD ? PAYLOAD : { ...defaulHeader.headers, ...HEADER }),
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export const getRequest = ({ API = "", headers = {}, params = {}, data = {}, responseType = "json" }) => {
  return new Promise((resolve, reject) => {
    instance
      .get(apiWithAuth(API), {
        ...defaulHeader.headers,
        ...(params && pickBy(params, (val) => ![""].includes(val))),
        ...(headers && pickBy(headers, (val) => ![""].includes(val))),
        responseType: responseType,
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error);
      });
  });
};

export const putRequest = ({ API = "", DATA = {}, PAYLOAD, HEADER = {} }) => {
  return new Promise((resolve, reject) => {
    instance
      .put(apiWithAuth(API), DATA, {
        ...(PAYLOAD ? pickBy(DATA, (val) => ![""].includes(val)) : { ...defaulHeader.headers, ...HEADER }),
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export const deleteRequest = ({ API = "", DATA = {}, PAYLOAD, HEADER = {} }) => {
  return new Promise((resolve, reject) => {
    instance
      .delete(apiWithAuth(API), {
        headers: {
          ...defaulHeader.headers,
          ...HEADER,
        },
        data: DATA,
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export const patchRequest = ({ API = "", DATA = {}, PAYLOAD, HEADER = {} }) => {
  return new Promise((resolve, reject) => {
    instance
      .patch(apiWithAuth(API), DATA, {
        ...(PAYLOAD ? pickBy(DATA, (val) => ![""].includes(val)) : { ...defaulHeader.headers, ...HEADER }),
      })
      .then((result) => {
        resolve(result);
      })
      .catch((error) => {
        reject(error.response);
      });
  });
};

export const apiWithAuth = (api) => {
  return api;
};

export default instance;
