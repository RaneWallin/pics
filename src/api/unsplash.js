import axios from "axios";
let key = process.env.REACT_APP_UNSLPASH_ACCESS;

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: `Client-ID ${key}`
  }
});
