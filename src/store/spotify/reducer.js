import {
    START_LOADING,
    FINISH_LOADING,
    SET_USER_TRACKS,
    SET_USER_ARTISTS,
    SET_ERROR,
    CLEAR_ERROR
} from "./types"


const initialState = {
    isLoading: true,
    btsTracks: {
        RM: [],
        JUNGKOOK: [],
        JIN: [],
        JIMIN: [],
        SUGA: [],
        JHOPE: [],
        V: []
    },
    btsRecommendations: {
        RM: [],
        JUNGKOOK: [],
        JIN: [],
        JIMIN: [],
        SUGA: [],
        JHOPE: [],
        V: []
    },
    userTracks: [],
    userArtists: [],
    tracksMatches: [],
    error: false
}


export const spotifyReducer = (state = initialState, action) => {
    switch (action.type) {
        case START_LOADING: {
            return {
                ...state,
                isLoading: true,
            }
        }

        case FINISH_LOADING: {
            return {
                ...state,
                isLoading: false,
            }
        }

        case SET_USER_TRACKS:{
            return {
                ...state,
                userTracks: action.payload,
            }
        }

        case SET_USER_ARTISTS:{
            return {
                ...state,
                userArtists: action.payload,
            }
        }

        case SET_ERROR:{
            return {
                ...state,
                error: true
            }
        }

        case CLEAR_ERROR:{
            return {
                ...state,
                error: false
            }
        }

        default: return state
    }
}
