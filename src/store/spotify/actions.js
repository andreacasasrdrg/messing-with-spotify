import { spotifyReducer } from "./reducer"
import {
    START_LOADING,
    FINISH_LOADING,
    SET_USER_TRACKS,
    SET_USER_ARTISTS,
    SET_ERROR,
    CLEAR_ERROR
} from "./types"
//import { activeCasesApi, dashboardApi } from "../../api"


const startLoading = () => dispatch => dispatch({ type: START_LOADING })
const finishLoading = () => dispatch => dispatch({ type: FINISH_LOADING })
const setUserTracks = payload  => dispatch => dispatch({ type: SET_USER_TRACKS, payload })
const setUserArtists = payload => dispatch => dispatch({ type: SET_USER_ARTISTS, payload })
const setError = () => dispatch => dispatch({ type: SET_ERROR })
const clearError = () => dispatch => dispatch({ type: CLEAR_ERROR })

export const initUser = () => async (dispatch) => {
    dispatch(startLoading())
    try {
        const userArtists = await spotifyReducer.topArtists()
        const userTracks = await spotifyReducer.topTracks()
        dispatch(setUserArtists(userArtists))
        dispatch(setUserTracks(userTracks))
        dispatch(finishLoading())

    } catch (error) {
        dispatch(finishLoading())
        dispatch(setError(error))
    }
}
/* export const initCompanyActiveCases = () => async (dispatch) => {

    dispatch(startLoading())
    try {
        const response = await activeCasesApi.getCompanyCases(company.id, "0", PAGINATION_SIZE.ACTIVE_CASES)
        dispatch(finishLoading(response.data))
        dispatch(setActiveCases({
            init: true,
            cases: response.data.results || [],
            total: response.data.total_result_amount,
        }))

    } catch (error) {
        dispatch(finishLoading())
        dispatch(setError(error))
    }

} */