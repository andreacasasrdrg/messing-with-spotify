import React, { useEffect, useState } from "react";

import "./Dashboard.css";
import { getParamValues } from '../../api/request'
import { spotifyApi } from '../../api/spotifyApi'
import { geniusApi } from "../../api/geniusApi";

const Dashboard = (props) => {
    const [isLoading, setIsLoading] = useState(true);
    const [tracks, setTracks] = useState([])

    useEffect(() => {
        const { history, location } = props;
        try {
            const spotify_access_token = getParamValues(location.hash);
            const spotify_expiryTime = new Date().getTime() + spotify_access_token.expires_in * 1000;
            localStorage.setItem('spotifyToken', JSON.stringify(spotify_access_token));
            localStorage.setItem('expiry_time', spotify_expiryTime);
            setIsLoading(false)
        } catch (error) {
            history.push('/');
        }
    }, [props])

    const callHandler = React.useCallback(async () => {
        setIsLoading(true)
        try {
            const firstRes = await spotifyApi.searchSongs()
            const secondRes = await spotifyApi.topTracks()
            const tresRes = await geniusApi.search()

            console.log(firstRes.data)
            console.log(secondRes.data)
            console.log(tresRes)
            setIsLoading(false)
        } catch (error) {
            console.log(error)
            setIsLoading(false)
        }
    }, [])



    if (isLoading) {
        return <p>IS LOADING</p>
    }
    /* const [isError, setIsError] = useState(false);
    const [errorId, setErrorId] = useState("");
    const [errorType, setErrorType] = useState("");
    

    if (isError) {
        console.log("is Error")
    } */

    return (
        <div className="dashboard">
            This is Dashboard
            <button onClick={callHandler}>API Call</button>

        </div>
    );
}

export default Dashboard;