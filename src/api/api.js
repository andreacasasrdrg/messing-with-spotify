import { spotifyRequest, geniusRequest } from './request'


export const sApi = {
    get: (url, params) => spotifyRequest('get', url, { params }),
    post: (url, { body, params, headers }) => spotifyRequest('post', url, { body, params, headers }),

    /* delete: (url, params) => request('delete', url, { params}),

    put: (url, { body, params, headers }) => request('put', url, { body, params, headers }),

    patch: (url, params) => request('patch', url, { params }), */
}

export const gApi = {
    get: (url, params) => geniusRequest('get', url, { params }),
    post: (url, { body, params, headers }) => geniusRequest('post', url, { body, params, headers }),

    /* delete: (url, params) => request('delete', url, { params}),

    put: (url, { body, params, headers }) => request('put', url, { body, params, headers }),

    patch: (url, params) => request('patch', url, { params }), */

}
