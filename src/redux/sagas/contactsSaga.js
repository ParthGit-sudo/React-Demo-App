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
        const contacts = yield call(getApi);
        yield put({type:'GET_CONTACTS_SUCCESS',contacts:contacts})
    }
    catch (err){
        yield put({type: 'GET_CONTACTS_FAILED',message: err.message})
    }
}

function* contactsSaga(){
    yield takeEvery('GET_CONTACTS_REQUESTED',fetchContacts)
}

export default contactsSaga;