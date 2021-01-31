import * as type from "../types"

const initialState = {
    contactDetail: {},
    id: null
}

export default function contactDetail(state =initialState, action){
    switch(action.type){
        case type.GET_CONTACTSDETAIL_REQUESTED:
            return {
                ...state,
            }
        case type.GET_CONTACTSDETAIL_SUCCESS:
            return {
                ...state,
                contactDetail: action.contactDetail,
            }
            case type.GET_CONTACTSDETAIL_FAILED:
            return {
                ...state,
                error: action.message,
            }
            default:
                return state;
    }
}