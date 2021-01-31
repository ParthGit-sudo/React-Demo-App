//import { all } from "react-saga/effects";
import {all} from "redux-saga/effects"
import contactsSaga from  "./contactsSaga"
import contactDetailSaga from "./contactDetailSaga"

export default function* rootSaga(){
    yield all([
        contactsSaga(),
        contactDetailSaga()
    ])
}