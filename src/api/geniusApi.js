import { gApi } from './api'


export const geniusApi = {

    search: (q) => gApi.get(
        `/search?q=${q}&access_token=${process.env.REACT_APP_GENIUS_TOKEN}`,

    ),

}
