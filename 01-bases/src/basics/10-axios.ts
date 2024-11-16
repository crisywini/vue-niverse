import axios from "axios";
import { GIFResponse } from "../interfaces/gif.response";

const apiKey = "AjTCwagyjhUSiaArQYgPsLhe7GOvW3b7";

export const giphyAPI = axios.create({
  baseURL: `https://api.giphy.com/v1/gifs`,
  params: {
    api_key: apiKey,
  },
});

//export default giphyAPI;

giphyAPI
  .get<GIFResponse>("random")
  .then((resp) => console.log(resp.data.data.images.fixed_height))
  .catch((error) => console.info(error));
