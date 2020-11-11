import axios from "axios"
/* import { store } from "../store" */


const spotifyInstance = axios.create({
    baseURL: "https://api.spotify.com/v1"
})
spotifyInstance.interceptors.request.use(config => {
    //if the url is part of amazonaws, token is not sended.
    const params = JSON.parse(localStorage.getItem('spotifyToken'));
    if (params) {
        config.headers['Authorization'] = `Bearer ${params.access_token}`
    }
    return config;
})

const geniusInstance = axios.create({
    baseURL: "https://api.genius.com"
})

export const getParamValues = (url) => {
    return url
        .slice(1)
        .split('&')
        .reduce((prev, curr) => {
            const [title, value] = curr.split('=');
            prev[title] = value;
            return prev;
        }, {});
};

export const spotifyRequest = (method, url, options) => {
    const headers = createContentType(options)

    return spotifyInstance.request({
        method,
        url,
        headers,
        params: options.params || null,
        data: createBody(options, headers),
    })
}

export const geniusRequest = (method, url, options) => {
    const headers = createContentType(options)
console.log(process.env.REACT_APP_GENIUS_TOKEN)
    return geniusInstance.request({
        method,
        url,
        headers,
        params: options.params || null,
        data: createBody(options, headers),
    })
}


const createContentType = (options) => {
    const header = contentTypeFromOptions(options)

    return header ? { 'Content-Type': header } : {}
}


const contentTypeFromOptions = (options) => {
    if (options && options.headers && options.headers['Content-Type']) {
        return options.headers['Content-Type']
    }

    if (options && options.body && options.body instanceof FormData) {
        return 'multipart/form-data'
    }

    return typeof options.body === 'object'
        ? 'application/json'
        : (options.headers && options.headers['Content-Type']) || ''
}


const createBody = (options, headers) => {
    const contentType = headers['Content-Type']
    if (options.body && contentType && contentType.includes('json')) {
        return JSON.stringify(options.body)
    }
    return options.body
}