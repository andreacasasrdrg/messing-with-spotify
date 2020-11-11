import { request } from './request'


export const api = {
    get: (url, params) => request('get', url, { params }),
    post: (url, { body, params, headers }) => request('post', url, { body, params, headers }),

    /* delete: (url, params) => request('delete', url, { params}),

    put: (url, { body, params, headers }) => request('put', url, { body, params, headers }),

    patch: (url, params) => request('patch', url, { params }), */

}
