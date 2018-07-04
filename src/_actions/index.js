export * from './alert.actions';
export * from './user.actions';

import axios from "axios";

export const FETCH_POSTS = "fetch_posts";
export const FETCH_POST = "fetch_post";
export const CREATE_POST = "create_post";
export const DELETE_POST = "delete_post";

const ROOT_URL = "http://localhost:3000/getCandidate";

export function fetchPosts(email) {
    console.log(`${ROOT_URL}?email=${email}`)
    const request = axios.get(`${ROOT_URL}?email=${email}`);
    console.log(request);

    return {
        type: FETCH_POSTS,
        payload: request
    };
}

export function createPost(values, callback) {
    const request = axios
        .post(`${ROOT_URL}/posts`, values)
        .then(() => callback());

    return {
        type: CREATE_POST,
        payload: request
    };
}

export function fetchPost(id) {
    console.log('calling fetch post api', id)
    const request = axios.get(`${ROOT_URL}/posts/${id}`);

    return {
        type: FETCH_POST,
        payload: request
    };
}

export function deletePost(id, callback) {
    const request = axios
        .delete(`${ROOT_URL}/posts/${id}`)
        .then(() => callback());

    return {
        type: DELETE_POST,
        payload: id
    };
}
