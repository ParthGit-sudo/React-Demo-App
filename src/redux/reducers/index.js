import { combineReducers } from "redux"
import contacts from "./contacts"
import contactDetail from "./contactDetail"
const rootReducer = combineReducers ({
    contacts: contacts,
    contactDetail:contactDetail
})

export default rootReducer;