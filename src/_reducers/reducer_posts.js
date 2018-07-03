import _ from "lodash";
import { FETCH_POSTS, FETCH_POST, DELETE_POST } from "../_actions";

export default function (state = {}, action) {
    let data = [{ "id": 254172, "title": "Analyst-SYstem/dev", "application_status": "applied", "HR": "xyz", "Hiring_Manager": "abc" },
    { "id": 254223, "title": "Spec-SYstem/dev", "application_status": "applied", "HR": "xyz", "Hiring_Manager": "abc" }];


    switch (action.type) {
        case DELETE_POST:
            return _.omit(state, action.payload);
        case FETCH_POST: {
            console.log('siofgiysdgfdbsfugsdyfdyvfuk', action.payload)
            return { ...state, [action.payload.data.id]: action.payload.data };
        }
        case FETCH_POSTS:
            //return _.mapKeys(action.payload.data, "id");
            return _.mapKeys(data, "id");
        default:
            return state;
    }
}
