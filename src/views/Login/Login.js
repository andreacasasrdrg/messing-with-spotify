import React from "react";
import { useHistory } from "react-router-dom";
import "./Login.css";

const Login = (props) => {

    /* const [isError, setIsError] = useState(false);
    const [errorId, setErrorId] = useState("");
    const [errorType, setErrorType] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
        console.log("is loading")
    }

    if (isError) {
        console.log("is Error")
    } */

    const handleLogin = React.useCallback(()=>{
        let scopes = "user-top-read"
        window.location = `${process.env.REACT_APP_AUTHORIZE_URL}?client_id=${process.env.REACT_APP_CLIENT_ID}&redirect_uri=${process.env.REACT_APP_REDIRECT_URL}&scope=${encodeURIComponent(scopes)}&response_type=token&show_dialog=true`;
    },[])

    return (
        <div className="login">
            This is Login
            <button type="submit" onClick={handleLogin}>Login to spotify</button>
        </div>
    );
}

export default Login;