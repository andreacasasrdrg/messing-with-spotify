import React, { useEffect, useState } from "react";

import "./Dashboard.css";
import { getParamValues } from '../../api/request'
import { spotifyApi } from '../../api/spotifyApi'

const Dashboard = (props) => {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const { setExpiryTime, history, location } = props;
        try {
            const access_token = getParamValues(location.hash);
            const expiryTime = new Date().getTime() + access_token.expires_in * 1000;
            localStorage.setItem('params', JSON.stringify(access_token));
            localStorage.setItem('expiry_time', expiryTime);
            setIsLoading(false)
        } catch (error) {
            history.push('/');
        }
    }, [])

    const callHandler = React.useCallback(async () => {
        try {
            const response = await spotifyApi.topArtists("tracks")
            console.log(response.data)
        } catch (error) {
            console.log(error.response)
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