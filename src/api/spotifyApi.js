import { sApi } from './api'


export const spotifyApi = {
    /* authorize: () => api.get(), */
    topArtists: () => sApi.get(
        `/me/top/artists`
    ),

    topTracks: () => sApi.get(
        `/me/top/tracks`
    ),

    searchSongs: () => sApi.get(
         `/search`, { q: "name=candy", type: "track" } 
    ),

}
