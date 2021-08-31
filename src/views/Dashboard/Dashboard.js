import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from 'react-redux';

import { getParamValues } from '../../api/request'
import { spotifyApi } from '../../api/spotifyApi'
import { geniusApi } from "../../api/geniusApi";

import { initUser } from "../../store/spotify";

import { BTS_USERNAME, BTS_PLAYLISTS } from "../../utils/constants"

import "./Dashboard.css";


const Dashboard = (props) => {
    const dispatch = useDispatch();
    const { isLoading } = useSelector(state => state.spotify);

    useEffect(() => {
        const { history, location } = props;
        try {
            const spotify_access_token = getParamValues(location.hash);
            const spotify_expiryTime = new Date().getTime() + spotify_access_token.expires_in * 1000;
            localStorage.setItem('spotifyToken', JSON.stringify(spotify_access_token));
            localStorage.setItem('expiry_time', spotify_expiryTime);
            dispatch(initUser());
        } catch (error) {
            history.push('/');
        }
    }, [props, dispatch])

    const callHandler = React.useCallback(async () => {
        try {
            const firstRes = await spotifyApi.getPlaylist(BTS_USERNAME, BTS_PLAYLISTS.RM.ID)
        } catch (error) {
        }
    }, [])

    if (isLoading) {
        return <p>IS LOADING</p>
    }
    /* const [isError, setIsError] = useState(false);
    const [errorId, setErrorId] = useState("");
    const [errorType, setErrorType] = useState("");
    

    if (isError) {
    } */

    return (
        <div className="dashboard">
            This is Dashboard
            <button onClick={callHandler}>API Call</button>

        </div>
    );
}

export default Dashboard;