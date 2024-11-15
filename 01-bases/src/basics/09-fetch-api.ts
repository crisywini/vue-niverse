import type { GIFResponse } from "../interfaces/gif.response";

const apiKey = "AjTCwagyjhUSiaArQYgPsLhe7GOvW3b7";

fetch(`https://api.giphy.com/v1/gifs/random?api_key=${apiKey}`)
  .then((resp) => resp.json())
  .then((body: GIFResponse) => console.log({ body }))
  .catch((err) => console.info(err));
