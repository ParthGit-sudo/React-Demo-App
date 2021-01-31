import {call,put, takeEvery} from "redux-saga/effects";
import axios from "axios";

let apiUrl = "https://reqres.in/api/users"

function getApi(){
    return axios(apiUrl,{
        method: 'GET',
        headers:{
            'Content-Type': 'application/json'
        }
    }
    )
    .then((response) => response.data)
    .catch((err)=> {throw err})
}

function* fetchContacts(action){
    try{
        apiUrl = `https://reqres.in/api/users/${action.payload}`
        const contactDetail = yield call(getApi);
        yield put({type:'GET_CONTACTSDETAIL_SUCCESS',contactDetail:contactDetail})
    }
    catch (err){
        yield put({type: 'GET_CONTACTSDETAIL_FAILED',message: err.message})
    }
}

function* contactDetailSaga(){
    yield takeEvery('GET_CONTACTSDETAIL_REQUESTED',fetchContacts)
}

export default contactDetailSaga;