import React from "react";
import "./Landing.css";

const Landing = () => {
    /* const [isError, setIsError] = useState(false);
    const [errorId, setErrorId] = useState("");
    const [errorType, setErrorType] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
    }

    if (isError) {
    } */
    const handleAuth = React.useCallback(() => {
        const scopes = "user-top-read playlist-read-private"
        return window.location = `${process.env.REACT_APP_SPOTIFY_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_SPOTIFY_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_SPOTIFY_REDIRECT_URL}&scope=${encodeURIComponent(scopes)}&response_type=token&show_dialog=true`;
    }, [])

    return (
        <div className="landing">
            This is Landing
            <button type="submit" onClick={handleAuth}>Authorize app</button>
        </div>
    );
}

export default Landing;