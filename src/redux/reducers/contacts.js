import * as type from "../types"

const initialState = {
    contacts: []
}

export default function contacts(state =initialState, action){
    switch(action.type){
        case type.GET_CONTACTS_REQUESTED:
            return {
                ...state,
            }
        case type.GET_CONTACTS_SUCCESS:
            return {
                ...state,
                contacts: action.contacts,
            }
            case type.GET_CONTACTS_FAILED:
            return {
                ...state,
                error: action.message,
            }
            default:
                return state;
    }
}