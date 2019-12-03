import axios from "axios";

const instance = axios.create({
  baseURL: "https://burger-builder-bb9cd.firebaseio.com/"
});

export default instance;
