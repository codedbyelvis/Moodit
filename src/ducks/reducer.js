import axios from 'axios'
const initialState = {
    user: '',
    redditData: [],
    watsonData: [],
    time: '',
    picture: '',
    watsonNum: '',
    watsonToneName: ''
    // text: []
}

const GET_USERINFO = 'GET_USERINFO';
// const GET_USERINFO_PENDING = 'GET_USERINFO_PENDING'
const GET_USERINFO_FULFILLED = 'GET_USERINFO_FULFILLED'

const CLEAR_STORE = 'CLEAR_STORE'

// const GET_TEXT = 'GET_TEXT';
// const GET_TEXT_FULFILLED = 'GET_TEXT_FULFILLED';
// const GET_MOOD = 'GET_MOOD';

export default function reducer(state = initialState, action) {
    switch (action.type) {

        // case GET_USERINFO_PENDING:
        //     return Object.assign({}, state, {loading: true});

        case GET_USERINFO_FULFILLED:
            return Object.assign({}, state, {
                user: action.payload.data.reddit[0].author,
                redditData: action.payload.data.reddit,
                watsonData: action.payload.data.watson,
                time: action.payload.data.reddit[0].created_utc,
                picture: action.payload.data.iconPic,
                watsonNum: action.payload.data.watsonNum.map(num=>{
                    return parseInt(num, 10)
                }),
                watsonToneName: action.payload.data.toneId
            });

            case CLEAR_STORE:
            return Object.assign({}, state, {
                user: action.payload.newStore ,
                redditData: action.payload.newStore,
                watsonData: action.payload.newStore,
                time: action.payload.newStore,
                picture: action.payload.newStore,
                watsonNum: action.payload.newStore,
                watsonToneName: action.payload.newStore
            });

        // case GET_TEXT_FULFILLED:
        //     return Object.assign({}, state, { text: action.payload });

        // case GET_MOOD:
        //     return Object.assign({}, state, { mood: action.payload });

        default:
            return state;
    }
}

export function getUser(user) {
    console.log(user)
    const info = axios.post('/api/user', { user }).then(
        resp => {
            console.log(resp)
            return resp;
        }
    )
    // console.log(info);
    return {
        type: GET_USERINFO,
        payload: info
    }
}

export function clearReducer(){
    let newStore = {}

    return{
        type: CLEAR_STORE,
        payload: newStore
    }
}

// export function getText() {

//     const mapInfo = axios.get('/api/comments').then(
//         resp => {

//             return resp
//         }
//     )
//     console.log(mapInfo)
//     return {
//         type: GET_TEXT,
//         payload: mapInfo
//     }
// }

// export function getMood( mood ){
//     return{
//         type: GET_MOOD,
//         payload: mood
//     }
// }