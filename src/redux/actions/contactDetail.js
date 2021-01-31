import * as type from "../types"

export function getContactDetail(id){
    return {
        type: type.GET_CONTACTSDETAIL_REQUESTED,
        payload: id
    }
}