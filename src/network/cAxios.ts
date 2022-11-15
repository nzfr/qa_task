import axios, { AxiosStatic } from "axios";




const customAxios = (): AxiosStatic => {
    axios.create();
    axios.defaults.baseURL = process.env.REACT_APP_API_BASE_URL;
    return axios;
};


export default customAxios;
