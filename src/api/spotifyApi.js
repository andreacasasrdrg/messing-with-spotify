import { api } from './api'


export const spotifyApi = {
    /* authorize: () => api.get(), */

    topArtists: type => api.get(
        `/me/top/${type}`
    ),

}
