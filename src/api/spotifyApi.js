import { sApi } from './api'


export const spotifyApi = {
    /* authorize: () => api.get(), */
    topArtists: () => sApi.get(
        `/me/top/artists`
    ),

    topTracks: () => sApi.get(
        `/me/top/tracks`
    ),

    searchSongs: (q) => sApi.get(
        `/search`, { q, type: "track" }
    ),

    getUserPlaylists: (username) => sApi.get(
        `/users/${username}/playlists/`
    ),

    getPlaylist: (username, playlist_id) => sApi.get(
        `/users/${username}/playlists/${playlist_id}/tracks`
    ),

    getRecommendations: (seeds) => sApi.get(
        `/recommendations`, 
        {
            seed_artists: seeds.artists,
            seed_genres: seeds.genres,
            seed_tracks: seeds.tracks,
        }
    ),

}
