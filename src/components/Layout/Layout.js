import React from "react";

import "./Layout.css";

const Layout = (props) => {
    /* const [isError, setIsError] = useState(false);
    const [errorId, setErrorId] = useState("");
    const [errorType, setErrorType] = useState("");
    const [isLoading, setIsLoading] = useState(true);

    if (isLoading) {
    }

    if (isError) {
    } */

    return (
        <div className="privateLayout">
            PRIVATE
            {props.children}
        </div>
    );
}

const LayoutPublic = (props) => {
    return (
        <div className="publicLayout">
            PUBLIC
            {props.children}
        </div>
    )
}

export { Layout, LayoutPublic };