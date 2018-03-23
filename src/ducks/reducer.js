import axios from 'axios'
const initialState = {
    user: 'Bob',
    redditData: [],
    watsonData: []
}

const GET_USERINFO = 'GET_USERINFO';
const GET_USERINFO_PENDING = 'GET_USERINFO_PENDING'
const GET_USERINFO_FULFILLED = 'GET_USERINFO_FULFILLED'

// const GET_TEXT = 'GET_TEXT';
// const GET_MOOD = 'GET_MOOD';

export default function reducer(state = initialState, action) {
    switch (action.type) {

        // case GET_USERINFO_PENDING:
        //     return Object.assign({}, state, {loading: true});

        case GET_USERINFO_FULFILLED:
            return Object.assign({}, state, {user: action.payload.data.reddit[0].author, redditData: action.payload.data.reddit, watsonData: action.payload.data.watson } );

        // case GET_TEXT:
        //     return Object.assign({}, state, { text: action.payload });

        // case GET_MOOD:
        //     return Object.assign({}, state, { mood: action.payload });

        default: 
        return state;
    }
}

export function getUser( user ){
    console.log(user)
    const info = axios.post('/api/user', {user}).then(
         resp => {
             console.log(resp)
             return resp;
            }
        )
        console.log(info);
    return{
        type: GET_USERINFO,
        payload: info
    }
}

// export function getText( text ){
//     console.log(text);
//     return{
//         type: GET_TEXT,
//         payload: text
//     }
// }

// export function getMood( mood ){
//     return{
//         type: GET_MOOD,
//         payload: mood
//     }
// }