import axios from "axios";

export function read(key: string, storage = window.localStorage) {
    if (!storage || !key) {
      return;
    }
  
    const item = storage.getItem(key);
    if (!item) {
      return;
    }
    // const parse = JSON.parse();
  
    try {
      return JSON.parse(item);
    } catch (e) {
      return JSON.parse(`"${item}"`);
    }
  }

export const readToken = () => {
  return read("token") || read("token", window.sessionStorage);
};

class BaseApi {
  httpService: any;
  constructor({
    suffix,
    responseType,
    baseUrl = "http://localhost:4000",
  }: any) {
    this.httpService = axios.create({
      baseURL: `${baseUrl}${suffix ? `/${suffix}` : ""}`,
      headers: {
        Accept: "/",
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Methods": "DELETE, POST, GET, OPTIONS ,PUT",
        "Access-Control-Allow-Headers":
          "Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With,Origin,Accept,X-Auth-Token,observe",
        "Access-Control-Allow-Credentials": "true",
        "Access-Control-Max-Age": "3600",
      },
      responseType: responseType && responseType,
    });

    this.requestInterceptors();
    this.responseInterceptors();
  }

  requestInterceptors() {
    this.httpService.interceptors.request.use(
      (config: any) => {
        const lang = localStorage.getItem("lang");
        config.headers.lang = lang;
        const token = `Bearer ${readToken()}`;

        if (token) {
          config.headers.Authorization = token;
        }

        return config;
      },

      (error: any) => Promise.reject(error)
    );
  }

  responseInterceptors() {
    this.httpService.interceptors.response.use(
      (response: any) => {
        //
        return response;
      },
      (error: any) => {
        // if (401 === error.response.status) {
        //   removeTokenHandler();
        // }
        return { error: error.response.data };
      }
    );
  }
}

export default BaseApi;
